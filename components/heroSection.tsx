"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { useRef, useState } from "react";

export function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  const videos = [
    "/videos/salao-01.mp4",
    "/videos/salao-02.mp4",
    "/videos/salao-03.mp4",
    "/videos/salao-04.mp4",
  ];

  const handleVideoEnd = () => {
    const nextVideo = (currentVideo + 1) % videos.length;
    setCurrentVideo(nextVideo);
  };

  return (
    <Card className="relative overflow-hidden border-none w-5/6">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        key={currentVideo}
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <CardContent className="relative z-10 flex flex-col justify-center min-h-[500px] p-8 md:p-16 space-y-6">
        <h1 className="font-bold text-xl md:text-3xl text-white max-w-2xl">
          Transforme Seu Visual com Técnicas Exclusivas de Colorimetria
        </h1>

        <h3 className="text-lg md:text-xl text-white max-w-2xl">
          Realce sua essência única com nosso atendimento personalizado e
          ambiente sofisticado. Mais de 500 clientes já descobriram sua melhor
          versão.
        </h3>

        <div className="flex gap-4 flex-col">
          <Button className="cursor-pointer w-fit">
            Quero Agendar Minha Transformação
          </Button>
          <Button variant="secondary" className="cursor-pointer w-fit">
            Ver Transformações
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
