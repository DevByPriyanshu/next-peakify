import { Navbar } from "./_components/Navbar"
import { Footer } from "./_components/Footer"
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-slate-100 h-full">
            <Navbar />
            <main className="pt-40 pb-20 bg-slate-100">
                {children}
            </main>
            <Footer />
        </div>
    )
}