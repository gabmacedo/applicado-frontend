import { HeaderComponent } from "@/components/layout/HeaderComponent"
import CardComponent from "../../components/layout/CardComponent"
import { useState } from "react"
import { InputOTPForm } from "@/components/layout/OTPComponent"
import { UserResearchForm } from "@/components/layout/UserResearchForm"

const RegisterPage: React.FC = () => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [step, setStep] = useState(1)

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
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
                name={name}
                lastName={lastName}
                email={email}
                password={password}
                setName={setName}
                setLastName={setLastName}
                setEmail={setEmail}
                setPassword={setPassword}
                setStep={setStep}
              />
            )}

            {step === 2 && <InputOTPForm setStep={setStep} />}

            {step === 3 && <UserResearchForm setStep={setStep} />}
          </div>
        </div>
      </main>
    </div>
  )
}

export default RegisterPage
