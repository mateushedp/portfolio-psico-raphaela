import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="border-t border-green-brand/10 w-full bg-green-brand/5 py-11 px-6">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div>
					<div className="flex gap-2">
						<img src="/leaf-logo2.svg" alt="Logo Raphaela Andrades" width={30} />
						<span className="text-xl md:text-2xl text-green-brand tracking-[-1.2px]">
							Raphaela Andrades
						</span>
					</div>
					<p className="text-xs text-green-brand mt-2 mb-6">
						Cuidando da saúde mental com excelência técnica e sensibilidade humana.
					</p>
				</div>

				<div>
					<p className="text-xs uppercase tracking-widest text-green-brand">
						Siga-me
					</p>
					<div className="flex gap-4 mt-4">
						<div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-cream shrink-0 shadow-sm">
							<a
								href="https://instagram.com/rafaela"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center w-12 h-12 rounded-2xl bg-cream border border-green-brand/10 shrink-0 hover:opacity-70 transition-opacity"
							>
								<FaInstagram size={18} className="text-green-brand" />
							</a>
						</div>
						<div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-cream shrink-0 shadow-sm">
							<a
								href="https://instagram.com/rafaela"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center w-12 h-12 rounded-2xl bg-cream border border-green-brand/10 shrink-0 hover:opacity-70 transition-opacity"
							>
								<FaLinkedinIn size={18} className="text-green-brand" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<hr className="border-green-brand/10 my-8"></hr>

			<p className="text-green-brand/60 text-xs text-center">
				2026 © Raphaela Andrades. Todos os direitos reservados. CRP 99/48217.
			</p>

		</footer>
	);
}