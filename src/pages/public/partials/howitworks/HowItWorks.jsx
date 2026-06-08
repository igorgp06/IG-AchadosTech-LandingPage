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
    "Abra o bot no Telegram e escolha o plano que faz mais sentido para você.",
    "Informe seu e-mail e pague com o Pix copia e cola gerado automaticamente.",
    "Assim que o pagamento for aprovado, o bot envia seu link individual para o canal VIP.",
];

export const HowItWorks = () => {
    return (
        <section id="como-funciona" className="container relative py-24">
            <SectionTitle
                eyebrow="Como funciona?"
                title="Canal VIP de achados sem complicação."
                subtitle="Todo o processo acontece pelo Telegram: você escolhe o plano, paga via Pix e recebe o acesso automaticamente."
            />

            <div className="mx-auto mt-12 grid max-w-5xl gap-5 text-left md:grid-cols-3">
                {steps.map((step, index) => (
                    <div key={step} className="card-hover rounded-3xl border border-border bg-card/70 p-6">
                        <span className="text-glow text-4xl font-black">0{index + 1}</span>
                        <p className="mt-5 leading-7 text-foreground/70">{step}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
