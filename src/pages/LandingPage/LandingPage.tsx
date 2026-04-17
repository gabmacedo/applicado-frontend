import { HeaderComponent } from "@/components/layout/HeaderComponent";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MoveUpRight } from "lucide-react"

export function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_40%),linear-gradient(to_bottom,#ffffff,#f8fafc)] text-black">
            <HeaderComponent showAuth={true} />
            <main className="mx-auto flex h-[calc(100vh-4rem)] max-w-6xl items-center px-4 sm:px-6 lg:px-8">
                <section className="flex w-full flex-col items-center text-center">
                    <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                        Nunca mais esqueça suas <span className="bg-linear-to-r from-black to-blue-600 bg-clip-text text-transparent">candidaturas</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-sm">
                        Organize seus processos, acompanhe seus próximos passos e mantenha tudo em um só lugar de forma simples.
                    </p>
                    <div className="mt-4">
                        <Button
                            onClick={() => navigate("/auth/register")}
                            className="h-10 text-white cursor-pointer hover:shadow-[0_0_15px_5px] hover:shadow-blue-500/50 hover:bg-blue-700 transition-shadow duration-300"
                        >
                            Conhecer o Applicado
                            <MoveUpRight className="ml-2 h-4 w-4"  />
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    )
}