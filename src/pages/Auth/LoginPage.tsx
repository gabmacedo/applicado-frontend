import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { HeaderComponent } from "@/components/layout/HeaderComponent"
import CardComponent from "../../components/layout/CardComponent"

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!email || !password) {
      setError(true)
      setLoading(false)
      return
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      )

      if (!response.ok) {
        setError(true)
        setLoading(false)
        return
      }

      const data = await response.json()
      console.log(data)
      navigate("/dashboard")

      setError(false)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-screen overflow-hidden bg-[linear-gradient(to_bottom,#ffffff,#f8fafc)] text-black">
      <HeaderComponent showAuth={false} />
      <main className="mx-auto flex h-[calc(100vh-4rem)] max-w-6xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center">
          <section className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-black sm:text-3xl lg:text-5xl lg:leading-[1.05]">
              Volte ao controle das suas candidaturas
            </h1>
            <p className="sm:text-md mt-6 max-w-lg text-base leading-7 text-slate-600">
              Entre para acompanhar seus processos, organizar seus próximos
              passos e manter tudo atualizado.
            </p>
          </section>
          <div className="flex items-center justify-center lg:justify-end">
            <CardComponent
              type="login"
              email={email}
              password={password}
              loading={loading}
              setEmail={setEmail}
              setPassword={setPassword}
              error={error}
              handleLoginSubmit={handleLoginSubmit}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoginPage
