interface ServiceProps {
  id: number;
  title: string;
  description: string;
  price: string;
  button: string;
}

export const services: ServiceProps[] = [
  {
    id: 1,
    title: "Colormetria Profissional",
    description:
      "Técnicas avançadas para encontrar a cor perfeita que realça sua personalidade e tom de pele.",
    price: "A partir de R$ 180",
    button: "Ver Detalhes",
  },
  {
    id: 2,
    title: "Cortes Autorais",
    description:
      "Cortes únicos criados especialmente para valorizar seu rosto e estilo de vida.",
    price: "A partir de R$ 120",
    button: "Ver Detalhes",
  },
  {
    id: 3,
    title: "Tratamentos Premium",
    description:
      "Hidratações intensivas e reconstruções com produtos importados de alta qualidade.",
    price: "A partir de R$ 90",
    button: "Ver Detalhes",
  },
  {
    id: 4,
    title: "Design de Sobrancelhas",
    description:
      "Modelagem personalizada com técnicas de micropigmentação e henna para um olhar marcante e natural.",
    price: "A partir de R$ 65",
    button: "Ver Detalhes",
  },
];
