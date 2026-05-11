import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { name, email, projectType, message } = body;

        if (!name || !email || !projectType || !message) {
            return Response.json(
                { success: false, error: "All fields are required." },
                { status: 400 }
            );
        }

        if (!process.env.RESEND_API_KEY) {
            return Response.json(
                { success: false, error: "Missing RESEND_API_KEY." },
                { status: 500 }
            );
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeProjectType = escapeHtml(projectType);
        const safeMessage = escapeHtml(message);

        const { data, error } = await resend.emails.send({
            from: "MyPortfolio Contact <onboarding@resend.dev>",
            to: [process.env.CONTACT_TO_EMAIL || "your_email@gmail.com"],
            subject: `New Contact Form Message from ${safeName}`,
            replyTo: safeEmail,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Message</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Project Type:</strong> ${safeProjectType}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
        });

        if (error) {
            return Response.json(
                { success: false, error: "Email sending failed." },
                { status: 500 }
            );
        }

        return Response.json(
            { success: true, message: "Message sent successfully.", data },
            { status: 200 }
        );
    } catch {
        return Response.json(
            { success: false, error: "Something went wrong." },
            { status: 500 }
        );
    }
}