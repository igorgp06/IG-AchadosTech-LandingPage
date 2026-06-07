import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Como funciona', href: '#como-funciona' },
    { name: 'Planos', href: '#planos' },
]

const botLink = "https://t.me/achadosTechIG_bot";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };

    }, [isMenuOpen]);

    return (

        <>
            <nav
                className={cn(
                    "fixed inset-x-0 top-0 z-50 border-b border-border/30 bg-background/75 backdrop-blur-x transition-all duration-300",
                    isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs border-b" : "py-5"
                )}>

                <div className="container flex items-center justify-between">

                    <a href="#hero" className="flex items-center gap-1 font-bold tracking-tight" onClick={() => setIsMenuOpen(false)}>
                        <span className="grid size-10 place-items-center rounded-xl border border-primary/40 bg-primary/15 text-xl hover:text-glow transition-all duration-300 ">
                            IG
                        </span>
                        <span className="hover:text-glow transition-all duration-300">Achados Tech</span>
                    </a>

                    {/* desktop */}

                    <div className="hidden items-center gap-8 text-sm text-foreground/70 lg:flex">
                        {navItems.map((item) => (
                            <a key={item.href} className="nav-link" href={item.href} onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <a
                        className="cosmic-button hover-shadow-violet hidden lg:inline-flex"
                        href={botLink} onClick={() => setIsMenuOpen(false)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Acessar o bot
                    </a>

                </div>
            </nav>

            {/* mobile */}

            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 text-foreground z-50 fixed top-2 right-4"
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
            </button>

            <div
                className={cn(
                    "fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md",
                    "transition-all duration-300 lg:hidden",
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
            >
                <div className="flex h-full w-full flex-col items-center justify-center space-y-8 text-xl text-foreground">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-foreground transition-colors duration-300 hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}

                    <a
                        className="cosmic-button hover-shadow-violet inline-flex"
                        href={botLink}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Acessar o bot
                    </a>
                </div>
            </div>

        </>
    );
}
