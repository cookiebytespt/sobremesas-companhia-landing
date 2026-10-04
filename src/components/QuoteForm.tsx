"use client";

import { useState } from "react";
import { occasions, site } from "@/content/site";
import { Icon } from "./Icon";

const products = ["Bolo decorado", "Bolachas", "Mesa de doces", "Catering"];

const field =
  "mt-2 w-full rounded-xl border border-cacau/20 bg-acucar px-4 py-3 text-[1rem] placeholder:text-cacau/40 focus:border-cacau focus:outline-none";
const label = "block text-[0.95rem] font-medium";

export function QuoteForm() {
  const [sent, setSent] = useState<null | "whatsapp" | "email" | "none">(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const chosen = d.getAll("produtos").join(", ") || "a definir";
    const text = [
      `Olá! Gostava de pedir um orçamento.`,
      `Ocasião: ${d.get("ocasiao")}`,
      `Data: ${d.get("data")}`,
      `Convidados: ${d.get("convidados")}`,
      `Interesse: ${chosen}`,
      d.get("mensagem") ? `Detalhes: ${d.get("mensagem")}` : "",
      `Nome: ${d.get("nome")}`,
      `Contacto: ${d.get("contacto")}`,
    ]
      .filter(Boolean)
      .join("\n");

    if (site.whatsapp) {
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      setSent("whatsapp");
    } else if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Pedido de orçamento")}&body=${encodeURIComponent(text)}`;
      setSent("email");
    } else {
      // Contact not configured yet (see src/content/site.ts).
      console.info("[orcamento] contact channel not configured\n" + text);
      setSent("none");
    }
  }

  return (
    <section id="orcamento" className="scallop-top scroll-mt-6 bg-merengue">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-24">
        <div>
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">Peça o seu orçamento</h2>
          <p className="mt-4 max-w-[38ch] text-lg leading-relaxed text-cacau-suave">
            Diga-nos o essencial e respondemos em menos de 24 horas com uma proposta à medida. Sem compromisso.
          </p>
          <a
            href={site.whatsapp ? `https://wa.me/${site.whatsapp}` : site.instagram}
            className="mt-8 inline-flex items-center gap-2 text-[0.95rem] underline underline-offset-4"
          >
            <Icon name="chat" className="h-5 w-5" />
            {site.whatsapp ? "Prefere falar já? Envie-nos uma mensagem no WhatsApp." : "Prefere falar por mensagem? Estamos no Instagram."}
          </a>
        </div>

        {sent ? (
          <div role="status" className="rounded-3xl bg-acucar p-8 md:p-10">
            <h3 className="font-display text-3xl">Pedido preparado</h3>
            <p className="mt-3 max-w-[48ch] leading-relaxed text-cacau-suave">
              {sent === "whatsapp" && "Abrimos o WhatsApp com o seu pedido. Só falta carregar em enviar."}
              {sent === "email" && "Abrimos o seu email com o pedido. Só falta carregar em enviar."}
              {sent === "none" &&
                "O canal de contacto ainda não está configurado neste site. Por agora, envie-nos uma mensagem pelo Instagram."}
            </p>
            <button
              type="button"
              onClick={() => setSent(null)}
              className="mt-6 text-[0.95rem] underline underline-offset-4"
            >
              Fazer outro pedido
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-6 rounded-3xl bg-acucar p-6 md:grid-cols-2 md:p-10">
            <label className={label}>
              Ocasião
              <select name="ocasiao" required className={field} defaultValue="">
                <option value="" disabled>
                  Escolha uma
                </option>
                {occasions
                  .filter((o) => o.id !== "bolachas" && o.id !== "catering")
                  .map((o) => (
                    <option key={o.id}>{o.label}</option>
                  ))}
                <option>Outro evento</option>
              </select>
            </label>
            <label className={label}>
              Data do evento
              <input type="date" name="data" required className={field} />
            </label>
            <label className={label}>
              Número de convidados
              <input type="number" name="convidados" min={1} max={500} inputMode="numeric" placeholder="Ex.: 60" required className={field} />
            </label>
            <fieldset className="md:col-span-1">
              <legend className={label}>O que procura</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {products.map((p) => (
                  <label
                    key={p}
                    className="cursor-pointer rounded-full border border-cacau/20 px-4 py-2 text-[0.95rem] has-[:checked]:border-cacau has-[:checked]:bg-cacau has-[:checked]:text-acucar has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2"
                  >
                    <input type="checkbox" name="produtos" value={p} className="sr-only" />
                    {p}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className={`${label} md:col-span-2`}>
              Conte-nos mais <span className="font-normal text-cacau-suave">(opcional)</span>
              <textarea
                name="mensagem"
                rows={3}
                placeholder="Tema, cores, sabores preferidos, local do evento…"
                className={field}
              />
            </label>
            <label className={label}>
              Nome
              <input name="nome" autoComplete="name" required className={field} />
            </label>
            <label className={label}>
              Telemóvel ou email
              <input name="contacto" autoComplete="email" required className={field} />
            </label>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-full bg-cacau px-7 py-4 font-medium text-acucar hover:bg-[#3a2219] md:w-auto"
              >
                Pedir orçamento
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
