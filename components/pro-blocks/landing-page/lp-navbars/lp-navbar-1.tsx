"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const MENU_ITEMS = [
  {
    label: "Modules",
    href: "#modules",
    submenu: [
      { label: "Case Filing", href: "#case-filing" },
      { label: "Document Management", href: "#document-management" },
      { label: "Scheduling", href: "#scheduling" },
    ],
  },
  { label: "Features", href: "#features" },
  { label: "User Roles", href: "#user-roles" },
  { label: "Pricing", href: "#pricing" },
  { label: "Dashboard", href: "/dashboard/clerk" },
] as const

interface NavMenuItemsProps {
  className?: string
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <div className={`flex flex-col gap-1 md:flex-row md:items-center ${className ?? ""}`}>
      {MENU_ITEMS.map((item) => (
        <div key={item.label} className="relative group">
          {'submenu' in item ? (
            <div className="relative">
              <Button
                variant="ghost"
                className="w-full md:w-auto text-sm font-medium text-gray-700 hover:text-emerald-600 transition-all duration-300 flex items-center gap-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 after:transition-all after:duration-300 hover:after:w-full"
                onMouseEnter={() => setOpenSubmenu(item.label)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                {item.label}
                <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </Button>
              
              {openSubmenu === item.label && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50 animate-in fade-in-0 zoom-in-95 duration-200"
                  onMouseEnter={() => setOpenSubmenu(item.label)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  {item.submenu.map(({ label: subLabel, href: subHref }) => (
                    <Link key={subLabel} href={subHref}>
                      <div className="px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-200 hover:border-l-2 hover:border-emerald-600 hover:pl-3">
                        {subLabel}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link href={item.href}>
              <Button
                variant="ghost"
                className="w-full md:w-auto text-sm font-medium text-gray-700 hover:text-emerald-600 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Button>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 isolate z-50 border-b border-gray-100 py-4 transition-all duration-300">
      <div className="relative container m-auto flex flex-col justify-between gap-6 px-6 md:flex-row md:items-center md:gap-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="hover:scale-105 transition-transform duration-200">
          <h1 className="font-bold text-2xl whitespace-nowrap">Case Vault</h1>
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden hover:bg-emerald-50 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end items-center gap-6 md:flex">
          <NavMenuItems />
          <Link href="/case-finder">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/25 hover:-translate-y-0.5">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <NavMenuItems />
            <Link href="/case-finder">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
