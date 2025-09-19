import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2"
import { LogoSection10 } from "@/components/pro-blocks/landing-page/logo-sections/logo-section-7"
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1"
import { BentoGrid6 } from "@/components/pro-blocks/landing-page/bento-grids/bento-grid-6"
import { FeatureSection9 } from "@/components/pro-blocks/landing-page/feature-sections/feature-section-9"
import { StatsSection4 } from "@/components/pro-blocks/landing-page/stats-sections/stats-section-4"
import { PricingSection3 } from "@/components/pro-blocks/landing-page/pricing-sections/pricing-section-3"
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"

export default function Page() {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection2 />
      <LogoSection10 />
      <TestimonialsSection1
        quote="LegalVault transformed our document management. We reduced case preparation time by 60% and never worry about compliance anymore."
        authorName="Sarah Chen"
        authorRole="Senior Partner at Morrison & Associates"
        avatarSrc="/professional-female-lawyer.png"
      />
      <BentoGrid6 />
      <FeatureSection9 />
      <StatsSection4 />
      <TestimonialsSection1
        quote="The court filing integration saved us countless hours. Our clerks can now process documents 3x faster with complete audit trails."
        authorName="Judge Michael Rodriguez"
        authorRole="Superior Court of California"
        avatarSrc="/professional-male-judge-headshot.jpg"
      />
      <PricingSection3 />
      <FaqSection2 />
      <Footer1 />
    </main>
  )
}
