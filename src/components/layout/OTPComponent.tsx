import { RefreshCwIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import type { InputOTPFormProps } from "@/types/types"


export function InputOTPForm({ setStep }: InputOTPFormProps) {
  return (
    <Card className="mx-auto w-96">
      <CardHeader>
        <CardTitle>Verifique seu email</CardTitle>
        <CardDescription>
          Informe o código de verificação que enviamos para o email:{" "}
          <span className="font-medium">m@example.com</span>.
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
          <InputOTP maxLength={6} id="otp-verification" required>
            <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription>
            <a onClick={() => setStep?.(1)}>Alterar email</a>
          </FieldDescription>
        </Field>
      </CardContent>
      <CardFooter>
        <Field>
          <Button type="submit" className="w-full h-8" onClick={() => setStep?.(3)}>
            Enviar
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
