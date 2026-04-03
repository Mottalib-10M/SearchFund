interface MagicLinkEmailParams {
  url: string;
  host: string;
}

export function magicLinkEmail({ url, host }: MagicLinkEmailParams) {
  const subject = `Sign in to ${host}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#f5f5f7;font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f7;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:460px;background-color:#ffffff;border-radius:16px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="padding:40px 40px 0;text-align:center;">
              <h1 style="margin:0;font-size:22px;font-weight:600;color:#1d1d1f;letter-spacing:-0.3px;">
                SearchFundMarket
              </h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="margin:0 0 8px;font-size:17px;font-weight:600;color:#1d1d1f;text-align:center;">
                Sign in to your account
              </p>
              <p style="margin:0 0 32px;font-size:15px;color:#86868b;text-align:center;line-height:1.5;">
                Click the button below to securely sign in. No password needed.
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="${url}" target="_blank" style="display:inline-block;background-color:#0071E3;color:#ffffff;font-size:15px;font-weight:500;text-decoration:none;padding:12px 32px;border-radius:980px;letter-spacing:-0.1px;">
                      Sign in
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:0 40px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-top:1px solid #e8e8ed;padding-top:24px;">
                    <p style="margin:0 0 8px;font-size:12px;color:#86868b;text-align:center;line-height:1.5;">
                      This link expires in 24 hours and can only be used once.
                    </p>
                    <p style="margin:0;font-size:12px;color:#86868b;text-align:center;line-height:1.5;">
                      If you didn't request this email, you can safely ignore it.
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

  const text = `Sign in to ${host}\n\nClick the link below to sign in:\n${url}\n\nThis link expires in 24 hours and can only be used once.\nIf you didn't request this email, you can safely ignore it.`;

  return { html, text, subject };
}
