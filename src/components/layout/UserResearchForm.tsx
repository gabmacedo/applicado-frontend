import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import type { UserResearchFormProps } from "@/types/types"

export function UserResearchForm({ setStep }: UserResearchFormProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Para te conhecer melhor!</CardTitle>
        <CardDescription>
          Para melhorar sua experiência, responda as perguntas abaixo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={() => setStep?.(4)}>
          <div className="flex flex-col gap-7">
            <div className="grid gap-2">
              <Label htmlFor="">
                Quais tipos de vagas você está buscando?
              </Label>
              <Select>
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Escolha uma opção" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectGroup>
                    <SelectItem value="estagio">Estágio</SelectItem>
                    <SelectItem value="junior">Junior</SelectItem>
                    <SelectItem value="pleno">Pleno</SelectItem>
                    <SelectItem value="senior">Sênior</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="">
                Quantas aplicações você faz por dia?
              </Label>
              <Select>
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Escolha uma opção" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectGroup>
                    <SelectItem value="min">Entre 1-5</SelectItem>
                    <SelectItem value="med">Entre 6-10</SelectItem>
                    <SelectItem value="max">Entre 11-15</SelectItem>
                    <SelectItem value="plus">Mais de 15</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="">
                Como você organiza suas candidaturas atualmente?
              </Label>
              <Select>
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Escolha uma opção" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectGroup>
                    <SelectItem value="nao">Não organizo</SelectItem>
                    <SelectItem value="manual">Organizo de forma manual</SelectItem>
                    <SelectItem value="ferramentas">Utilizo ferramentas semelhantes</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="pt-4">
            <Button type="submit" className="h-8 w-full cursor-pointer">
              Finalizar cadastro
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
