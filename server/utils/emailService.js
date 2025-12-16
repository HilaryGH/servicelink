const nodemailer = require("nodemailer");

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// Send welcome email
const sendWelcomeEmail = async (userEmail, userName, userType) => {
  try {
    const transporter = createTransporter();

    const isServiceProvider = userType === "Service Provider";
    const subject = isServiceProvider
      ? "Welcome to ServiceLink - Your Service Provider Account is Ready!"
      : "Welcome to ServiceLink - Your Account is Ready!";

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to ServiceLink</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%); padding: 40px; text-align: center; border-radius: 10px 10px 0 0;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold;">
                      Welcome to ServiceLink!
                    </h1>
                    <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">
                      Digital Solutions
                    </p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px;">
                      Hello ${userName}!
                    </h2>
                    
                    <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                      Thank you for joining ServiceLink! We're excited to have you on board.
                    </p>
                    
                    ${
                      isServiceProvider
                        ? `
                    <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 20px; margin: 20px 0; border-radius: 5px;">
                      <h3 style="color: #1e40af; margin: 0 0 10px 0; font-size: 18px;">
                        🎉 Your Service Provider Account is Active!
                      </h3>
                      <p style="color: #1e3a8a; margin: 0; font-size: 14px; line-height: 1.6;">
                        Your service provider profile has been created successfully. You can now start connecting with customers and growing your business through our platform.
                      </p>
                    </div>
                    `
                        : `
                    <div style="background-color: #f0fdf4; border-left: 4px solid #22c55e; padding: 20px; margin: 20px 0; border-radius: 5px;">
                      <h3 style="color: #15803d; margin: 0 0 10px 0; font-size: 18px;">
                        ✨ Your Account is Ready!
                      </h3>
                      <p style="color: #166534; margin: 0; font-size: 14px; line-height: 1.6;">
                        You can now explore our platform, find service providers, and get things done faster than ever.
                      </p>
                    </div>
                    `
                    }
                    
                    <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 20px 0;">
                      Here's what you can do next:
                    </p>
                    
                    <ul style="color: #4b5563; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0; padding-left: 20px;">
                      ${
                        isServiceProvider
                          ? `
                      <li>Complete your service provider profile</li>
                      <li>Upload your service portfolio and pricing</li>
                      <li>Start receiving service requests from customers</li>
                      <li>Manage your bookings and appointments</li>
                      `
                          : `
                      <li>Browse available services and providers</li>
                      <li>Book services that match your needs</li>
                      <li>Track your service requests</li>
                      <li>Rate and review service providers</li>
                      `
                      }
                    </ul>
                    
                    <div style="text-align: center; margin: 30px 0;">
                      <a href="${process.env.CLIENT_URL || "http://localhost:5173"}/dashboard" 
                         style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%); color: #ffffff; text-decoration: none; padding: 15px 40px; border-radius: 8px; font-weight: bold; font-size: 16px;">
                        Go to Dashboard
                      </a>
                    </div>
                    
                    <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
                      If you have any questions or need assistance, feel free to reach out to our support team. We're here to help!
                    </p>
                    
                    <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
                      Best regards,<br>
                      <strong style="color: #1f2937;">The ServiceLink Team</strong>
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-radius: 0 0 10px 10px; border-top: 1px solid #e5e7eb;">
                    <p style="color: #6b7280; font-size: 12px; margin: 0 0 10px 0;">
                      This email was sent to ${userEmail}
                    </p>
                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                      © ${new Date().getFullYear()} ServiceLink. All rights reserved.
                    </p>
                    <p style="color: #9ca3af; font-size: 12px; margin: 10px 0 0 0;">
                      <a href="${process.env.CLIENT_URL || "http://localhost:5173"}" style="color: #2563eb; text-decoration: none;">Visit our website</a> | 
                      <a href="${process.env.CLIENT_URL || "http://localhost:5173"}/contact" style="color: #2563eb; text-decoration: none;">Contact Support</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `ServiceLink <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Welcome email sent to ${userEmail}`);
    return true;
  } catch (error) {
    console.error("❌ Error sending welcome email:", error);
    // Don't throw error - email failure shouldn't break registration
    return false;
  }
};

module.exports = {
  sendWelcomeEmail,
};
