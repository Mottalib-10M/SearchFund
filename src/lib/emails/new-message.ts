import { emailLayout, emailButton, emailHeading, emailText } from "./layout";

interface NewMessageEmailParams {
  senderName: string;
  preview: string;
}

export function newMessageEmail({
  senderName,
  preview,
}: NewMessageEmailParams) {
  const subject = `New message from ${senderName}`;

  const html = emailLayout({
    content: `
      ${emailHeading(`Message from ${senderName}`)}
      <div style="background-color:#F5F5F7;border-radius:12px;padding:16px 20px;margin:0 0 24px;">
        <p style="margin:0;font-size:14px;color:#1D1D1F;line-height:1.6;">"${preview}"</p>
      </div>
      ${emailButton("https://searchfundmarket.com/dashboard/messages", "Reply")}
    `,
  });

  const text = `New message from ${senderName}\n\n"${preview}"\n\nReply at: https://searchfundmarket.com/dashboard/messages`;

  return { html, text, subject };
}
