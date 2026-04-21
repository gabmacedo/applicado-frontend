import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { CardComponentProps } from "@/types/types"
import { Loader2Icon } from "lucide-react"
import { useNavigate } from "react-router-dom"

const CardComponent: React.FC<CardComponentProps> = ({
  type,
  firstName,
  lastName,
  email,
  password,
  errorMessage,
  loading,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  handleRegisterSubmit,
  handleLoginSubmit,
}) => {
  const navigate = useNavigate()
  const hasError = Boolean(errorMessage)

  const hasMinLength = password?.length! >= 8
  const hasLetter = /[a-zA-Z]/.test(password || "")
  const hasNumber = /\d/.test(password || "")
  const hasSpecial = /[^a-zA-Z0-9]/.test(password || "")

  const isValid = hasMinLength && hasLetter && hasNumber && hasSpecial

  const handleActionClick = () => {
    if (type === "login") navigate("/auth/register")
    else navigate("/auth/login")
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          {type === "login" ? "Entre na sua conta" : "Crie sua conta"}
        </CardTitle>
        <CardDescription>
          {type === "login"
            ? "Digite seu email e senha para acessar sua conta."
            : "Preencha os campos abaixo para criar sua conta."}
        </CardDescription>
        <CardAction>
          <Button
            variant="link"
            onClick={handleActionClick}
            className="cursor-pointer"
          >
            {type === "login" ? "Criar conta" : "Entrar"}
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={type === "login" ? handleLoginSubmit : handleRegisterSubmit}
        >
          <div className="flex flex-col gap-6">
            {type === "register" && (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName?.(e.target.value)}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName?.(e.target.value)}
                    placeholder="Seu sobrenome"
                    required
                  />
                </div>
              </>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail?.(e.target.value)}
                className={hasError ? "border-red-500" : ""}
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-[12px] underline-offset-4 hover:underline"
                >
                  Esqueceu sua senha?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword?.(e.target.value)}
                className={hasError ? "border-red-500" : ""}
                required
              />
            </div>
            {errorMessage && (
              <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {errorMessage}
              </p>
            )}
          </div>
          {type === "register" ? (
            <ul className={`mt-1 ml-1 text-[12px] text-muted-foreground`}>
              <li>- Deve conter pelo menos 8 caracteres</li>
              <li>- Deve conter pelo menos uma letra maiúscula</li>
              <li>- Deve conter pelo menos um número</li>
            </ul>
          ) : null}
          <div className="pt-4">
            <Button
              type="submit"
              className={`h-8 w-full cursor-pointer bg-blue-600 text-white transition-colors duration-300 hover:bg-blue-700 ${loading ? "cursor-not-allowed opacity-50" : ""} ${isValid && email ? "" : "cursor-not-allowed opacity-50"}`}
              disabled={loading}
            >
              {loading ? (
                <Loader2Icon className="h-4 w-4 animate-spin" />
              ) : type === "login" ? (
                "Entrar"
              ) : (
                "Criar conta"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default CardComponent
