import { getResend } from "../resend";

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
  text: string;
}

export async function sendEmail({ to, subject, html, text }: SendEmailParams) {
  const from = process.env.EMAIL_FROM ?? "noreply@searchfundmarket.com";

  try {
    const result = await getResend().emails.send({
      from,
      to,
      subject,
      html,
      text,
    });
    console.log("[Email] Sent to", to, " - ", subject, result);
    return result;
  } catch (error) {
    console.error("[Email] Failed to send to", to, " - ", subject, error);
    throw error;
  }
}
