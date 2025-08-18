"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Settings, ArrowRight, CheckCircle, Star } from "lucide-react";
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
import { services } from "@/data";

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

const serviceIcons = {
  "web-development": Code,
  "software-consulting": Settings,
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Our <span className="text-primary">Services</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Comprehensive digital solutions designed to empower your business
              and drive meaningful growth in today's competitive landscape.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-16"
          >
            {services.map((service, index) => {
              const IconComponent =
                serviceIcons[service.id as keyof typeof serviceIcons];
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                            <IconComponent className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">
                              {service.title}
                            </CardTitle>
                            <div className="flex items-center mt-2">
                              <Star className="h-4 w-4 text-accent fill-accent" />
                              <Star className="h-4 w-4 text-accent fill-accent" />
                              <Star className="h-4 w-4 text-accent fill-accent" />
                              <Star className="h-4 w-4 text-accent fill-accent" />
                              <Star className="h-4 w-4 text-accent fill-accent" />
                              <span className="ml-2 text-sm text-gray-600">
                                Premium Service
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <CardDescription className="text-base leading-7">
                          {service.description}
                        </CardDescription>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            What's Included:
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-center space-x-3"
                              >
                                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4">
                          <Button asChild>
                            <Link href="/contact">
                              Get Started
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-24 w-24 text-primary opacity-50" />
                    </div>

                    {/* Process or benefits */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {service.id === "web-development"
                          ? "Our Development Process"
                          : "Our Consulting Approach"}
                      </h3>
                      <div className="space-y-4">
                        {service.id === "web-development" ? (
                          <>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                1
                              </div>
                              <div>
                                <h4 className="font-medium">
                                  Discovery & Planning
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Understanding your requirements and goals
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                2
                              </div>
                              <div>
                                <h4 className="font-medium">
                                  Design & Development
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Creating beautiful, functional solutions
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                3
                              </div>
                              <div>
                                <h4 className="font-medium">
                                  Testing & Launch
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Ensuring quality and smooth deployment
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                4
                              </div>
                              <div>
                                <h4 className="font-medium">
                                  Support & Maintenance
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Ongoing support for optimal performance
                                </p>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                1
                              </div>
                              <div>
                                <h4 className="font-medium">
                                  Current State Analysis
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Comprehensive review of your existing systems
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                2
                              </div>
                              <div>
                                <h4 className="font-medium">
                                  Strategic Recommendations
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Tailored solutions for your specific needs
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                3
                              </div>
                              <div>
                                <h4 className="font-medium">
                                  Implementation Planning
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Detailed roadmap for execution
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                4
                              </div>
                              <div>
                                <h4 className="font-medium">Ongoing Support</h4>
                                <p className="text-sm text-gray-600">
                                  Continuous guidance and optimization
                                </p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-16 bg-gray-50">
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
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Technologies We Master
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg leading-8 text-gray-600"
            >
              We work with modern, proven technologies to ensure your solutions
              are scalable, secure, and future-ready.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-3 lg:max-w-none lg:grid-cols-6"
          >
            {[
              "React",
              "Next.js",
              "Node.js",
              "TypeScript",
              "Python",
              "MongoDB",
              "PostgreSQL",
              "Tailwind CSS",
              "Framer Motion",
              "Stripe",
              "Vercel",
              "AWS",
            ].map((tech) => (
              <motion.div
                key={tech}
                variants={fadeInUp}
                className="flex items-center justify-center"
              >
                <div className="rounded-lg bg-white px-4 py-3 shadow-sm border text-center min-w-full">
                  <span className="text-sm font-medium text-gray-900">
                    {tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
              Let's discuss your project requirements and how we can help bring
              your vision to life with our expert services.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
