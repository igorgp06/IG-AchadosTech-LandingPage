import { Navbar } from "../components/utils/Navbar"

import { Hero } from "./public/partials/hero/Hero"

export const Main = () => {
    return (
        <div>

            <Navbar />

            <main>
                <Hero />
            </main>

        </div>
    )
}