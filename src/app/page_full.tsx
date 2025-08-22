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
              className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              <span
                className={theme === "dark" ? "text-white" : "text-gray-900"}
              >
                Crafting Digital{" "}
              </span>
              <span className="text-primary block sm:inline">Excellence</span>
              <span
                className={theme === "dark" ? "text-white" : "text-gray-900"}
              >
                {" "}
              </span>
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

      {/* Values Section */}
      <section
        className={`py-16 lg:py-20 ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={fadeIn}
              className={`text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Our Core Values
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className={`mt-4 text-base leading-7 sm:text-lg sm:leading-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3 lg:max-w-none lg:grid-cols-5 lg:gap-8"
          >
            {companyInfo.values.map((value) => (
              <motion.div key={value} variants={fadeIn} className="text-center">
                <div className="mx-auto flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3
                  className={`mt-3 sm:mt-4 text-sm sm:text-lg font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {value}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section
        className={`py-16 lg:py-20 ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={fadeIn}
              className={`text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Our Services
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className={`mt-4 text-base leading-7 sm:text-lg sm:leading-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Comprehensive digital solutions tailored to your needs
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeIn}>
                <Card
                  className={`h-full hover:shadow-lg transition-shadow duration-300 ${
                    theme === "dark"
                      ? "bg-gray-900 border-gray-700"
                      : "bg-white"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/10">
                        <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <CardTitle
                        className={`text-lg sm:text-xl ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription
                      className={`text-base leading-6 sm:leading-7 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </CardDescription>
                    <ul className="mt-4 space-y-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-center text-sm ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          <ChevronRight className="h-4 w-4 text-[#67c970] mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-8 sm:mt-12 text-center"
          >
            <Button variant="outline" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        className={`py-16 lg:py-20 ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={fadeIn}
              className={`text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className={`mt-4 text-base leading-7 sm:text-lg sm:leading-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Showcasing our recent work and success stories
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeIn}>
                <Card
                  className={`h-full hover:shadow-lg transition-shadow duration-300 group ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white"
                  }`}
                >
                  <div className="aspect-[16/9] bg-gray-200 rounded-t-lg relative overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Code className="h-12 w-12 sm:h-16 sm:w-16 text-primary opacity-50" />
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle
                      className={`group-hover:text-primary transition-colors duration-200 text-lg ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                            theme === "dark"
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription
                      className={`text-sm sm:text-base leading-6 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </CardDescription>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Live Site
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-8 sm:mt-12 text-center"
          >
            <Button variant="outline" asChild>
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mt-4 text-base leading-7 text-primary-foreground/80 sm:text-lg sm:leading-8"
            >
              Don't just take our word for it
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={fadeIn}>
                <Card className="bg-primary-foreground text-primary h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-[#67c970] text-[#67c970]"
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-6 mb-4">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-[#67c970]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight text-[#67c970]-foreground sm:text-3xl lg:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-6 text-base leading-7 text-[#67c970]-foreground/80 sm:text-lg sm:leading-8">
              Let's discuss how we can bring your digital vision to life. Get in
              touch for a free consultation.
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
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto border-accent-foreground text-dark hover:bg-[#67c970]-foreground hover:text-[#67c970]"
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
