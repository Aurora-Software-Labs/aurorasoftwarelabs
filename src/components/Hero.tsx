import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const Hero = () => {
  return (
    <div>
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
            quality={85}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/45 via-gray-900/90 to-gray-900"></div>
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
              className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              <span className="text-white">Crafting Digital Excellence</span>
              <span className="text-white"> </span>
              <span className="text-[#67c970] block sm:inline">for Africa</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="mt-6 text-base leading-7 sm:text-lg sm:leading-8 max-w-2xl mx-auto text-gray-300"
            >
              Guiding Africa's tech frontier like the Northern
              Lights—illuminating innovation, unlocking opportunity, and driving
              digital transformation.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-white/90 text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md shadow-sm transition-transform duration-200 ease-out hover:scale-105 hover:shadow-md"
              >
                <Link href="/contact">
                  Let's Build Together
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto border border-white/20 text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-md shadow-sm transition-transform duration-200 ease-out hover:scale-105"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
