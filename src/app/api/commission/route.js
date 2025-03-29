import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { name, email, request, type, social, date, file } = body;

  try {
    await resend.emails.send({
      from: "xbrainstewx <contact@xbrainstewx.com>",
      to: "ashley@xbrainstewx.com",
      subject: `🖤 New Commission Request from ${name}`,
      html: `
        <body style="margin: 0; padding: 0; background-color: #000000;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: url('https://i.ibb.co/XxPpcWBC/background.jpg') center/cover no-repeat; background-color: #000;">
            <tr>
              <td align="center" style="padding: 2rem;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 500px; background: rgba(0, 0, 0, 0.8); padding: 2rem; border-radius: 16px; font-family: Arial, sans-serif; color: #fff; box-shadow: 0 0 25px #ff66cc;">
                  <tr>
                    <td align="center">
                      <img src="https://i.ibb.co/JqfwbS6/xbrainstewx.png" alt="brainstewx logo" style="max-width: 300px; filter: drop-shadow(0 0 10px #ff66cc); margin-bottom: 1rem;" />
                    </td>
                  </tr>
                  <tr>
                    <td align="center">
                      <marquee style="color: #ff0099; font-size: 1rem; margin: 1rem 0; text-shadow: 0 0 5px #ff66cc;">
                        ✨ new glittery commission from ${name} ✨
                      </marquee>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 1rem; font-size: 1rem; text-align: center;">
                      <p style="margin: 0 0 10px 0; color: #ffffff;"><strong>👤 name:</strong> ${name}</p>
                      <p style="margin: 0 0 10px 0; color: #ffffff;"><strong>📧 email:</strong> <a href="mailto:${email}" style="color: #ff99ff;">${email}</a></p>
                      <p style="margin: 0 0 10px 0; color: #ffffff;"><strong>🎨 type:</strong> ${type}</p>
                      <p style="margin: 0 0 10px 0; color: #ffffff;"><strong>💬 message:</strong> ${request}</p>
                      <p style="margin: 0 0 10px 0; color: #ffffff;"><strong>📅 deadline:</strong> ${date || "whenever bb <3"}</p>
                      <p style="margin: 0 0 10px 0; color: #ffffff;"><strong>🌐 socials:</strong> ${social || "not listed :("}</p>
                      ${
                        file
                          ? `<p style="margin-top: 1rem; color: #ffffff;"><strong>📎 file:</strong> <a href="${file}" target="_blank" style="color: #ff99ff;">download reference</a></p>`
                          : ""
                      }
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 2rem;">
                      <p style="margin: 0; text-align: center;">open this one quick – she's glittery ✨</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 1.5rem; font-style: italic; text-align: center;">
                      <p style="margin: 0;">xoxo,</p>
                      <strong style="color: #ff0099;">xbrainstewx bot</strong>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      `,
    });
    

    await resend.emails.send({
      from: "ashley <ashley@xbrainstewx.com>",
      to: email,
      subject: "🖤 your commission request was received!",
      html: `
            <body style="margin: 0; padding: 0; background-color: #000000;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: url('https://i.ibb.co/XxPpcWBC/background.jpg') center/cover no-repeat; background-color: #000;">
                <tr>
                  <td align="center" style="padding: 2rem;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 500px; background: rgba(0, 0, 0, 0.8); padding: 2rem; border-radius: 16px; font-family: Arial, sans-serif; color: #fff; box-shadow: 0 0 20px #ff66cc;">
                      <tr>
                        <td align="center">
                          <img src="https://i.ibb.co/JqfwbS6/xbrainstewx.png" alt="brainstewx logo" style="max-width: 300px; filter: drop-shadow(0 0 10px #ff66cc); margin-bottom: 1rem;" />
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <h2 style="color: #ffffff; text-shadow: 0 0 10px #ffffff; margin: 1rem 0;">i got you! let’s create something fun <3</h2>
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <img src="https://i.ibb.co/ynQYZBxg/bear-Angel.gif" alt="angel bear" style="max-width: 150px; margin: 2rem auto; display: block;" />
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 1rem; font-size: 1rem; text-align: center;">
                      <p style="margin: 0 0 10px 0; color: #ffffff;"><strong>👤 name:</strong> ${name}</p>
                      <p style="margin: 0 0 10px 0; color: #ffffff;"><strong>📧 email:</strong> <a href="mailto:${email}" style="color: #ff99ff;">${email}</a></p>
                      <p style="margin: 0 0 10px 0; color: #ffffff;"><strong>🎨 type:</strong> ${type}</p>
                      <p style="margin: 0 0 10px 0; color: #ffffff;"><strong>💬 message:</strong> ${request}</p>
                      <p style="margin: 0 0 10px 0; color: #ffffff;"><strong>📅 deadline:</strong> ${date || "whenever bb <3"}</p>
                      <p style="margin: 0 0 10px 0; color: #ffffff;"><strong>🌐 socials:</strong> ${social || "not listed :("}</p>
                      ${
                        file
                          ? `<p style="margin-top: 1rem; color: #ffffff;"><strong>📎 file:</strong> <a href="${file}" target="_blank" style="color: #ff99ff;">download reference</a></p>`
                          : ""
                      }
                    </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 2rem;">
                          <p style="margin: 0; text-align: center;">thanks for your request <3 i'll get back to you soon!!</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 1.5rem; font-style: italic; text-align: center;">
                          <p style="margin: 0;">xoxo,</p>
                          <strong style="color: #ff0099;">xbrainstewx</strong>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
            `
    });


    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
}
