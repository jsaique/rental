import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.sendEmail({
    from: "you@example.com",
    to: "user@gmail.com",
    subject: "hello world",
    react: <Email firstName="John" product="MyApp" />,
  });
}
