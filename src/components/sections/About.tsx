"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.2 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			id="sobre"
			className="bg-cream"
		>
			<div className="flex flex-col md:flex-row md:pt-16">
				<div className="md:w-1/2 md:self-stretch order-2 md:order-1 shrink-0 px-6 md:px-12 py-6">
					<div
						className={`relative w-full h-[358px] md:h-full rounded-3xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] ${isVisible
							? "animate-slide-up [animation-delay:200ms]"
							: "opacity-0"
							}`}
					>
						<Image
							src="/profile-pic.jpg"
							sizes="(max-width: 768px) 100vw, 50vw"
							alt="Foto de Raphaela Andrades"
							fill
							className="object-cover object-[center_15%]"
						/>
					</div>
				</div>

				<div
					className={`flex flex-col justify-center gap-3 w-full md:w-1/2 md:pl-12 px-6 pt-11 pb-6 md:px-12 md:py-12 order-1 md:order-2 ${isVisible ? "animate-slide-down" : "opacity-0"
						}`}
				>
					<SectionHeading eyebrow="Sobre Mim" title="Raphaela Andrades" />

					<p className="text-lg md:text-xl tracking-tight text-green-brand pb-6">
						CRP 99/48217
					</p>

					<p className="text-base md:text-xl text-justify text-green-brand">
						&nbsp;&nbsp;&nbsp;&nbsp;Sou psicóloga e atuo como Psicanalista Clínica, oferecendo um espaço de escuta acolhedora e livre de julgamentos para que cada pessoa possa falar sobre sua história, seus sentimentos e as questões que atravessam sua vida.

						A partir da perspectiva psicanalítica, busco compreender aquilo que se manifesta para além do que é imediatamente consciente, respeitando a singularidade de cada sujeito e o seu próprio tempo.

					</p>

					<p className="text-base md:text-xl text-justify text-green-brand">
						&nbsp;&nbsp;&nbsp;&nbsp;Meu compromisso é acompanhar você nesse processo de autoconhecimento, escuta e construção de novos sentidos para a própria história.
					</p>
				</div>
			</div>
		</section>
	);
}