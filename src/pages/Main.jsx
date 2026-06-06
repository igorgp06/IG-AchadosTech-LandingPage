import { Background } from "../components/utils/Background.jsx"

import { Navbar } from "../components/utils/Navbar"

import { Hero } from "./public/partials/hero/Hero"

export const Main = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Background />
            <Navbar />

            <main>
                <Hero />
            </main>

        </div>
    )
}