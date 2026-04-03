import { emailLayout, emailButton, emailHeading, emailText } from "./layout";

interface ConnectionRequestEmailParams {
  senderName: string;
  senderRole: string;
}

export function connectionRequestEmail({
  senderName,
  senderRole,
}: ConnectionRequestEmailParams) {
  const subject = `${senderName} wants to connect`;

  const html = emailLayout({
    content: `
      ${emailHeading("New connection request")}
      ${emailText(`<strong>${senderName}</strong> (${senderRole}) wants to connect with you on SearchFundMarket.`)}
      ${emailButton("https://searchfundmarket.com/dashboard/connections", "View request")}
    `,
  });

  const text = `${senderName} (${senderRole}) wants to connect with you on SearchFundMarket.\n\nView the request: https://searchfundmarket.com/dashboard/connections`;

  return { html, text, subject };
}
