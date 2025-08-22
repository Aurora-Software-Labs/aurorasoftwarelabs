"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";
import auroraLogoLight from "../../public/auroraLogoLight.png";
import auroraLogoDark from "../../public/auroralogodark.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <header
        className={`fixed w-screen top-0 left-0 z-40 transition-all duration-300 ease-out ${
          isScrolled
            ? theme === "dark"
              ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-700/20"
              : "bg-white/95 backdrop-blur-md border-b border-gray-200/20"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="flex items-center transition-transform duration-200 ease-out hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image
                src={theme === "dark" ? auroraLogoDark : auroraLogoLight}
                alt="Aurora Software Labs"
                width={120}
                height={40}
                className="w-auto h-auto"
                priority
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className={`p-2 hover:bg-primary/10 hover:scale-110 transition-all duration-200 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open main menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-semibold transition-all duration-300 ease-out group ${
                    isActive
                      ? "text-primary"
                      : theme === "dark"
                      ? "text-white hover:text-primary"
                      : "text-gray-900 hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-0.5 bg-primary transition-transform duration-300 ease-out origin-left ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA and Theme Toggle */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <ThemeToggle />
            <Button asChild>
              <Link href="/contact">Let&apos;s Build Together</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className={`fixed inset-y-0 right-0 z-50 w-4/5 max-w-sm shadow-xl p-6 flex flex-col ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              }`}
            >
              {/* Header with logo & close button */}
              <div className="flex items-center justify-between mb-6">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src={theme === "dark" ? auroraLogoDark : auroraLogoLight}
                    alt="Aurora Software Labs"
                    width={120}
                    height={40}
                    className="w-auto h-auto"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className={`${
                    theme === "dark"
                      ? "text-white hover:bg-gray-800"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col gap-4">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group"
                    >
                      <Link
                        href={item.href}
                        className={`block text-base font-semibold transition-all duration-200 ease-out relative ${
                          isActive
                            ? "text-[#67c970] translate-x-2"
                            : theme === "dark"
                            ? "text-white hover:text-primary hover:translate-x-2"
                            : "text-gray-900 hover:text-primary hover:translate-x-2"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                        {isActive && (
                          <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#67c970] rounded-full"></span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA at bottom */}
              <div className="mt-auto pt-6">
                <Button asChild className="w-full">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Let&apos;s Build Together
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
