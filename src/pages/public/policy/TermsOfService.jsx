import { termsOfServiceHtml } from "./content/termsOfServiceHtml";

export const TermsOfService = () => {
    return (
        <main className="min-h-screen bg-background px-4 pb-20 pt-28 text-foreground">
            <section className="container">
                <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-card/70 p-6 text-left backdrop-blur md:p-10">
                    <a
                        href="/"
                        className="mb-8 inline-flex rounded-full border border-border px-5 py-2 text-sm text-foreground/70 transition hover:border-primary hover:text-primary-foreground"
                    >
                        ← Voltar para a página inicial
                    </a>

                    <div
                        className="legal-content"
                        dangerouslySetInnerHTML={{ __html: termsOfServiceHtml }}
                    />
                </div>
            </section>
        </main>
    );
};