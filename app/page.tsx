import { LocaleProvider } from "@/lib/i18n/locale-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Screenshots } from "@/components/sections/screenshots";
import { ModelModes } from "@/components/sections/model-modes";
import { Privacy } from "@/components/sections/privacy";
import { Reviews } from "@/components/sections/reviews";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <LocaleProvider>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Screenshots />
      <ModelModes />
      <Privacy />
      <Reviews />
      <Faq />
      <FinalCta />
      <Footer />
    </LocaleProvider>
  );
}
