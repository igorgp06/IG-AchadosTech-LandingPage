const botLink = "https://t.me/achadosTechIG_bot";

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

const plans = [
  {
    style: "mb-5 inline-block rounded-full bg-primary/20 px-4 py-1 text-sm font-semibold",
    call: "Para testar",
    name: "Semanal",
    price: "R$ 4,99",
    period: "7 dias de acesso ao canal VIP",
    featured: false,
  },
  {
    style: "mb-5 inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground",
    call: "Melhor custo-benefício",
    name: "Mensal",
    price: "R$ 9,90",
    period: "30 dias de acesso ao canal VIP",
    featured: true,
  },
];

export const Pricing = () => {
  return (
    <section id="planos" className="container relative z-10 py-24">
      <SectionTitle
        eyebrow="Planos"
        title="Escolha como quer acompanhar os achados."
        subtitle="Comece com o acesso semanal ou fique por mais tempo com o plano mensal. O pagamento é via Pix e a liberação acontece automaticamente pelo bot."
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`card-hover rounded-3xl border p-8 text-left ${plan.featured
              ? "border-primary bg-primary/10 shadow-2xl shadow-primary/20"
              : "border-border bg-card/70"
              }`}>
            {plan.call && <span className={plan.style}>{plan.call}</span>}
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="mt-5 text-5xl font-black text-glow">{plan.price}</p>
            <p className="mt-3 text-foreground/60">{plan.period}</p>
            <ul className="mt-7 space-y-3 text-foreground/70">
              <li>✅ Achados tech selecionados</li>
              <li>✅ Acesso liberado automaticamente</li>
              <li>✅ Link individual e temporário</li>
              <li>✅ Canal privado no Telegram</li>
            </ul>

            <a
              className="cosmic-button hover-shadow-violet mt-8 inline-flex w-full justify-center py-3"
              href={botLink}
              target="_blank"
              rel="noopener noreferrer">
              Acessar pelo bot
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};