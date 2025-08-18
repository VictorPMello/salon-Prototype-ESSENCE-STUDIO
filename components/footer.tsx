import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full flex flex-col lg:flex-row justify-center items-stretch text-center gap-4 p-4">
      <Card className="lg:w-1/3">
        <CardHeader>
          <CardTitle className="text-2xl">Essence Studio</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Rua Aurora Brilhante, 456 - Vila Esperança</p>
          <p>Feira de Santana - BA</p>
          <p>(11) 99999-9999</p>
          <p>contato@essencestudio.com.br</p>
        </CardContent>
      </Card>

      <Card className="lg:w-1/3 flex justify-center flex-col">
        <CardHeader>
          <CardTitle className="text-2xl">Horários</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-around items-center ">
          <div>
            <p>Segunda a Sexta</p>
            <p>9h às 19h</p>
          </div>
          <div>
            <p>Sábado</p>
            <p>9h às 17h</p>
          </div>
          <div>
            <p>Domingo</p>
            <p>Fechado</p>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:w-1/3 flex justify-center flex-col">
        <CardHeader>
          <CardTitle className="text-2xl">Redes Sociais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 justify-center">
            <Link
              href="#"
              className="p-3 rounded-full hover:bg-foreground hover:text-background transform hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full hover:bg-foreground hover:text-background transform hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full hover:bg-foreground hover:text-background transform hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}
