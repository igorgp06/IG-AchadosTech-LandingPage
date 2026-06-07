const botLink = "https://t.me/achadosTechIG_bot";

function BotPreview() {
    return (
        <div className="relative mx-auto w-full max-w-md animate-float rounded-4xl border border-border bg-card/80 p-4 shadow-2xl shadow-primary/20 backdrop-blur">
            <div className="rounded-3xl border border-border/80 bg-background/95 p-5 text-left">
                <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
                    <span className="grid size-12 place-items-center rounded-full bg-primary/20 text-2xl">🤖</span>
                    <div>
                        <p className="font-semibold">IG Achados Tech Bot</p>
                        <p className="text-sm text-emerald-400">online agora</p>
                    </div>
                </div>

                <ChatBubble text="Fala! Escolha uma opção abaixo:" />

                <div className="my-4 grid gap-2">
                    {["💎 Ver planos", "🧾 Meu acesso", "ℹ️ Como funciona"].map((item) => (
                        <span
                            key={item}
                            className="rounded-xl border border-primary/25 bg-primary/10 px-4 py-3 text-sm text-primary-foreground"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <ChatBubble
                    text="Pagamento aprovado✅! Seu link individual para o canal VIP foi liberado."
                    highlight
                />
            </div>
        </div>
    );
}

function ChatBubble({ text, highlight = false }) {
    return (
        <p
            className={`mb-3 rounded-2xl px-4 py-3 text-sm leading-6 ${highlight
                ? "bg-emerald-500/15 text-emerald-200"
                : "bg-card text-foreground/75"
                }`}
        >
            {text}
        </p>
    );
}

function InfoNumber({ value, label }) {
    return (
        <div className="gradient-border card-hover rounded-2xl p-4 text-center">
            <strong className="block text-2xl text-glow">{value}</strong>
            <span className="text-xs text-foreground/55">{label}</span>
        </div>
    );
}

export const Hero = () => {
    return (
        <section className="relative flex min-h-screen items-center px-4 pb-16 pt-28 sm:pt-32 lg:pt-24" id="hero">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col items-center space-y-0 text-center lg:items-start lg:text-left">
                        <span className="animate-fade-in rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary-foreground opacity-0">
                            🚀 Canal VIP de achados tech no Telegram
                        </span>

                        <h1 className="mx-auto mt-2 max-w-4xl animate-fade-in-delay-1 text-4xl font-black leading-tight opacity-0 sm:text-5xl lg:mx-0 lg:text-6xl">
                            Achados tech selecionados direto no seu Telegram.
                        </h1>

                        <p className="mx-auto mt-2 max-w-2xl animate-fade-in-delay-2 text-lg leading-8 text-foreground/70 opacity-0 lg:mx-0">
                            Entre no IG Achados Tech e acompanhe ofertas de periféricos,
                            peças de PC, acessórios, celulares e oportunidades que realmente
                            valem a pena. O acesso é liberado automaticamente via Pix, sem enrolação.
                        </p>

                        <div className="mt-10 flex w-full animate-fade-in-delay-3 flex-col justify-center gap-4 opacity-0 sm:w-auto sm:flex-row lg:justify-start">
                            <a className="cosmic-button hover-shadow-violet justify-center py-3" href={botLink}>
                                Quero acessar o VIP
                            </a>

                            <a className="outline-button" href="#como-funciona">
                                Ver como funciona
                            </a>
                        </div>

                        <div className="mx-auto mt-10 grid w-full max-w-xl animate-fade-in-delay-4 grid-cols-1 gap-3 opacity-0 sm:grid-cols-3 lg:mx-0">
                            <InfoNumber value="Pix" label="Acesso automático" />
                            <InfoNumber value="VIP" label="Canal privado" />
                            <InfoNumber value="Tech" label="Achados selecionados" />
                        </div>
                    </div>

                    <div className="animate-fade-in-delay-2 opacity-0">
                        <BotPreview />
                    </div>
                </div>
            </div>
        </section>
    );
};
