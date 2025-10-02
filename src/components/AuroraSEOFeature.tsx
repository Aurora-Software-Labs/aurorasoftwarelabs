"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Package, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

export default function AuroraSEOFeature() {
  return (
    <section className="py-8 lg:py-20 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={fadeIn}
            className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white mb-4"
          >
            Aurora<span className="text-[#67c970]">SEO</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-base leading-7 sm:text-lg sm:leading-8 text-gray-300 max-w-3xl mx-auto"
          >
            Our flagship contribution to the developer community — making SEO
            simple and powerful for Next.js & React
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-12 sm:mt-16"
        >
          <motion.div
            variants={fadeIn}
            className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center"
          >
            {/* Package Info */}
            <div className="lg:col-span-2">
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gray-800 border-gray-700">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#67c970]/10">
                      <Package className="h-6 w-6 text-[#67c970]" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl sm:text-2xl text-white mb-2">
                        <span className="font-mono font-bold">aurora-seo</span>
                      </CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-gray-700 text-gray-300">
                          npm package
                        </span>
                        <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-gray-700 text-gray-300">
                          TypeScript
                        </span>
                        <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-gray-700 text-gray-300">
                          Next.js
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base leading-6 sm:leading-7 text-gray-300 mb-6">
                    A lightweight, powerful SEO utility package that makes it
                    ridiculously simple to manage meta tags, social previews,
                    and structured data with clean, declarative syntax.
                  </CardDescription>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Key Features
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-center text-gray-300">
                        <div className="h-2 w-2 bg-[#67c970] rounded-full mr-3"></div>
                        <span>Simple meta tag management</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <div className="h-2 w-2 bg-[#67c970] rounded-full mr-3"></div>
                        <span>Social media previews</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <div className="h-2 w-2 bg-[#67c970] rounded-full mr-3"></div>
                        <span>Structured data support</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <div className="h-2 w-2 bg-[#67c970] rounded-full mr-3"></div>
                        <span>TypeScript-first approach</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="w-full sm:w-auto bg-white/90 text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md shadow-sm transition-transform duration-200 ease-out hover:scale-105 hover:shadow-md"
                    >
                      <Link
                        href="https://www.npmjs.com/package/aurora-seo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on npm
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="w-full sm:w-auto border border-white/20 text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-md shadow-sm transition-transform duration-200 ease-out hover:scale-105"
                    >
                      <Link href="/aurora-seo">
                        View Docs
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats/Info Panel */}
            <div className="space-y-6">
              <motion.div variants={fadeIn}>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-[#67c970] mb-2">
                      Open Source
                    </div>
                    <p className="text-gray-300 text-sm">
                      MIT Licensed & Community Driven
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      0 Dependencies
                    </div>
                    <p className="text-gray-300 text-sm">Lightweight & Fast</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      100%
                    </div>
                    <p className="text-gray-300 text-sm">TypeScript Coverage</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
