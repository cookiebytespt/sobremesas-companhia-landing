import { Area } from "@/components/Area";
import { Creations } from "@/components/Creations";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuoteForm } from "@/components/QuoteForm";
import { Steps } from "@/components/Steps";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Creations />
        <Steps />
        <Area />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
