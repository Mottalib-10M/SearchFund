import { emailLayout, emailHeading, emailText, emailButton } from "./layout";

interface ContactConfirmationParams {
  name: string;
}

export function contactConfirmationEmail({ name }: ContactConfirmationParams) {
  const firstName = name.split(" ")[0];

  const html = emailLayout({
    content: `
      ${emailHeading(`Hello ${firstName},`)}
      ${emailText("We have received your message and wanted to let you know that our team is on it.")}
      ${emailText("We will get back to you within <strong style=\"color:#1D1D1F;\">24 to 48 business hours</strong>.")}
      ${emailText("In the meantime, feel free to explore our platform.")}
      <div style="margin-top:8px;margin-bottom:24px;">
        ${emailButton("https://www.searchfundmarket.com", "Visit SearchFundMarket")}
      </div>
      ${emailText("Thank you for reaching out.")}
    `,
    footerNote: "You are receiving this email because you submitted a message on SearchFundMarket.",
  });

  const text = `Hello ${firstName},\n\nWe have received your message and wanted to let you know that our team is on it.\n\nWe will get back to you within 24 to 48 business hours.\n\nThank you for reaching out.\n\n— The SearchFundMarket Team`;

  return { html, text };
}
