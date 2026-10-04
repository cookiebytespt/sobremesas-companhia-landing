import { Wordmark } from "./Wordmark";

const links = [
  { href: "#criacoes", label: "Criações" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#onde", label: "Onde estamos" },
];

export function Header() {
  return (
    <header className="relative z-10 bg-po">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5 md:px-8">
        <a href="#" aria-label="Sobremesas & Companhia, início">
          <Wordmark />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.95rem] hover:underline underline-offset-4">
              {l.label}
            </a>
          ))}
          <a
            href="#orcamento"
            className="rounded-full bg-cacau px-5 py-2.5 text-[0.95rem] font-medium text-acucar hover:bg-[#3a2219]"
          >
            Pedir orçamento
          </a>
        </nav>
        <a
          href="#orcamento"
          className="rounded-full bg-cacau px-4 py-2 text-sm font-medium text-acucar md:hidden"
        >
          Orçamento
        </a>
      </div>
    </header>
  );
}
