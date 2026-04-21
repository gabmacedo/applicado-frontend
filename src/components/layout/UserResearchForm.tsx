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
import { Loader2Icon } from "lucide-react"

export function UserResearchForm({
  tipoVaga,
  quantidadeAplicacoes,
  organizacaoCandidaturas,
  loading,
  setTipoVaga,
  setQuantidadeAplicacoes,
  setOrganizacaoCandidaturas,
  handleFinalSubmit,
}: UserResearchFormProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Para te conhecer melhor!</CardTitle>
        <CardDescription>
          Para melhorar sua experiência, responda as perguntas abaixo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleFinalSubmit}>
          <div className="flex flex-col gap-7">
            <div className="grid gap-2">
              <Label htmlFor="">Quais tipos de vagas você está buscando?</Label>
              <Select value={tipoVaga} onValueChange={setTipoVaga}>
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Escolha uma opção" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectGroup>
                    <SelectItem value="ESTAGIO">Estágio</SelectItem>
                    <SelectItem value="JUNIOR">Junior</SelectItem>
                    <SelectItem value="PLENO">Pleno</SelectItem>
                    <SelectItem value="SENIOR">Sênior</SelectItem>
                    <SelectItem value="OUTROS">Outros</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="">Quantas aplicações você faz por dia?</Label>
              <Select
                value={quantidadeAplicacoes}
                onValueChange={setQuantidadeAplicacoes}
              >
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Escolha uma opção" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectGroup>
                    <SelectItem value="MIN">Entre 1-5</SelectItem>
                    <SelectItem value="MED">Entre 6-10</SelectItem>
                    <SelectItem value="MAX">Entre 11-15</SelectItem>
                    <SelectItem value="PLUS">Mais de 15</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="">
                Como você organiza suas candidaturas atualmente?
              </Label>
              <Select
                value={organizacaoCandidaturas}
                onValueChange={setOrganizacaoCandidaturas}
              >
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Escolha uma opção" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectGroup>
                    <SelectItem value="NAO">Não organizo</SelectItem>
                    <SelectItem value="MANUAL">
                      Organizo de forma manual
                    </SelectItem>
                    <SelectItem value="FERRAMENTAS">
                      Utilizo ferramentas semelhantes
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="pt-4">
            <Button
              type="submit"
              className={`h-8 w-full cursor-pointer bg-blue-600 text-white transition-colors duration-300 hover:bg-blue-700 ${!tipoVaga || !quantidadeAplicacoes || !organizacaoCandidaturas ? "cursor-not-allowed opacity-50" : ""}`}
              disabled={
                !tipoVaga || !quantidadeAplicacoes || !organizacaoCandidaturas
              }
            >
              {loading ? (
                <Loader2Icon className="h-4 w-4 animate-spin" />
              ) : (
                "Finalizar cadastro"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
