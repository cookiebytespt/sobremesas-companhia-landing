import { steps } from "@/content/site";

export function Steps() {
  return (
    <section id="como-funciona" className="scroll-mt-6 border-y border-cacau/10 bg-[#fbf6f1]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-24">
        <div>
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">Como encomendar</h2>
          <p className="mt-4 max-w-[38ch] text-lg leading-relaxed text-cacau-suave">
            Somos um casal e tratamos de cada encomenda do princípio ao fim. Menus para 15 a 200 convidados.
          </p>
        </div>
        <ol className="grid gap-10">
          {steps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[3.25rem_1fr] gap-5">
              <span className="font-display text-[2.6rem] leading-none text-po-fundo">{i + 1}</span>
              <div>
                <h3 className="font-display text-2xl leading-snug">{s.title}</h3>
                <p className="mt-2 max-w-[52ch] leading-relaxed text-cacau-suave">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
