"use client"

import { useState } from "react";
import { contactSchema } from "@/lib/schemas/contact";
import SectionHeading from "../ui/SectionHeading";
import ContactInfo from "../ui/ContactInfo";
import FormField from "../ui/FormField";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

	const handleSubmit = async () => {

		const result = contactSchema.safeParse({ name, email, message });

		if (!result.success) {
			const fieldErrors = result.error.flatten().fieldErrors;
			setErrors({
				name: fieldErrors.name?.[0] ?? "",
				email: fieldErrors.email?.[0] ?? "",
				message: fieldErrors.message?.[0] ?? "",
			});
			return;
		}

		setErrors({});
		setStatus("loading");

		const res = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, email, message }),
		});

		if (res.ok) {
			setStatus("success");
			setName("");
			setEmail("");
			setMessage("");
		} else {
			setStatus("error");
		}
	}

	return (
		<section id="contato" className="bg-cream scroll-mt-[var(--header-height)]">
			<div
				className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-32 px-6 md:px-12 py-11 md:py-5"
			>
				<div className="">
					<SectionHeading eyebrow="Inicie sua Jornada" title="Vamos conversar?" />

					<p className="text-base text-justify md:text-xl mt-2 text-green-brand">
						Estou à disposição para tirar suas dúvidas e agendar sua primeira sessão de acolhimento.
					</p>

					<div className="flex flex-col my-8 gap-8">
						<ContactInfo
							icon={MapPin}
							title="Endereço"
							value="Av. Paulista, 1000 - Edifício Serenity, Sala 1204, São Paulo, SP"
						/>
						<ContactInfo
							icon={Phone}
							title="Telefone"
							value="+55 (11) 98888-7777"
						/>
						<ContactInfo
							icon={Mail}
							title="E-mail"
							value="contato@serenidadeeditorial.com.br"
						/>
					</div>
				</div>

				<div className="flex flex-col gap-5 rounded-3xl border border-green-brand/10 shadow-xl p-3 md:p-6">

					<FormField label="E-mail" id="email" placeholder="exemplo@email.com" value={email} onChange={setEmail} error={errors.email} />
					<FormField label="Nome Completo" id="name" placeholder="Seu nome" value={name} onChange={setName} error={errors.name} />
					<FormField label="Mensagem" id="message" placeholder="Conte-me brevemente como posso ajudar..." multiline={true} value={message} onChange={setMessage} error={errors.message} />

					{status === "success" && (
						<p className="text-sm text-green-brand">Mensagem enviada! Logo entrarei em contato com você.</p>
					)}
					{status === "error" && (
						<p className="text-sm text-orange-cta">Algo deu errado. Tente novamente.</p>
					)}

					<button
						className="w-full inline-flex items-center justify-center bg-orange-cta text-cream text-base cursor-pointer md:text-lg rounded-2xl px-12 shadow-[0px_20px_25px_-5px_rgba(17,72,23,0.1),0px_8px_10px_-6px_rgba(17,72,23,0.1)] hover:opacity-90 transition-opacity py-4 "
						onClick={handleSubmit}
						disabled={status === "loading"}
					>
						{status === "loading" ? "Enviando..." : "Enviar Solicitação"}
					</button>
				</div>
			</div>
		</section>
	);

}