import { emailLayout, emailButton, emailHeading, emailText } from "./layout";

interface MagicLinkEmailParams {
  url: string;
  host: string;
}

export function magicLinkEmail({ url }: MagicLinkEmailParams) {
  const subject = "Sign in to SearchFundMarket";

  const html = emailLayout({
    content: `
      ${emailHeading("Sign in to your account")}
      ${emailText("Click the button below to securely sign in. No password needed.")}
      ${emailButton(url, "Sign in")}
    `,
    footerNote:
      "This link expires in 24 hours and can only be used once. If you didn't request this email, you can safely ignore it.",
  });

  const text = `Sign in to SearchFundMarket\n\nClick the link below to sign in:\n${url}\n\nThis link expires in 24 hours and can only be used once.\nIf you didn't request this email, you can safely ignore it.`;

  return { html, text, subject };
}
