"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Home, ArrowLeft, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function NotFound() {
  return (
    <>
      <Navigation />

      {/* Not Found Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative pt-16 overflow-hidden bg-gray-900">
        {/* Background Aurora Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <motion.div
          className="py-10 relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* 404 Text */}
          <motion.div className="my-8" variants={fadeIn}>
            <h1 className="text-8xl md:text-9xl font-bold text-white my-4 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          {/* Main Message */}
          <motion.div className="mb-12" variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for doesn't seem to exist. It may have
              drifted away like the Northern Lights.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeIn}
          >
            <Link href="/">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-white/90 text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md shadow-sm transition-transform duration-200 ease-out hover:scale-105 hover:shadow-md"
              >
                <div>
                  <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Back to Home
                </div>
              </Button>
            </Link>

            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto border border-white/20 text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-md shadow-sm transition-transform duration-200 ease-out hover:scale-105"
              >
                <div>
                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  Learn About Us
                </div>
              </Button>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-700"
            variants={fadeIn}
          >
            <h3 className="text-lg font-semibold text-white mb-6">
              Explore other pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <Link
                href="/services"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 p-3 rounded-lg hover:bg-gray-800/50 group"
              >
                <div className="font-medium group-hover:translate-y-[-2px] transition-transform">
                  Services
                </div>
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 p-3 rounded-lg hover:bg-gray-800/50 group"
              >
                <div className="font-medium group-hover:translate-y-[-2px] transition-transform">
                  Portfolio
                </div>
              </Link>
              <Link
                href="/careers"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 p-3 rounded-lg hover:bg-gray-800/50 group"
              >
                <div className="font-medium group-hover:translate-y-[-2px] transition-transform">
                  Careers
                </div>
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 p-3 rounded-lg hover:bg-gray-800/50 group"
              >
                <div className="font-medium group-hover:translate-y-[-2px] transition-transform">
                  Contact
                </div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
