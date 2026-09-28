import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schemas/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	const body = await req.json();

	const result = contactSchema.safeParse(body);

	if (!result.success) {
		return NextResponse.json(
			{ error: result.error.flatten().fieldErrors },
			{ status: 400 }
		);
	}

	const { name, email, message } = result.data;

	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: process.env.TEST_MAIL!,
		subject: `Nova mensagem de ${name}`,
		text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`,
	});

	return NextResponse.json({ success: true });
}