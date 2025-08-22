"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Users,
  Zap,
  Heart,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
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
import CareerForm from "@/components/CareerForm";
import { companyInfo } from "@/data";

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

const benefits = [
  {
    icon: Zap,
    title: "Growth Opportunities",
    description:
      "Continuous learning and career advancement in cutting-edge technologies",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work with talented individuals in a supportive, inclusive environment",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description:
      "Flexible schedules and remote work options to support your lifestyle",
  },
  {
    icon: Award,
    title: "Competitive Benefits",
    description:
      "Attractive compensation packages and performance-based incentives",
  },
];

export default function CareersPage() {
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
              variants={fadeIn}
              className={`text-4xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } sm:text-6xl`}
            >
              Join Our <span className="text-primary">Team</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className={`mt-6 text-lg leading-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Be part of Africa's digital transformation. Help us build
              innovative solutions that make a real difference in businesses and
              communities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
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
              variants={fadeIn}
              className={`text-3xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } sm:text-4xl`}
            >
              Why Work at Aurora?
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className={`mt-4 text-lg leading-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We're more than just a software company - we're a family building
              the future
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none"
          >
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} variants={fadeIn}>
                <Card
                  className={`h-full hover:shadow-lg transition-shadow ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values in Practice */}
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
              variants={fadeIn}
              className={`text-3xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } sm:text-4xl`}
            >
              Our Values in Action
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className={`mt-4 text-lg leading-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              How we live our core values every day at Aurora Software Labs
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto mt-16 max-w-3xl"
          >
            <div className="space-y-8">
              {[
                {
                  value: "Innovation",
                  description:
                    "We encourage experimentation, embrace new technologies, and support creative problem-solving approaches.",
                },
                {
                  value: "Reliability",
                  description:
                    "Our team members can depend on each other to deliver quality work consistently and meet commitments.",
                },
                {
                  value: "Collaboration",
                  description:
                    "We foster open communication, knowledge sharing, and teamwork across all projects and departments.",
                },
                {
                  value: "Integrity",
                  description:
                    "We maintain transparency in our processes, honest communication, and ethical practices in all interactions.",
                },
                {
                  value: "Impact",
                  description:
                    "Every role contributes meaningfully to our mission of empowering African businesses through technology.",
                },
              ].map((item, index) => (
                <motion.div key={item.value} variants={fadeIn}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-semibold ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.value}
                      </h3>
                      <p
                        className={`mt-2 ${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Opportunities */}
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
              variants={fadeIn}
              className={`text-3xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } sm:text-4xl`}
            >
              Current Opportunities
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className={`mt-4 text-lg leading-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We're always looking for talented individuals to join our growing
              team
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto mt-16 max-w-3xl"
          >
            <motion.div variants={fadeIn}>
              <Card
                className={`text-center ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <CardContent className="p-12">
                  <Users className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Growing Team, Future Opportunities
                  </h3>
                  <p
                    className={`text-lg mb-8 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    While we don't have specific openings at the moment, we're
                    always interested in connecting with talented developers,
                    designers, and digital strategists who share our passion for
                    African tech innovation.
                  </p>
                  <div className="space-y-4">
                    <h4
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      We're particularly interested in:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-[#67c970] flex-shrink-0" />
                        <span
                          className={`${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          Frontend Developers
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-[#67c970] flex-shrink-0" />
                        <span
                          className={`${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          Backend Developers
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-[#67c970] flex-shrink-0" />
                        <span
                          className={`${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          UI/UX Designers
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-[#67c970] flex-shrink-0" />
                        <span
                          className={`${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          Project Managers
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section
        className={`py-16 ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-primary text-primary-foreground"
        }`}
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
              variants={fadeIn}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              How to Apply
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className={`mt-4 text-lg leading-8 ${
                theme === "dark"
                  ? "text-gray-300"
                  : "text-primary-foreground/80"
              }`}
            >
              Ready to be part of something amazing? Here's how to get started
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto mt-16 max-w-3xl"
          >
            <motion.div variants={fadeIn}>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#67c970] text-[#67c970]-foreground font-bold text-xl mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Send Your Portfolio
                  </h3>
                  <p
                    className={`text-sm ${
                      theme === "dark"
                        ? "text-gray-300"
                        : "text-primary-foreground/80"
                    }`}
                  >
                    Share your best work and tell us about your experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#67c970] text-[#67c970]-foreground font-bold text-xl mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Initial Chat</h3>
                  <p
                    className={`text-sm ${
                      theme === "dark"
                        ? "text-gray-300"
                        : "text-primary-foreground/80"
                    }`}
                  >
                    Let's get to know each other and discuss opportunities
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#67c970] text-[#67c970]-foreground font-bold text-xl mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Join the Team</h3>
                  <p
                    className={`text-sm ${
                      theme === "dark"
                        ? "text-gray-300"
                        : "text-primary-foreground/80"
                    }`}
                  >
                    Start building amazing solutions together
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Career Application Form */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <h2
              className={`text-3xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } sm:text-4xl`}
            >
              Ready to Join Us?
            </h2>
            <p
              className={`mt-6 text-lg leading-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Submit your application below and let's start a conversation about
              how you can contribute to Aurora Software Labs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CareerForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
