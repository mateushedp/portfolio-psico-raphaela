"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
	{ label: "Home", href: "#home" },
	{ label: "Sobre", href: "#sobre" },
	{ label: "Serviços", href: "#servicos" },
	{ label: "Depoimentos", href: "#depoimentos" },
	{ label: "Contato", href: "#contato" },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState("home");

	useEffect(() => {
		const observers: IntersectionObserver[] = [];

		links.forEach(({ href }) => {
			const id = href.replace("#", "");
			const el = document.getElementById(id);
			if (!el) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActive(id);
				},
				{ threshold: 0.4 }
			);

			observer.observe(el);
			observers.push(observer);
		});

		return () => observers.forEach((o) => o.disconnect());
	}, []);

	return (
		<header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-green-brand/10">
			<div className="px-4 md:px-12 h-[70px] md:h-[80px] flex items-center justify-between">
				<a href="#home" className="flex items-end gap-2">
					<img src="/leaf-logo.svg" alt="Logo Raphaela Andrades" width={30} />
					<span className="text-xl md:text-2xl text-green-brand tracking-[-1.2px]">
						Raphaela Andrades
					</span>
				</a>

				<nav className="hidden md:flex items-center gap-10">
					{links.map(({ href, label }) => {
						const id = href.replace("#", "");
						return (
							<a
								key={href}
								href={href}
								className={`relative text-sm uppercase text-green-brand
									after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-orange-cta
									after:origin-left after:transition-transform after:duration-500
									${active === id ? "after:scale-x-100" : "after:scale-x-0"}`}
							>
								{label}
							</a>
						);
					})}
				</nav>

				<button className="md:hidden text-green-brand" onClick={() => setOpen(!open)} aria-label="Menu">
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</div>

			{open && (
				<nav className="md:hidden bg-cream border-t border-green-brand/10 px-6 py-4 flex flex-col gap-4">
					{links.map(({ href, label }) => (
						<a
							key={href}
							href={href}
							onClick={() => setOpen(false)}
							className="text-sm uppercase tracking-wider text-green-brand hover:opacity-70 transition-opacity"
						>
							{label}
						</a>
					))}
				</nav>
			)}
		</header>
	);
}