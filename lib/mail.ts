import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
	const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
	await resend.emails.send({
		from: "onboarding@ommishra.tech",
		to: email,
		subject: "Please Verify Your Email",
		html: `
      <h1>Verify Your Email For Pizza</h1>
      <p>Click the link below to verify your email</p>
      <a href="${confirmLink}">Verify Email</a>
    `,
	});
};
