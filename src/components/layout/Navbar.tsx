"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/equipments", label: "Equipments" },
  { href: "/services", label: "Services" },
  {
    label: "Documents",
    subLinks: [
      { href: "/documents/Profile.pdf", label: "Company Profile" },
      { href: "/documents/CR.pdf", label: "CR" },
      { href: "/documents/Vat.pdf", label: "VAT Certificate" },
      { href: "/documents/aramco-vendor-code.pdf", label: "Aramco Vendor Code" },
    ],
  },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-brand-black shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="GMGCE Logo"
                width={465}
                height={480}
                className="h-48 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.subLinks ? (
                  <div key={link.label} className="relative group h-full flex items-center py-6">
                    <button
                      className="text-sm font-semibold uppercase tracking-wider transition-colors duration-200 relative group flex items-center gap-1 text-white hover:text-white"
                    >
                      {link.label}
                      <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    {/* Dropdown menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-white rounded-b-lg shadow-xl py-2 min-w-[220px] flex flex-col border-t-[3px] border-brand-orange">
                        {link.subLinks.map((subLink) => (
                          <a
                            key={subLink.label}
                            href={subLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 text-sm font-medium text-brand-black hover:text-brand-orange hover:bg-gray-50 transition-colors whitespace-nowrap"
                          >
                            {subLink.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 relative group ${
                      pathname === link.href
                        ? "text-brand-orange"
                        : "text-white hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${
                        pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                )
              )}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact" className="btn-primary text-xs">
                Get a Quote
                <ChevronRight size={14} />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-brand-black border-t border-white/10 transition-all duration-300 ${
            mobileOpen ? "max-h-[75vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.label} className="py-2 border-b border-white/5">
                  <div className="text-sm font-semibold uppercase tracking-wider py-2 text-white/60">
                    {link.label}
                  </div>
                  <div className="flex flex-col pl-4 gap-1 mt-1">
                    {link.subLinks.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm py-2 font-medium text-white/80 hover:text-brand-orange transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-semibold uppercase tracking-wider py-3 border-b border-white/5 transition-colors ${
                    pathname === link.href ? "text-brand-orange" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="/contact" className="btn-primary text-xs mt-4 justify-center">
              Get a Quote <ChevronRight size={14} />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
