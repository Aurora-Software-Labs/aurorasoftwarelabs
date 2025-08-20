import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  // For development, you can use Gmail with App Password
  // For production, consider using services like SendGrid, AWS SES, etc.
  return nodemailer.createTransport({
    service: "gmail", // or use smtp.gmail.com with port 587
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail App Password
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    let name, email, company, subject, message, formType;
    let resumeFile, coverLetterFile;

    // Check content type to determine how to parse the request
    const contentType = request.headers.get("content-type");

    if (contentType?.includes("multipart/form-data")) {
      // Handle FormData (with file uploads)
      const formData = await request.formData();

      name = formData.get("name") as string;
      email = formData.get("email") as string;
      company = formData.get("company") as string;
      subject = formData.get("subject") as string;
      message = formData.get("message") as string;
      formType = (formData.get("formType") as string) || "contact";

      // Get files if they exist
      resumeFile = formData.get("resume") as File;
      coverLetterFile = formData.get("coverLetter") as File;

      // Validate file types and sizes
      if (resumeFile && resumeFile.size > 0) {
        const allowedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "text/plain",
        ];

        if (!allowedTypes.includes(resumeFile.type)) {
          return NextResponse.json(
            { error: "Resume must be a PDF, DOC, DOCX, or TXT file" },
            { status: 400 }
          );
        }

        if (resumeFile.size > 5 * 1024 * 1024) {
          // 5MB
          return NextResponse.json(
            { error: "Resume file size must be less than 5MB" },
            { status: 400 }
          );
        }
      }

      if (coverLetterFile && coverLetterFile.size > 0) {
        const allowedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "text/plain",
        ];

        if (!allowedTypes.includes(coverLetterFile.type)) {
          return NextResponse.json(
            { error: "Cover letter must be a PDF, DOC, DOCX, or TXT file" },
            { status: 400 }
          );
        }

        if (coverLetterFile.size > 5 * 1024 * 1024) {
          // 5MB
          return NextResponse.json(
            { error: "Cover letter file size must be less than 5MB" },
            { status: 400 }
          );
        }
      }
    } else {
      // Handle JSON (regular contact form)
      const body = await request.json();
      ({ name, email, company, subject, message, formType = "contact" } = body);
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const transporter = createTransporter();

    // Email to Aurora Software Labs
    const companyEmailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL || "aurorasoftwarelabs@gmail.com",
      subject: `${
        formType === "career" ? "[Career Inquiry]" : "[Contact Form]"
      } ${subject || "New Website Inquiry"}`,
      html: `
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            @media only screen and (max-width: 600px) {
              .container {
                max-width: 100% !important;
                padding: 10px !important;
              }
              .header {
                padding: 20px 15px !important;
                border-radius: 8px 8px 0 0 !important;
              }
              .header img {
                height: 30px !important;
                margin-bottom: 10px !important;
              }
              .header h1 {
                font-size: 18px !important;
                line-height: 1.3 !important;
              }
              .content {
                padding: 20px 15px !important;
                border-radius: 0 0 8px 8px !important;
              }
              .info-card {
                padding: 15px !important;
                margin-bottom: 15px !important;
              }
              .info-card h2 {
                font-size: 16px !important;
              }
              .footer {
                padding: 15px !important;
              }
            }
          </style>
        </head>
        <div class="container" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div class="header" style="background: linear-gradient(135deg, #123524 0%, #2ecc71 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <img src="https://aurorasoftwarelabs.com/auroraLogoLight.png" alt="Aurora Software Labs" style="height: 40px; margin-bottom: 15px; max-width: 100%;" />
            <h1 style="color: white; margin: 0; font-size: 22px; line-height: 1.4;">New ${
              formType === "career" ? "Career" : "Contact"
            } Form Submission</h1>
          </div>
          
          <div class="content" style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <div class="info-card" style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2ecc71;">
              <h2 style="color: #123524; margin-top: 0; font-size: 18px;">Contact Information</h2>
              <p style="margin: 8px 0; word-break: break-word;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0; word-break: break-all;"><strong>Email:</strong> ${email}</p>
              ${
                company
                  ? `<p style="margin: 8px 0; word-break: break-word;"><strong>Company:</strong> ${company}</p>`
                  : ""
              }
              ${
                subject
                  ? `<p style="margin: 8px 0; word-break: break-word;"><strong>Subject:</strong> ${subject}</p>`
                  : ""
              }
            </div>
            
            <div class="info-card" style="background: white; padding: 25px; border-radius: 8px; border-left: 4px solid #2ecc71;">
              <h2 style="color: #123524; margin-top: 0; font-size: 18px;">Message</h2>
              <p style="line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">${message}</p>
            </div>
            
            <div class="footer" style="text-align: center; margin-top: 30px; padding: 20px; background: white; border-radius: 8px;">
              <p style="color: #123524; font-weight: bold; margin-bottom: 5px; font-size: 16px;">Aurora Software Labs</p>
              <p style="color: #666; font-size: 14px; margin: 0;">
                This email was sent from the Aurora Software Labs website contact form.
              </p>
            </div>
          </div>
        </div>
      `,
      // Add attachments for career applications
      ...(formType === "career" &&
        (resumeFile || coverLetterFile) && {
          attachments: [
            ...(resumeFile
              ? [
                  {
                    filename: `Resume_${name.replace(/\s+/g, "_")}_${
                      resumeFile.name
                    }`,
                    content: Buffer.from(await resumeFile.arrayBuffer()),
                  },
                ]
              : []),
            ...(coverLetterFile
              ? [
                  {
                    filename: `CoverLetter_${name.replace(/\s+/g, "_")}_${
                      coverLetterFile.name
                    }`,
                    content: Buffer.from(await coverLetterFile.arrayBuffer()),
                  },
                ]
              : []),
          ].filter(Boolean),
        }),
    };

    // Auto-reply email to the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting Aurora Software Labs`,
      html: `
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            @media only screen and (max-width: 600px) {
              .container {
                max-width: 100% !important;
                padding: 10px !important;
              }
              .header {
                padding: 20px 15px !important;
                border-radius: 8px 8px 0 0 !important;
              }
              .header h1 {
                font-size: 20px !important;
                line-height: 1.3 !important;
              }
              .content {
                padding: 20px 15px !important;
                border-radius: 0 0 8px 8px !important;
              }
              .main-content {
                padding: 20px 15px !important;
              }
              .next-steps {
                padding: 15px !important;
                margin: 15px 0 !important;
              }
              .next-steps h3 {
                font-size: 16px !important;
              }
              .next-steps ul {
                padding-left: 20px !important;
              }
              .footer-card {
                padding: 20px 15px !important;
                margin-top: 20px !important;
              }
              .footer-card img {
                height: 25px !important;
              }
              .footer-card p {
                font-size: 14px !important;
              }
              .links a {
                display: inline-block !important;
                margin: 2px 5px !important;
              }
            }
          </style>
        </head>
        <div class="container" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div class="header" style="background: linear-gradient(135deg, #123524 0%, #2ecc71 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; line-height: 1.4;">Thank You, ${
              name.split(" ")[0]
            }!</h1>
          </div>
          
          <div class="content" style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <div class="main-content" style="background: white; padding: 25px; border-radius: 8px;">
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
                We've received your ${
                  formType === "career" ? "career inquiry" : "message"
                } and really appreciate you taking the time to contact us.
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                Our team will review your ${
                  formType === "career" ? "application" : "inquiry"
                } and get back to you within <strong>24 hours</strong>. 
                We're excited about the possibility of working together!
              </p>
              
              <div class="next-steps" style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2ecc71;">
                <h3 style="color: #123524; margin-top: 0; font-size: 18px;">What's Next?</h3>
                <ul style="line-height: 1.6; color: #555; margin: 0; padding-left: 25px;">
                  <li style="margin-bottom: 8px;">We'll review your ${
                    formType === "career" ? "application" : "project details"
                  }</li>
                  <li style="margin-bottom: 8px;">A team member will reach out within 24 hours</li>
                  <li style="margin-bottom: 0;">${
                    formType === "career"
                      ? "If there's a match, we'll schedule an interview"
                      : "We'll schedule a consultation call if needed"
                  }</li>
                </ul>
              </div>
              
              <p class="links" style="font-size: 16px; line-height: 1.6;">
                In the meantime, feel free to explore our <a href="https://aurorasoftwarelabs.com/portfolio" style="color: #2ecc71; text-decoration: none;">portfolio</a> 
                or learn more about our <a href="https://aurorasoftwarelabs.com/services" style="color: #2ecc71; text-decoration: none;">services</a>.
              </p>
              
              <div class="footer-card" style="text-align: center; margin-top: 30px; background: white; border: 2px solid #f0f0f0; border-radius: 8px; padding: 25px;">
                <img src="https://aurorasoftwarelabs.vercel.app/auroraLogoLight.png" alt="Aurora Software Labs" style="height: 80px; margin-bottom: 10px; max-width: 100%;" />
                <p style="color: #666; margin: 5px 0; font-size: 15px; line-height: 1.4;">
                  Crafting innovative digital solutions across Africa
                </p>
                <p style="color: #2ecc71; margin: 5px 0; font-weight: bold; word-break: break-all;">
                  📧 aurorasoftwarelabs@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(companyEmailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      {
        message: "Email sent successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      {
        error: "Failed to send email. Please try again or contact us directly.",
        success: false,
      },
      { status: 500 }
    );
  }
}
