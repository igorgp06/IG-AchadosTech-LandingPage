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

const faqs = [
    {
        question: "O acesso é liberado na hora?",
        answer: "Sim. Assim que o pagamento via Pix for aprovado, o bot envia automaticamente seu link individual para entrar no canal VIP.",
    },
    {
        question: "Posso compartilhar o link?",
        answer: "Não. O convite é individual, temporário e liberado para apenas uma pessoa. Isso ajuda a manter o canal organizado e seguro.",
    },
    {
        question: "O que aparece no canal?",
        answer: "Achados e promoções selecionadas de tecnologia, como periféricos, peças de PC, celulares, acessórios, cupons e oportunidades com bom custo-benefício.",
    },
    {
        question: "Existe renovação automática?",
        answer: "Não. O acesso é por tempo determinado e não possui cobrança automática. Quando vencer, você pode renovar pelo próprio bot.",
    },
    {
        question: "Quais formas de pagamento são aceitas?",
        answer: "Atualmente, o pagamento é feito via Pix. O bot gera o código copia e cola e libera o acesso automaticamente após a aprovação.",
    },
    {
        question: "E se eu tiver dúvidas ou problemas?",
        answer: "Você pode chamar o suporte pelo Telegram. O atendimento funciona de segunda a sábado, das 9h às 19h.",
    },
];

export const Faq = () => {
    return (
        <section className="container relative z-10 py-24">
            <SectionTitle eyebrow="FAQ" title="Dúvidas frequentes" />
            <div className="mx-auto mt-12 max-w-3xl space-y-4 text-left">
                {faqs.map((faq) => (
                    <details key={faq.question} className="group rounded-2xl border border-border bg-card/70 p-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                            <span>{faq.question}</span>
                            <span className="text-primary transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <p className="mt-4 leading-7 text-foreground/65">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}