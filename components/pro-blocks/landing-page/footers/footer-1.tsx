"use client"

import { Logo } from "@/components/pro-blocks/logo"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer1() {
  return (
    <footer className="bg-gray-50 section-padding-y border-t" role="contentinfo" aria-label="Site footer">
      <div className="container-padding-x container mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Section */}
          <div className="flex flex-col gap-6">
            <Link href="/" aria-label="Go to homepage" className="hover:opacity-80 transition-opacity">
              <h1 className="font-bold text-2xl">Case Vault</h1> 
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Expert court case management solutions for modern legal systems. Streamline filing, scheduling, and
              document management.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-foreground">Services</h3>
            <nav className="flex flex-col gap-3" aria-label="Services navigation">
              <Link
                href="#case-management"
                className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
              >
                Case Management
              </Link>
              <Link
                href="#document-filing"
                className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
              >
                Document Filing
              </Link>
              <Link
                href="#court-integration"
                className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
              >
                Court Integration
              </Link>
              <Link
                href="#compliance"
                className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
              >
                Compliance & Security
              </Link>
            </nav>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <nav className="flex flex-col gap-3" aria-label="Resources navigation">
              <Link
                href="#case-studies"
                className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
              >
                Case Studies
              </Link>
              <Link
                href="#documentation"
                className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
              >
                Documentation
              </Link>
              <Link
                href="#support"
                className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
              >
                Support Center
              </Link>
              <Link
                href="#training"
                className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
              >
                Training
              </Link>
            </nav>
          </div>

          {/* Company Section */}
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-foreground">Company</h3>
            <nav className="flex flex-col gap-3" aria-label="Company navigation">
              <Link
                href="#about"
                className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                href="#careers"
                className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
              >
                Careers
              </Link>
              <Link
                href="#contact"
                className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                href="#partners"
                className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
              >
                Partners
              </Link>
            </nav>
          </div>
        </div>

        <Separator role="presentation" />

        <div className="flex w-full flex-col-reverse items-center gap-6 text-sm lg:flex-row lg:justify-between">
          <p className="text-muted-foreground text-center lg:text-left">
            © 2024 Case Vault. All rights reserved. Built for legal professionals.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm" aria-label="Legal links">
            <Link
              href="#privacy"
              className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link
              href="#security"
              className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
            >
              Security
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
