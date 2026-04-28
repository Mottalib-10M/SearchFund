import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/emails/send";
import { contactFormEmail } from "@/lib/emails/contact-form";
import { contactConfirmationEmail } from "@/lib/emails/contact-confirmation";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

const CONTACT_EMAIL = "amradif@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;
    const { html, text } = contactFormEmail({ name, email, message });
    const confirmation = contactConfirmationEmail({ name });

    await Promise.all([
      sendEmail({
        to: CONTACT_EMAIL,
        subject: `[Contact] Message from ${name}`,
        html,
        text,
      }),
      sendEmail({
        to: email,
        subject: "We received your message - SearchFundMarket",
        html: confirmation.html,
        text: confirmation.text,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
