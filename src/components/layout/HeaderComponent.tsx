import { Button } from "@/components/ui/button"
import type { HeaderComponentProps } from "@/types/types"
import { useNavigate } from "react-router-dom"

export function HeaderComponent({ showAuth = true }: HeaderComponentProps) {
  const navigate = useNavigate()
  return (
    <header className="relative z-10 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="text-sm font-semibold tracking-tight text-black select-none"
          >
            Applicado
          </a>
        </div>
        {showAuth && (
          <div className="flex gap-3">
            <Button
              onClick={() => navigate("/auth/login")}
              variant="outline"
              className="h-8 cursor-pointer border-black/10 bg-white text-black shadow-none hover:bg-black/5 transition-colors duration-300"
            >
              Entrar
            </Button>
            <Button
              onClick={() => navigate("/auth/register")}
              className="h-8 cursor-pointer bg-blue-600 text-white transition-colors duration-300 hover:bg-blue-700"
            >
              Criar conta
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
