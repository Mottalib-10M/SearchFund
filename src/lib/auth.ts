import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import { magicLinkEmail } from "./emails/magic-link";
import { welcomeEmail } from "./emails/welcome";
import { sendEmail } from "./emails/send";
import type { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    EmailProvider({
      from: process.env.EMAIL_FROM ?? "noreply@searchfundmarket.com",
      async sendVerificationRequest({ identifier: email, url }) {
        const { host } = new URL(url);
        const { html, text, subject } = magicLinkEmail({ url, host });
        await sendEmail({ to: email, subject, html, text });
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  events: {
    async createUser({ user }) {
      if (user.email) {
        const name = user.name ?? user.email.split("@")[0];
        const { html, text, subject } = welcomeEmail({ name });
        await sendEmail({ to: user.email, subject, html, text }).catch(() => {});
      }
    },
  },
  callbacks: {
    async jwt({ token, user, trigger }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email! },
          select: { id: true, role: true, name: true, image: true },
        });
        if (dbUser) {
          token.id = dbUser.id;
          token.role = dbUser.role;
          token.name = dbUser.name;
          token.picture = dbUser.image;
        }
      }
      // Re-fetch user data when session is updated (e.g. after onboarding)
      if (trigger === "update" && token.id) {
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id as string },
          select: { id: true, role: true, name: true, image: true },
        });
        if (dbUser) {
          token.role = dbUser.role;
          token.name = dbUser.name;
          token.picture = dbUser.image;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as Record<string, unknown>).id = token.id;
        (session.user as Record<string, unknown>).role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/onboarding",
  },
};
