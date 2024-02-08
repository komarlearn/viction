import Header from "../component/Header/Header"
import Footer from "../component/Footer/Footer"
export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}