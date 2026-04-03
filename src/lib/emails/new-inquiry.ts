import { emailLayout, emailButton, emailHeading, emailText } from "./layout";

interface NewInquiryEmailParams {
  listingTitle: string;
  senderName: string;
  message: string;
}

export function newInquiryEmail({
  listingTitle,
  senderName,
  message,
}: NewInquiryEmailParams) {
  const subject = `New inquiry on "${listingTitle}"`;

  const html = emailLayout({
    content: `
      ${emailHeading("New inquiry received")}
      ${emailText(`<strong>${senderName}</strong> is interested in your listing <strong>"${listingTitle}"</strong>.`)}
      <div style="background-color:#F5F5F7;border-radius:12px;padding:16px 20px;margin:0 0 24px;">
        <p style="margin:0;font-size:14px;color:#1D1D1F;line-height:1.6;font-style:italic;">"${message}"</p>
      </div>
      ${emailButton("https://searchfundmarket.com/dashboard/messages", "View message")}
    `,
  });

  const text = `New inquiry on "${listingTitle}"\n\n${senderName} sent you a message:\n"${message}"\n\nView it at: https://searchfundmarket.com/dashboard/messages`;

  return { html, text, subject };
}
