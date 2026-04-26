import { emailLayout, emailHeading, emailText } from "./layout";

const BRAND = {
  black: "#1D1D1F",
  gray: "#86868B",
};

interface ContactFormEmailParams {
  name: string;
  email: string;
  message: string;
}

export function contactFormEmail({
  name,
  email,
  message,
}: ContactFormEmailParams) {
  const messageHtml = message
    .split("\n")
    .map((line) => `<p style="margin:0 0 8px;font-size:14px;color:${BRAND.black};line-height:1.6;">${line || "&nbsp;"}</p>`)
    .join("");

  const html = emailLayout({
    content: `
      ${emailHeading("New Contact Form Message")}
      ${emailText(`From: ${name} (${email})`)}
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        <tr>
          <td style="background-color:#F5F5F7;border-radius:12px;padding:20px;">
            <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:${BRAND.gray};text-transform:uppercase;letter-spacing:0.5px;">Message</p>
            ${messageHtml}
          </td>
        </tr>
      </table>
      ${emailText(`Reply directly to this email to respond to ${name}.`)}
    `,
    footerNote: "Sent from the SearchFundMarket contact form.",
  });

  const text = `New contact form message\n\nFrom: ${name} (${email})\n\n${message}`;

  return { html, text };
}
