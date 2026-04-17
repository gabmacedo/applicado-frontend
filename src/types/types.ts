export interface CardComponentProps {
  type: "login" | "register"
  name?: string
  lastName?: string
  email?: string
  password?: string
  error?: boolean
  loading?: boolean
  setName?: (name: string) => void
  setLastName?: (lastName: string) => void
  setEmail?: (email: string) => void
  setPassword?: (password: string) => void
  setStep?: (step: number) => void
  onSubmit?: (e: React.FormEvent) => void
}

export interface InputOTPFormProps {
  setStep?: (step: number) => void
}

export interface UserResearchFormProps {
  setStep?: (step: number) => void
}

export interface HeaderComponentProps {
  showAuth?: boolean
}
