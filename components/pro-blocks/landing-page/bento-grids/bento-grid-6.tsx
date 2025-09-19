"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"

export function BentoGrid6() {
  return (
    <section className="bg-background section-padding-y border-b" id="features">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Core Features</Tagline>
          <h2 className="heading-lg text-balance">Complete case management solution for modern courts</h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <Image
              src="/case-filing-clerk-interface-with-validation.jpg"
              alt="Case Filing Module"
              width={813}
              height={332}
              className="hidden h-auto w-full object-cover md:block md:h-[332px]"
            />
            <Image
              src="/case-filing-mobile-interface.jpg"
              alt="Case Filing Module"
              width={480}
              height={332}
              className="block h-auto w-full md:hidden"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">Case Filing Module</h3>
              <p className="text-muted-foreground">
                Clerk-focused filing system with validation checks and document scanning
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <Image
              src="/role-based-dashboard-judges-attorneys-clerks.jpg"
              alt="Role-Based Dashboards"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">Role-Based Access</h3>
              <p className="text-muted-foreground">Customized dashboards for judges, attorneys, and clerks</p>
            </CardContent>
          </Card>

          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <Image
              src="/court-scheduling-calendar-with-notifications.jpg"
              alt="Court Scheduling"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">Smart Scheduling</h3>
              <p className="text-muted-foreground">Automated hearing scheduling with SMS and email notifications</p>
            </CardContent>
          </Card>

          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <Image
              src="/document-management-scanning-storage-system.jpg"
              alt="Document Management"
              width={813}
              height={332}
              className="hidden h-[332px] w-full object-cover md:block"
            />
            <Image
              src="/document-management-mobile-interface.jpg"
              alt="Document Management"
              width={480}
              height={332}
              className="block h-auto w-full object-cover md:hidden md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">Document Management</h3>
              <p className="text-muted-foreground">
                Secure scanning, storage, and retrieval of case documents with access control
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
