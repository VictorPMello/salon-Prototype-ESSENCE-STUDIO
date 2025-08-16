interface ReviesProps {
  id: number;
  name: string;
  age: string;
  image: string;
  description: string;
  star: number;
}

export const reviews: ReviesProps[] = [
  {
    id: 1,
    name: "Marina Silva",
    age: "35 anos",
    image: "https://github.com/shadcn.png",
    description: `"Nunca imaginei que uma mudança de cor pudesse transformar tanto minha autoestima. A Ana entendeu exatamente o que eu queria!"`,
    star: 4,
  },
  {
    id: 2,
    name: "Carla Santos",
    age: "28 anos",
    image: "https://github.com/shadcn.png",
    description: `"O ambiente é incrível e o atendimento é impecável. Saio de lá sempre me sentindo uma nova mulher!"`,
    star: 5,
  },
  {
    id: 3,
    name: "Juliana Costa",
    age: "32 anos",
    image: "https://github.com/shadcn.png",
    description: `Depois de várias frustrações em outros salões, finalmente encontrei profissionais que sabem o que fazem. Recomendo!"`,
    star: 4,
  },
];
