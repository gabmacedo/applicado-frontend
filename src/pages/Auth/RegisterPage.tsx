import { HeaderComponent } from "@/components/layout/HeaderComponent"
import CardComponent from "../../components/layout/CardComponent"
import { useState } from "react"
import { InputOTPForm } from "@/components/layout/OTPComponent"
import { UserResearchForm } from "@/components/layout/UserResearchForm"
import { useNavigate } from "react-router-dom"

const RegisterPage: React.FC = () => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [code, setCode] = useState("")

  // User research form states
  const [tipoVaga, setTipoVaga] = useState("")
  const [quantidadeAplicacoes, setQuantidadeAplicacoes] = useState("")
  const [organizacaoCandidaturas, setOrganizacaoCandidaturas] = useState("")

  const [step, setStep] = useState(1)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/send-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      )

      if (!response.ok) {
        let apiMessage = "Falha ao enviar o código de verificação."

        try {
          const responseData = await response.json()
          if (responseData?.error) {
            apiMessage = responseData.error
          }
        } catch {}

        setError(apiMessage)
        return
      }

      setStep(2)
    } catch {
      setError("Não foi possível conectar com o servidor. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, code }),
        }
      )

      if (!response.ok) {
        let apiMessage = "Código de verificação inválido."

        try {
          const responseData = await response.json()
          if (responseData?.error) {
            apiMessage = responseData.error
          }
        } catch {}

        setError(apiMessage)
        return
      }

      setStep(3)
    } catch (error) {
      setError("Não foi possível conectar com o servidor. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            password: password.trim(),
            tipoVaga,
            quantidadeAplicacoes,
            organizacaoCandidaturas,
          }),
        }
      )

      if (!response.ok) {
        let apiMessage = "Não foi possível concluir o cadastro."

        try {
          const responseData = await response.json()
          if (responseData?.error) {
            apiMessage = responseData.error
          }
        } catch {}

        setError(apiMessage)
        return
      }

      navigate("/dashboard")

      // Handle successful registration
    } catch (error) {
      setError("Não foi possível conectar com o servidor. Tente novamente.")
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
              Organize sua rotina de candidaturas desde o primeiro passo
            </h1>
            <p className="sm:text-md mt-6 max-w-lg text-base leading-7 text-slate-600">
              Cadastre-se para acompanhar oportunidades, centralizar informações
              e reduzir o risco de esquecer prazos importantes.
            </p>
          </section>
          <div className="flex items-center justify-center lg:justify-end">
            {step === 1 && (
              <CardComponent
                type="register"
                firstName={firstName}
                lastName={lastName}
                email={email}
                password={password}
                errorMessage={error}
                loading={loading}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
                setPassword={setPassword}
                handleRegisterSubmit={handleRegisterSubmit}
              />
            )}

            {step === 2 && (
              <InputOTPForm
                email={email}
                code={code}
                loading={loading}
                errorMessage={error}
                setCode={setCode}
                handleOTPSubmit={handleOTPSubmit}
                setStep={setStep}
              />
            )}

            {step === 3 && (
              <UserResearchForm
                tipoVaga={tipoVaga}
                quantidadeAplicacoes={quantidadeAplicacoes}
                organizacaoCandidaturas={organizacaoCandidaturas}
                loading={loading}
                setTipoVaga={setTipoVaga}
                setQuantidadeAplicacoes={setQuantidadeAplicacoes}
                setOrganizacaoCandidaturas={setOrganizacaoCandidaturas}
                handleFinalSubmit={handleFinalSubmit}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default RegisterPage
