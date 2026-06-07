import { Background } from "../components/utils/Background.jsx"

import { Navbar } from "../components/utils/Navbar"
import { Benefits } from "./public/partials/benefits/Benefits.jsx"

import { Hero } from "./public/partials/hero/Hero"

export const Main = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Background />
            <Navbar />

            <main>
                <Hero />
                <Benefits />
            </main>

        </div>
    )
}