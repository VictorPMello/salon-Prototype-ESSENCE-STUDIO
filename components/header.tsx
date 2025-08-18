import { NavMenu } from "./navMenu";

export function Header() {
  return (
    <header className="flex gap-3 justify-between items-center p-4">
      <h1 className="text-2xl">ESSENCE STUDIO</h1>

      <NavMenu />
    </header>
  );
}
