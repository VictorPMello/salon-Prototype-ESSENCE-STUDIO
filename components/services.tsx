import { ServiceCard } from "./serviceCard";

export function Services() {
  return (
    <section className="flex flex-col gap-4 lg:flex-row w-full p-4 justify-around ">
      <ServiceCard />
    </section>
  );
}
