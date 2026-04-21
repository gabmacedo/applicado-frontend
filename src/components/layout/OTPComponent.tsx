import { Loader2Icon, RefreshCwIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import type { InputOTPFormProps } from "@/types/types"

export function InputOTPForm({
  email,
  code,
  loading,
  errorMessage,
  setStep,
  setCode,
  handleOTPSubmit,
}: InputOTPFormProps) {
  const hasError = Boolean(errorMessage)

  return (
    <Card className="mx-auto w-full max-w-96">
      <CardHeader>
        <CardTitle>Verifique seu email</CardTitle>
        <CardDescription>
          Informe o código de verificação que enviamos para o email:{" "}
          <span className="font-medium">{email}</span>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="otp-verification">
              Código de verificação
            </FieldLabel>
            <Button variant="outline" size="xs">
              <RefreshCwIcon />
              Reenviar código
            </Button>
          </div>
          <InputOTP
            maxLength={6}
            id="otp-verification"
            className={`w-full ${hasError ? "border-red-500" : ""}`}
            onChange={(value) => setCode?.(value)}
            required
          >
            <InputOTPGroup className="grid w-full grid-cols-6">
              <InputOTPSlot index={0} className="h-14 w-full text-xl" />
              <InputOTPSlot index={1} className="h-14 w-full text-xl" />
              <InputOTPSlot index={2} className="h-14 w-full text-xl" />
              <InputOTPSlot index={3} className="h-14 w-full text-xl" />
              <InputOTPSlot index={4} className="h-14 w-full text-xl" />
              <InputOTPSlot index={5} className="h-14 w-full text-xl" />
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription>
            <a onClick={() => setStep?.(1)}>Alterar email</a>
          </FieldDescription>
        </Field>
      </CardContent>
      <CardFooter>
        <Field>
          <Button
            type="submit"
            className={`h-8 w-full ${code?.length === 6 ? "" : "cursor-not-allowed opacity-50"}`}
            onClick={handleOTPSubmit}
          >
            {loading ? (
              <Loader2Icon className="h-4 w-4 animate-spin" />
            ) : (
              "Verificar"
            )}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
