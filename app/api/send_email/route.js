import { mailOptions, transporter } from "@/config/nodemailer";
import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();

  await transporter.sendMail({
    ...mailOptions,
    subject: `Email from ${body.name} on Oaks Intelligence Website.`,
    text: body.message,
    html: `
    <h1>New Message</h1>
    <p>Name: ${body.name}</p>
    <p>Email: ${body.email}</p>
    <p>Message: ${body.message}</p>
    `,
  });

  return new Response(JSON.stringify({ message: "OK" }), {
    status: 200,
  });
}

// SMTP format
//   const transporter = nodemailer.createTransport({
//     host: "smtp.ionos.com",
//     port: 465,
//     secure: true,
//     auth: {
// TODO: replace `user` and `pass` values from <https://forwardemail.net>
//       user: "m99045154-159609476",
//       pass: "nyvdeg-fiwro3-syhteJ",
//     },
//   });

//   try {
//     async function main() {
//       // send mail with defined transport object
//       const info = await transporter.sendMail({
//         from: '"Fred Foo 👻" <foo@example.com>', // sender address
//         to: "jesseabuaja@gmail.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", // html body
//       });

//       console.log("Message sent: %s", info.messageId);
// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//
// NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
//       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
//       <https://github.com/forwardemail/preview-email>
//
// }

//     main().catch(console.error);
//   } catch (error) {}

// }
