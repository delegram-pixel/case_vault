"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"

export function FaqSection2() {
  return (
    <section className="bg-background section-padding-y border-b" aria-labelledby="faq-heading" id="faq">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline>FAQ</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-emerald-600">
              Find answers to our frequently asked questions
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              We&apos;ve compiled the most important information to help you get the most out of your experience.
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link href="#" className="text-primary underline">
                Contact us.
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">General</h2>
              {/* FAQ Accordion */}
              <Accordion type="single" collapsible aria-label="General FAQ items">
                {/* FAQ Item 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How does Case Vault handle manual case filing?
                  </AccordionTrigger>
                  <AccordionContent>
                    Case Vault is designed for courts without online filing systems. Court clerks can manually enter
                    case details, upload scanned documents, and manage the entire case lifecycle through our intuitive
                    interface. The system validates all entries and maintains complete audit trails for compliance.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    What role-based access controls are available?
                  </AccordionTrigger>
                  <AccordionContent>
                    Case Vault provides distinct dashboards for judges, attorneys, and court clerks. Each role has
                    specific permissions - clerks can file and manage cases, attorneys can view their cases and submit
                    documents, and judges can access case details and make rulings. All access is logged and auditable.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How does the document scanning and storage work?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our system supports bulk document scanning with automatic OCR processing. Physical documents are
                    digitized, indexed, and stored securely with metadata tagging. You can search through document
                    contents, organize by case, and maintain version control for all legal documents.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Is Case Vault compliant with legal regulations?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, Case Vault is built with legal compliance at its core. We maintain SOC 2 Type II certification,
                    provide complete audit trails, support legal hold requirements, and ensure data encryption both at
                    rest and in transit. The system meets court administration standards and regulatory requirements.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Billing FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">Implementation & Support</h2>
              {/* FAQ Accordion */}
              <Accordion type="single" collapsible aria-label="Implementation FAQ items">
                {/* FAQ Item 1 */}
                <AccordionItem value="billing-1">
                  <AccordionTrigger className="text-left">How long does implementation take?</AccordionTrigger>
                  <AccordionContent>
                    Implementation typically takes 4-8 weeks depending on court size and complexity. This includes data
                    migration, staff training, and system customization. We provide dedicated implementation specialists
                    and comprehensive training programs to ensure smooth adoption.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="billing-2">
                  <AccordionTrigger className="text-left">Can you migrate our existing case data?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we provide comprehensive data migration services. Our team can import existing case files,
                    documents, and historical data from various formats including paper records, legacy systems, and
                    spreadsheets. We ensure data integrity and provide validation reports throughout the process.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="billing-3">
                  <AccordionTrigger className="text-left">What training and support do you provide?</AccordionTrigger>
                  <AccordionContent>
                    We offer comprehensive training programs including on-site workshops, video tutorials, and user
                    manuals. Our support team provides 24/7 technical assistance, regular system updates, and ongoing
                    consultation to optimize your court operations.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="billing-4">
                  <AccordionTrigger className="text-left">
                    How is pricing structured for court systems?
                  </AccordionTrigger>
                  <AccordionContent>
                    Pricing is based on court size, number of users, and case volume. We offer flexible licensing models
                    including per-user subscriptions and enterprise packages. Contact us for a customized quote based on
                    your specific requirements and budget considerations.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
