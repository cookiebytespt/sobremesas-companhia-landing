import { Photo } from "./Photo";

export function Hero() {
  return (
    <section className="scallop-bottom bg-po">
      <div className="mx-auto grid max-w-6xl items-end gap-12 px-5 pt-8 pb-16 md:grid-cols-[1.1fr_1fr] md:px-8 md:pt-14 md:pb-24">
        <div className="max-w-xl pb-2">
          <h1 className="rise font-display text-[2.6rem] leading-[1.05] tracking-tight md:text-[4.1rem]">
            Bolos e doces feitos em casa, para os dias que contam.
          </h1>
          <p className="rise rise-1 mt-6 max-w-[46ch] text-lg leading-relaxed text-cacau-suave">
            Casamentos, batizados, comunhões e aniversários. Bolos decorados, bolachas, mesas de doces e catering,
            de Santo Tirso a Viana do Castelo.
          </p>
          <div className="rise rise-2 mt-9 flex flex-wrap gap-3">
            <a
              href="#orcamento"
              className="rounded-full bg-cacau px-7 py-3.5 font-medium text-acucar hover:bg-[#3a2219]"
            >
              Pedir orçamento
            </a>
            <a
              href="#criacoes"
              className="rounded-full border border-cacau/30 px-7 py-3.5 font-medium hover:border-cacau"
            >
              Ver criações
            </a>
          </div>
        </div>

        <div className="rise rise-3 relative mx-auto flex w-full max-w-md items-end gap-4">
          <Photo
            src="/images/instagram/casamento-flores.jpg"
            alt="Bolo de casamento com flores do campo"
            icon="rings"
            tint={1}
            className="arch aspect-[3/5] w-[58%] shadow-[0_24px_48px_-24px_rgba(75,46,34,0.45)]"
          />
          <div className="flex w-[42%] flex-col gap-4">
            <Photo
              src="/images/instagram/bolachas-tenis.jpg"
              alt="Bolachas decoradas"
              icon="cookie"
              tint={2}
              className="arch aspect-[3/4] w-full"
            />
            <Photo src="/images/instagram/catering-mini-tartes.jpg" alt="Mini tartes de fruta" icon="platter" tint={3} className="aspect-square w-full rounded-[18px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
