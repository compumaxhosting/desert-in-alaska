import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, email, service, message } = await req.json();

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // ✅ Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // 🚫 Block specific emails
    const blockedEmails = [
      "ashleybro@cachehelper.com",
      "ashleybro@commandorbit.com", // ✅ added
    ];

    if (blockedEmails.includes(normalizedEmail)) {
      return NextResponse.json({ error: "Email is blocked" }, { status: 403 });
    }

    // 🚫 Block domains (stronger protection)
    const blockedDomains = [
      "cachehelper.com",
      "commandorbit.com", 
    ]; // ✅ added

    const emailDomain = normalizedEmail.split("@")[1];

    if (blockedDomains.includes(emailDomain)) {
      return NextResponse.json(
        { error: "Email domain is blocked" },
        { status: 403 },
      );
    }

    // ✅ Send email (only if passed all checks)
    await resend.emails.send({
      from: "Desert in Alaska <info@desertinalaska.com>",
      to: ["desertinalaska@outlook.com", "jose@compumaxllc.com"],
      replyTo: normalizedEmail,
      subject: "New Quote Request – Desert in Alaska",

      html: `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#f4f1ee;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:30px 15px;">
          
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
            
            <!-- HEADER -->
            <tr>
              <td style="background:#432719;padding:20px;text-align:center;">
                <h1 style="margin:0;color:#ffffff;font-size:22px;">
                  Desert in Alaska
                </h1>
                <p style="margin:5px 0 0;color:#d7c2b2;font-size:13px;">
                  Fire Suppression & Commercial Mechanical Specialists
                </p>
              </td>
            </tr>

            <!-- BODY -->
            <tr>
              <td style="padding:25px;">
                <h2 style="margin:0 0 15px;color:#432719;font-size:18px;">
                  New Quote Request
                </h2>

                <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#333;">
                  <tr>
                    <td style="padding:8px 0;"><strong>Name:</strong></td>
                    <td style="padding:8px 0;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;"><strong>Phone:</strong></td>
                    <td style="padding:8px 0;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;"><strong>Email:</strong></td>
                    <td style="padding:8px 0;">${normalizedEmail}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;"><strong>Service:</strong></td>
                    <td style="padding:8px 0;">${service || "Not specified"}</td>
                  </tr>
                </table>

                <div style="margin-top:20px;">
                  <p style="margin:0 0 8px;font-weight:bold;color:#432719;">
                    Message
                  </p>
                  <div style="background:#faf8f5;border-left:4px solid #86522d;padding:12px;font-size:14px;color:#333;">
                    ${message.replace(/\n/g, "<br />")}
                  </div>
                </div>
              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="background:#f1ece7;padding:15px;text-align:center;font-size:12px;color:#6b5a4d;">
                <p style="margin:0;">
                  📞 313-931-3070 &nbsp; | &nbsp;
                  ✉️ desertinalaska@outlook.com
                </p>
                <p style="margin:5px 0 0;">
                  Mon – Sat, 8:00 AM – 6:00 PM
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
