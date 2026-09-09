import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const mailToIshan = transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: 'ishanjain1408@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    const mailToSender = transporter.sendMail({
      from: `"Ishan Jain" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank You for Contacting Me",
      text: `Hi ${name},\n\nThank you for reaching out! I want to confirm that I've successfully received your message.\n\nI will get back to you as soon as possible.\n\nBest regards,\nIshan Jain`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #4a5568;">Thank You for Contacting Me</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out! I want to confirm that I've successfully received your message regarding <strong>"${subject}"</strong>.</p>
          <p>I will review it and get back to you as soon as possible.</p>
          <br>
          <p>Best regards,</p>
          <p><strong>Ishan Jain</strong></p>
        </div>
      `,
    });

    await Promise.all([mailToIshan, mailToSender]);

    return res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
