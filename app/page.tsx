import { CarouselComponent } from "@/components/CarouselComponent";
import { Footer } from "@/components/footer";
import { FormSection } from "@/components/formSection";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/heroSection";
import { Services } from "@/components/services";
import { TestimonialsSection } from "@/components/testimonialSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-10 p-4 row-start-2 items-center">
        <HeroSection />
        <Services />
        <Gallery />
        <CarouselComponent />
        <TestimonialsSection />
        <FormSection />
      </main>
      <Footer />
      <span className="block text-lg text-center mb-4">
        © 2025 Essence Studio. Todos os direitos reservados.
      </span>
    </>
  );
}
