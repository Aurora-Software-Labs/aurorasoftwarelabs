"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { companyInfo, services, projects, testimonials } from "@/data";

// Optimized, lighter animations
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  const { theme } = useTheme();

  return (
    <>
      <Navigation />

      {/* Hero Section - Centered viewport */}
      <section className="min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/aurora-landscape.jpg"
            alt="Aurora landscape"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-900/45 via-gray-900/90 to-gray-900"
                : "bg-gradient-to-br from-white/45 via-white/90 to-white"
            }`}
          ></div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h1
              variants={fadeIn}
              className={`text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Crafting Digital{" "}
              <span className="text-primary block sm:inline">Excellence</span>{" "}
              <span className="text-[#67c970] block sm:inline">for Africa</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className={`mt-6 text-base leading-7 sm:text-lg sm:leading-8 max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Guiding Africa's tech frontier like the{" "}
              <span className="text-primary">Northern Lights</span>—illuminating
              innovation, unlocking opportunity, and driving digital
              transformation.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/contact">
                  Let's Build Together
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Placeholder for other sections */}
      <div className="py-16">
        <div className="text-center">
          <p className={theme === "dark" ? "text-white" : "text-gray-900"}>
            Dark mode implemented for navbar and hero section. Other sections
            coming next!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
