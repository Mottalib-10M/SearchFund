import { emailLayout, emailButton, emailHeading, emailText } from "./layout";

interface WelcomeEmailParams {
  name: string;
}

export function welcomeEmail({ name }: WelcomeEmailParams) {
  const subject = "Welcome to SearchFundMarket";

  const html = emailLayout({
    content: `
      ${emailHeading(`Welcome, ${name}`)}
      ${emailText("Your account is ready. SearchFundMarket connects search fund entrepreneurs, investors, and business sellers across Europe.")}
      ${emailText("Complete your profile to get discovered by the right people.")}
      ${emailButton("https://searchfundmarket.com/auth/onboarding", "Complete your profile")}
    `,
  });

  const text = `Welcome to SearchFundMarket, ${name}!\n\nYour account is ready. Complete your profile to get discovered by the right people.\n\nhttps://searchfundmarket.com/auth/onboarding`;

  return { html, text, subject };
}
