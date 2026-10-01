import Image from "next/image";

export default function Hero() {
	return (
		<section id="home" className="bg-cream scroll-mt-[var(--header-height)]">
			<div
				className="flex flex-col md:flex-row"
				style={{ minHeight: "calc(100dvh - var(--header-height))" }}
			>
				<div className="flex items-center px-6 md:pl-12 pb-11 pt-6 md:py-0 md:w-1/2">
					<div className="flex flex-col gap-6 md:gap-8 max-w-[554px]">
						<span className="text-xs uppercase tracking-[2.4px] text-orange-cta animate-slide-down [animation-delay:0ms]">
							Cuidado Mental
						</span>

						<h1 className="text-3xl text-center md:text-[60px] md:leading-[60px] tracking-[-1.5px] text-green-brand font-normal animate-slide-down [animation-delay:0ms]">
							Sua jornada para o equilíbrio emocional começa aqui.
						</h1>

						<p className="text-base text-justify md:text-xl md:leading-8 text-green-brand animate-slide-down [animation-delay:200ms]">
							Um espaço seguro e acolhedor para redescobrir sua força interior e
							cultivar uma vida com mais clareza e propósito através da terapia
							especializada.
						</p>

						<div className="pt-4 animate-slide-down [animation-delay:400ms]">
							<a
								href="#contato"
								className="w-full inline-flex items-center justify-center bg-orange-cta text-cream text-base md:text-lg rounded-2xl px-12 py-2 shadow-[0px_20px_25px_-5px_rgba(17,72,23,0.1),0px_8px_10px_-6px_rgba(17,72,23,0.1)] hover:opacity-90 transition-opacity"
							>
								Agendar Sessão
							</a>
						</div>
					</div>
				</div>

				<div className="px-6 md:px-0 pb-11 md:pb-0 md:w-1/2 md:self-stretch">
					<div className="relative w-full h-[358px] md:h-full rounded-3xl md:rounded-none overflow-hidden animate-slide-up [animation-delay:700ms]">
						<Image
							src="/hero-img.jpg"
							sizes="(max-width: 768px) 100vw, 50vw"
							alt="Imagem de jardim com cerca branca"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}