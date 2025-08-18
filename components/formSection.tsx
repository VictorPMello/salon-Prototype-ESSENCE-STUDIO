import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar24 } from "./calendar24";

export function FormSection() {
  return (
    <Card className="rounded-none lg:rounded-2xl lg:w-1/2">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Agende Sua Transformação</CardTitle>
        <CardDescription className="text-xl">
          Escolha o melhor horário para você. Atendimento de segunda a sábado.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-lg">
                Nome Completo *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone" className="text-lg">
                WhatsApp *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-lg">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-lg">Serviço Desejado *</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="corteFeminino">
                      Corte Feminino
                    </SelectItem>
                    <SelectItem value="corteMasculino">
                      Corte Masculino
                    </SelectItem>
                    <SelectItem value="coloracao">Coloração</SelectItem>
                    <SelectItem value="mechas">Mechas</SelectItem>
                    <SelectItem value="progressiva">Progressiva</SelectItem>
                    <SelectItem value="botoxCapilar">Botox Capilar</SelectItem>
                    <SelectItem value="hidratacao">Hidratação</SelectItem>
                    <SelectItem value="penteadoParaEventos">
                      Penteado para Eventos
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Calendar24 />
            <div className="grid gap-2">
              <Label className="text-lg">Observações</Label>
              <Textarea placeholder="Alguma observação especial?" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" variant="default" className="w-full">
          Confirmar agendamento
        </Button>
      </CardFooter>
    </Card>
  );
}
