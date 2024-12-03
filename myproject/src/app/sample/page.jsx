import { Header } from "./component/header"
import { Footer } from "./component/footer"
import { Hero } from "./component/hero"
import { Distination } from "./component/distination"
import { Priching } from "./component/priching"
import { Contact } from "./component/contact"

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Distination />
            <Priching />
            <Contact />
            <Footer />
        </>
    )
}

