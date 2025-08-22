"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Calendar, Tag, ArrowRight } from "lucide-react";
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
import { projects } from "@/data";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PortfolioPage() {
  const { theme } = useTheme();

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section
        className={`pt-32 pb-12 ${
          theme === "dark"
            ? "bg-gray-900"
            : "bg-gradient-to-br from-white to-gray-50"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className={`text-4xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } sm:text-6xl`}
            >
              Our <span className="text-primary">Portfolio</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className={`mt-6 text-lg leading-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Explore our recent projects and see how we've helped businesses
              across Africa achieve their digital goals through innovative
              solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 lg:grid-cols-1 xl:gap-16"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden shadow-lg relative">
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Overlay with project category */}
                        <div className="absolute top-4 right-4 z-10">
                          <span className="inline-flex items-center rounded-md bg-primary/90 backdrop-blur-sm px-3 py-1 text-sm font-medium text-primary-foreground">
                            {project.category}
                          </span>
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center text-white">
                            <ExternalLink className="h-8 w-8 mx-auto mb-2" />
                            <p className="text-sm font-medium">
                              View Live Site
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ExternalLink className="h-12 w-12 text-primary" />
                          </div>
                          <p className="text-sm text-gray-600">
                            Visit Live Site
                          </p>
                        </div>
                        {/* Overlay with project category */}
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center rounded-md bg-primary/90 px-3 py-1 text-sm font-medium text-primary-foreground">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div>
                    <h2
                      className={`text-3xl font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h2>
                    <p
                      className={`mt-4 text-lg leading-7 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      } mb-3 flex items-center`}
                    >
                      <Tag className="h-5 w-5 mr-2 text-[#67c970]" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`inline-flex items-center rounded-md px-3 py-1 text-sm font-medium ${
                            theme === "dark"
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Highlights */}
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      } mb-3`}
                    >
                      Key Features
                    </h3>
                    <ul
                      className={`space-y-2 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.id === "laropa-kioki" && (
                        <>
                          <li>• Modern, mobile-responsive e-commerce design</li>
                          <li>
                            • Secure payment processing with Stripe integration
                          </li>
                          <li>• Inventory management and order tracking</li>
                          <li>• SEO-optimized for African fashion market</li>
                        </>
                      )}
                      {project.id === "lolyraced-ventures" && (
                        <>
                          <li>• Multi-vendor marketplace functionality</li>
                          <li>• Centralized dashboard for store management</li>
                          <li>• Advanced search and filtering capabilities</li>
                          <li>• Integrated payment and shipping solutions</li>
                        </>
                      )}
                      {project.id === "michael-yeng" && (
                        <>
                          <li>• Dynamic content management system</li>
                          <li>• Event management and voter engagement tools</li>
                          <li>• Fast-loading with smooth animations</li>
                          <li>• Mobile-optimized for campaign outreach</li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg">
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Live Site
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/contact">
                        Start Similar Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Stats */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className={`text-3xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } sm:text-4xl`}
            >
              Project Impact
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className={`mt-4 text-lg leading-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              The measurable results our clients have achieved
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3 lg:max-w-none"
          >
            <motion.div variants={fadeInUp}>
              <Card
                className={`text-center h-full ${
                  theme === "dark" ? "bg-gray-700" : "bg-white"
                }`}
              >
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">
                    100%
                  </div>
                  <h3
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Client Satisfaction
                  </h3>
                  <p
                    className={`text-sm mt-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Every project delivered on time and exceeding expectations
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card
                className={`text-center h-full ${
                  theme === "dark" ? "bg-gray-700" : "bg-white"
                }`}
              >
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#67c970] mb-2">
                    3+
                  </div>
                  <h3
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Live Projects
                  </h3>
                  <p
                    className={`text-sm mt-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Successfully launched and actively serving users
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card
                className={`text-center h-full ${
                  theme === "dark" ? "bg-gray-700" : "bg-white"
                }`}
              >
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">
                    99.9%
                  </div>
                  <h3
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Uptime
                  </h3>
                  <p
                    className={`text-sm mt-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Reliable, high-performance solutions that stay online
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials for Projects */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className={`text-3xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } sm:text-4xl`}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className={`mt-4 text-lg leading-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Direct feedback from the businesses we've helped transform
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
          >
            <motion.div variants={fadeInUp}>
              <Card
                className={`h-full ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <CardContent className="p-6">
                  <p
                    className={`mb-4 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    "Aurora Software Labs transformed our fashion brand's online
                    presence. The e-commerce platform they built has
                    significantly increased our sales and customer engagement."
                  </p>
                  <div className="border-t pt-4">
                    <p
                      className={`font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Alberta Cobbinah
                    </p>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      CEO, Laropa Kioki
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card
                className={`h-full ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <CardContent className="p-6">
                  <p
                    className={`mb-4 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    "The campaign website was instrumental in our success. It
                    perfectly captured our message and helped us connect with
                    voters across campus. Highly recommended!"
                  </p>
                  <div className="border-t pt-4">
                    <p
                      className={`font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Michael Yeng
                    </p>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Former SRC Candidate
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card
                className={`h-full ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <CardContent className="p-6">
                  <p
                    className={`mb-4 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    "Working with Aurora was a game-changer for our multi-vendor
                    platform. They understood our complex requirements and
                    delivered a solution that exceeded our expectations."
                  </p>
                  <div className="border-t pt-4">
                    <p
                      className={`font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Grace Domfeh
                    </p>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Founder, Lolyraced Ventures
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#67c970]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-center"
          >
            <h2
              className={`text-2xl font-bold tracking-tight ${
                theme === "dark" ? "text-gray-900" : "text-black"
              } sm:text-3xl lg:text-4xl`}
            >
              Ready to Write Your Success Story?
            </h2>
            <p
              className={`mt-6 text-base leading-7 ${
                theme === "dark" ? "text-gray-900/80" : "text-black/80"
              } sm:text-lg sm:leading-8`}
            >
              Let's create something amazing together. Your project could be our
              next featured success story.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="w-full sm:w-auto"
              >
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className={`w-full sm:w-auto border-accent-foreground text-black hover:bg-white hover:text-[#67c970]`}
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
