
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

const steps = [
    "Inicie o bot no Telegram e veja os planos disponíveis.",
    "Escolha entre acesso semanal ou mensal e gere seu Pix.",
    "Pagou? O sistema confirma automaticamente e envia seu link VIP.",
];

export const HowItWorks = () => {
    return (
        <section id="como-funciona" className="container relative py-24">
            <SectionTitle eyebrow="Fluxo simples" title="Do Pix ao canal VIP em poucos passos." />
            <div className="mx-auto mt-12 grid max-w-5xl gap-5 text-left md:grid-cols-3">
                {steps.map((step, index) => (
                    <div key={step} className="rounded-3xl border border-border bg-card/70 p-6 card-hover">
                        <span className="text-glow text-4xl font-black">0{index + 1}</span>
                        <p className="mt-5 leading-7 text-foreground/70">{step}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
