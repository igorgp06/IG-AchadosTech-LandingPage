import { Background } from "../components/utils/Background.jsx"
import { Navbar } from "../components/utils/Navbar"
import { Hero } from "./public/partials/hero/Hero"
import { Benefits } from "./public/partials/benefits/Benefits.jsx"
import { HowItWorks } from "./public/partials/howitworks/HowItWorks.jsx"
import { Pricing } from "./public/partials/Pricing/Pricing.jsx"
import { Faq } from "./public/partials/faq/Faq.jsx"
import { FinalCall } from "./public/partials/finalcall/FinalCall.jsx"
import { Footer } from "./public/partials/footer/Footer.jsx"

export const Main = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Background />
            <Navbar />

            <main>
                <Hero />
                <Benefits />
                <HowItWorks />
                <Pricing />
                <Faq />
                <FinalCall />
            </main>

            <Footer />

        </div>
    )
}