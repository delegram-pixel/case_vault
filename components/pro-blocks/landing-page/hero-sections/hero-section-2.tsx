"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Calendar, FileText } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"
import Image from "next/image"

export function HeroSection2() {
  return (
    <section className="bg-secondary/5 section-padding-y" aria-labelledby="hero-heading">
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* <Tagline>Case Vault</Tagline> */}
            <h1 id="hero-heading" className="heading-xl text-balance">
              Streamline Court Case Management from Filing to Resolution
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg text-pretty">
              Digital case management system designed for courts without online filing. Empowers clerks, judges, and
              attorneys with efficient case tracking, scheduling, and document management.
            </p>
          </div>

          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Users className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Role-based dashboards for all court users
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Calendar className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Automated scheduling & notifications
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <FileText className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Digital document scanning & storage
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Request Demo</Button>
            <Button variant="ghost">
              View Features
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/court-case-management-dashboard-interface.jpg"
              alt="Case Vault court case management dashboard"
              fill
              priority
              className="h-full w-full rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  )
}
