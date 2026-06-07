const botLink = "https://t.me/achadosTechIG_bot";

export const FinalCall = () => {
  return (
    <section className="container relative z-10 pb-12 pt-20">
      <div className="rounded-4xl border border-primary/25 bg-primary/10 p-8 text-center md:p-12">
        <h2 className="text-3xl font-black md:text-5xl">
          Pronto para acompanhar os próximos achados?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
          Acesse o bot, escolha seu plano e entre no canal VIP para receber promoções,
          cupons e oportunidades tech selecionadas direto no Telegram.
        </p>

        <a className="cosmic-button hover-shadow-violet mt-8 inline-flex py-3" href={botLink}>
          Abrir bot no Telegram
        </a>
      </div>
    </section>
  );
};