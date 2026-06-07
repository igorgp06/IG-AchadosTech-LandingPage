function SectionTitle({ eyebrow, title, subtitle }) {
    return (
        <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                {eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                {title}
            </h2>

            {subtitle && (
                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-foreground/60 md:text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

const benefits = [
    {
        icon: "🎯",
        title: "Achados selecionados",
        text: "Receba ofertas, cupons e links úteis de tecnologia sem precisar garimpar em vários lugares.",
    },
    {
        icon: "⚡",
        title: "Acesso VIP automático",
        text: "Escolha o plano, pague via Pix e receba um link individual para entrar no canal privado.",
    },
    {
        icon: "💻",
        title: "Foco em tecnologia",
        text: "Periféricos, peças de PC, celulares, acessórios e oportunidades com bom custo-benefício.",
    },
];

const animationClasses = [
    "animate-fade-in-delay-1",
    "animate-fade-in-delay-2",
    "animate-fade-in-delay-3",
];

export const Benefits = () => {
    return (
        <section id="beneficios" className="container relative py-24">
            <SectionTitle
                eyebrow="Por que entrar?"
                title="Menos tempo procurando. Mais chance de encontrar boas oportunidades."
                subtitle="O IG Achados Tech reúne links e promoções de tecnologia em um canal privado no Telegram, com acesso simples e liberação automática."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
                {benefits.map((benefit, index) => (
                    <article
                        key={benefit.title}
                        className={`gradient-border card-hover rounded-3xl p-7 text-left opacity-0 ${animationClasses[index]}`}
                    >
                        <span className="mb-6 grid size-14 place-items-center rounded-2xl bg-primary/15 text-3xl">
                            {benefit.icon}
                        </span>

                        <h3 className="text-xl font-bold">
                            {benefit.title}
                        </h3>

                        <p className="mt-3 leading-7 text-foreground/65">
                            {benefit.text}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};