import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';


export const sendPasswordResetEmail = async (toEmail: string, resetLink: string) => {
  const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY || 'sua_api_key_aqui',
  });

  const recipients = [new Recipient(toEmail, "User Name")];
  const sender = new Sender("MS_ZSVULG@trial-0p7kx4x2z28g9yjr.mlsender.net", "App Name - Reset Password");

  const emailParams = new EmailParams()
    .setFrom(sender)
    .setTo(recipients)
    .setSubject("Password reset")
    .setHtml(`<p>o reset your password, click the link below:</p><a href="${resetLink}">Reset Password</a>`);

    try {
      const response = await mailerSend.email.send(emailParams);
      console.log("Email sent successfully:", response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
};

