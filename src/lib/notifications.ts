import { prisma } from "./prisma";

type CreateNotificationInput = {
  userId: string;
  type: "CONNECTION_REQUEST" | "CONNECTION_ACCEPTED" | "NEW_MESSAGE" | "NEW_LISTING" | "INQUIRY_RECEIVED" | "SYSTEM";
  title: string;
  message: string;
  link?: string;
};

export async function createNotification(input: CreateNotificationInput) {
  try {
    return await prisma.notification.create({
      data: {
        userId: input.userId,
        type: input.type,
        title: input.title,
        message: input.message,
        link: input.link ?? null,
      },
    });
  } catch (err) {
    console.error("Failed to create notification:", err);
    return null;
  }
}
