interface DrawerProps {
  id: number;
  title: string;
  description: string;
  imagem: string;
  open: string;
  close: string;
}

export const drawers: DrawerProps[] = [
  {
    id: 1,
    title: "Colorimetria Vibrante",
    description: "Transformação completa com técnicas de colorimetria avançada",
    imagem: "/imagens-gallery/Vibrant_Hair_Color.jpg",
    open: "Abrir",
    close: "Fechar",
  },
  {
    id: 2,
    title: "Design de Sobrancelhas",
    description: "Modelagem perfeita com técnicas de micropigmentação",
    imagem: "/imagens-gallery/Eyebrow_Design.jpg",
    open: "Abrir",
    close: "Fechar",
  },
  {
    id: 3,
    title: "Corte Pixie",
    description: "Estilo ousado e moderno",
    imagem: "/imagens-gallery/Pixie_Haircut.jpg",
    open: "Abrir",
    close: "Fechar",
  },
  {
    id: 4,
    title: "Corte Moderno",
    description: "Corte autoral que valoriza o formato do rosto",
    imagem: "/imagens-gallery/Modern_Haircut.jpg",
    open: "Abrir",
    close: "Fechar",
  },
  {
    id: 5,
    title: "Balayage Exclusivo",
    description: "Técnica francesa para iluminação natural",
    imagem: "/imagens-gallery/Exclusive_Balayage.jpg",
    open: "Abrir",
    close: "Fechar",
  },
  {
    id: 6,
    title: "Ombré Hair",
    description: "Degradê moderno e sofisticado",
    imagem: "/imagens-gallery/Ombre_Hair.jpg",
    open: "Abrir",
    close: "Fechar",
  },
  {
    id: 7,
    title: "Tratamento Premium",
    description: "Hidratação intensiva com produtos importados",
    imagem: "/imagens-gallery/Premium_Hair_Treatment.jpg",
    open: "Abrir",
    close: "Fechar",
  },
  {
    id: 8,
    title: "Transformação Total",
    description: "Mudança radical de visual completa",
    imagem: "/imagens-gallery/Total_Makeover.jpg",
    open: "Abrir",
    close: "Fechar",
  },
  {
    id: 9,
    title: "Reconstrução Capilar",
    description: "Tratamento reparador intensivo",
    imagem: "/imagens-gallery/Hair_Reconstruction.jpg",
    open: "Abrir",
    close: "Fechar",
  },
  {
    id: 10,
    title: "Mechas Californianas",
    description: "Degradê perfeito com técnicas modernas",
    imagem: "/imagens-gallery/Californian_Highlights.jpg",
    open: "Abrir",
    close: "Fechar",
  },
];
