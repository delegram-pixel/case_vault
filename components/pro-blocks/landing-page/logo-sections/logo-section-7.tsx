"use client";

import { PlaceholderLogo } from "@/components/pro-blocks/placeholder-logo"; /* Make sure to import your logos */
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function LogoSection10() {
  return (
    <section className="bg-secondary border-b py-16 lg:py-24">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            <Tagline variant="ghost">Trusted by Courts and Legal Professionals</Tagline>
          </div>
        </div>
      </div>
    </section>
  );
}
