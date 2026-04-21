export interface CardComponentProps {
  type: "login" | "register"
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  error?: boolean
  errorMessage?: string
  loading?: boolean
  setFirstName?: (firstName: string) => void
  setLastName?: (lastName: string) => void
  setEmail?: (email: string) => void
  setPassword?: (password: string) => void
  setStep?: (step: number) => void
  handleRegisterSubmit?: (e: React.FormEvent) => void
  handleLoginSubmit?: (e: React.FormEvent) => void
}

export interface InputOTPFormProps {
  email?: string
  loading?: boolean
  errorMessage?: string
  code?: string
  setStep?: (step: number) => void
  handleOTPSubmit?: (e: React.FormEvent) => void
  setCode?: (code: string) => void
}

export interface UserResearchFormProps {
  tipoVaga?: string
  quantidadeAplicacoes?: string
  organizacaoCandidaturas?: string
  loading?: boolean
  setTipoVaga?: (tipoVaga: string) => void
  setQuantidadeAplicacoes?: (quantidadeAplicacoes: string) => void
  setOrganizacaoCandidaturas?: (organizacaoCandidaturas: string) => void
  handleFinalSubmit?: (e: React.FormEvent) => void
}

export interface HeaderComponentProps {
  showAuth?: boolean
}
