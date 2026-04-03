const BRAND = {
  black: "#1D1D1F",
  gray: "#86868B",
  grayLight: "#E8E8ED",
  bg: "#F5F5F7",
  accent: "#0071E3",
  white: "#FFFFFF",
};

export function emailLayout({
  content,
  footerNote,
}: {
  content: string;
  footerNote?: string;
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:${BRAND.bg};font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.bg};padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:460px;background-color:${BRAND.white};border-radius:16px;overflow:hidden;">
          <!-- Logo -->
          <tr>
            <td style="padding:40px 40px 0;text-align:center;">
              <span style="font-size:22px;letter-spacing:-0.3px;">
                <span style="font-weight:600;color:${BRAND.black};">SearchFund</span><span style="font-weight:300;color:${BRAND.gray};">Market</span>
              </span>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding:32px 40px;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:0 40px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-top:1px solid ${BRAND.grayLight};padding-top:24px;">
                    ${footerNote ? `<p style="margin:0 0 8px;font-size:12px;color:${BRAND.gray};text-align:center;line-height:1.5;">${footerNote}</p>` : ""}
                    <p style="margin:0;font-size:12px;color:${BRAND.gray};text-align:center;line-height:1.5;">
                      &copy; ${new Date().getFullYear()} SearchFundMarket
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function emailButton(href: string, label: string) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center">
      <a href="${href}" target="_blank" style="display:inline-block;background-color:${BRAND.accent};color:${BRAND.white};font-size:15px;font-weight:500;text-decoration:none;padding:12px 32px;border-radius:980px;letter-spacing:-0.1px;">
        ${label}
      </a>
    </td>
  </tr>
</table>`;
}

export function emailHeading(text: string) {
  return `<p style="margin:0 0 8px;font-size:17px;font-weight:600;color:${BRAND.black};text-align:center;">${text}</p>`;
}

export function emailText(text: string) {
  return `<p style="margin:0 0 24px;font-size:15px;color:${BRAND.gray};text-align:center;line-height:1.5;">${text}</p>`;
}
