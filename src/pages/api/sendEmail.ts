// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  name: string;
  error: string;
  success?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed",
      name: ""
    });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.example.com", // Replace with your SMTP provider
    port: 465, // or 587 for TLS
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Set in Vercel environment variables
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "your-email@example.com",
      subject: `New Contact Form Submission from ${name}`,
      text: message,
    });

    res.status(200).json({
      success: "Email sent successfully!",
      name: "",
      error: ""
    });
  } catch (error) {
    res.status(500).json({
      error: "Error sending email",
      name: ""
    });
  }
}
