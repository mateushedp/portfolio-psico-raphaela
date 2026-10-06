import { ArrowRight, Blocks, TabletSmartphone, User, Armchair } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const cards = [
	{ title: "Atendimento de Adultos e Crianças", icon: Blocks },
	{ title: "Psicoeducação nas Redes", icon: TabletSmartphone },
	{ title: "Terapia Individual", icon: User },
	{ title: "Online e Presencial", icon: Armchair },
];

export default function Services() {
	return (
		<section id="servicos" className="bg-cream scroll-mt-[var(--header-height)]">
			<div className="flex flex-col md:flex-row gap-12 px-6 md:px-12 py-11 md:py-5">
				<div className="flex flex-col md:w-1/2 max-w-[576px]">
					<SectionHeading eyebrow="Especialidades" title="Cuidado sob medida para você." />

					<p className="text-base text-justify md:text-xl md:mt-8 text-green-brand">
						&nbsp;&nbsp;&nbsp;&nbsp;Cada pessoa chega à terapia com uma história, necessidades e questões próprias. Por isso, o acompanhamento é construído de forma individualizada, considerando o momento de vida e as particularidades de cada pessoa.

					</p>
					<p className="text-base text-justify md:text-xl md:mt-8 text-green-brand">
						&nbsp;&nbsp;&nbsp;&nbsp;						O objetivo é oferecer um espaço de escuta e acolhimento onde diferentes questões possam ser compreendidas e elaboradas com cuidado, respeitando o tempo e o processo de cada paciente.


					</p>
				</div>

				<div className="grid grid-cols-2 gap-4 md:ml-8 md:w-1/2">
					{cards.map(({ title, icon: Icon }) => (
						<div
							key={title}
							className="flex flex-col items-center justify-center gap-4 bg-green-brand rounded-2xl p-6 md:p-10 shadow-[0px_4px_4px_rgba(17,72,23,0.2)] text-center"
						>
							<div className="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-cream shadow-sm shrink-0">
								<Icon size={40} className="text-orange-cta" strokeWidth={1.5} />
							</div>
							<span className="font-headland text-lg md:text-2xl text-cream leading-snug">
								{title}
							</span>
						</div>
					))}
				</div>
			</div>
		</section >
	);
}