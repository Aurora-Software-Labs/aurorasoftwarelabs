"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Copy, Package, ExternalLink, Check } from "lucide-react";
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
import { useState } from "react";

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

function CodeBlock({
  children,
  language = "bash",
}: {
  children: string;
  language?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code className={`language-${language}`}>{children}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4 text-gray-400" />
        )}
      </button>
    </div>
  );
}

export default function AuroraSEODocsPage() {
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
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#67c970]/10 mr-4">
                <Package className="h-8 w-8 text-[#67c970]" />
              </div>
              <div>
                <h1
                  className={`text-4xl font-bold tracking-tight ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  } sm:text-5xl`}
                >
                  Aurora<span className="text-[#67c970]">SEO</span>
                </h1>
                <p className="text-lg text-gray-500 font-mono">v1.0.0</p>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className={`text-lg leading-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              A lightweight SEO utility package for Next.js and React apps that
              makes it simple to manage meta tags, social previews, and
              structured data with clean, declarative syntax.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#67c970] text-gray-900 hover:bg-[#67c970]/90"
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
                className={`border ${
                  theme === "dark"
                    ? "border-white/20 text-white bg-white/5 hover:bg-white/10"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Link
                  href="https://github.com/aurorasoftwarelabs/aurora-seo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Content */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Installation */}
            <motion.div variants={fadeInUp}>
              <Card
                className={`${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-2xl ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Installation
                  </CardTitle>
                  <CardDescription>
                    Get started with aurora-seo in your Next.js or React project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4
                      className={`font-semibold mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Using npm:
                    </h4>
                    <CodeBlock>npm install aurora-seo</CodeBlock>
                  </div>
                  <div>
                    <h4
                      className={`font-semibold mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Using yarn:
                    </h4>
                    <CodeBlock>yarn add aurora-seo</CodeBlock>
                  </div>
                  <div>
                    <h4
                      className={`font-semibold mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Using pnpm:
                    </h4>
                    <CodeBlock>pnpm add aurora-seo</CodeBlock>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Start */}
            <motion.div variants={fadeInUp}>
              <Card
                className={`${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-2xl ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Quick Start
                  </CardTitle>
                  <CardDescription>
                    Basic usage example to get you started immediately
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock language="tsx">{`import { AuroraSEO } from 'aurora-seo';

export default function MyPage() {
  return (
    <>
      <AuroraSEO
        title="My Awesome Page"
        description="This is an amazing page built with Next.js"
        url="https://mysite.com/my-page"
        image="https://mysite.com/opengraph-image.png"
      />
      <div>
        <h1>My Page Content</h1>
      </div>
    </>
  );
}`}</CodeBlock>
                </CardContent>
              </Card>
            </motion.div>

            {/* API Reference */}
            <motion.div variants={fadeInUp}>
              <Card
                className={`${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-2xl ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    API Reference
                  </CardTitle>
                  <CardDescription>
                    Complete list of props and their descriptions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table
                      className={`w-full text-sm ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <thead>
                        <tr
                          className={`border-b ${
                            theme === "dark"
                              ? "border-gray-700"
                              : "border-gray-200"
                          }`}
                        >
                          <th className="text-left py-2 font-semibold">Prop</th>
                          <th className="text-left py-2 font-semibold">Type</th>
                          <th className="text-left py-2 font-semibold">
                            Required
                          </th>
                          <th className="text-left py-2 font-semibold">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className={`border-b ${
                            theme === "dark"
                              ? "border-gray-700"
                              : "border-gray-200"
                          }`}
                        >
                          <td className="py-2 font-mono">title</td>
                          <td className="py-2">string</td>
                          <td className="py-2">Yes</td>
                          <td className="py-2">
                            Page title for browser tab and search results
                          </td>
                        </tr>
                        <tr
                          className={`border-b ${
                            theme === "dark"
                              ? "border-gray-700"
                              : "border-gray-200"
                          }`}
                        >
                          <td className="py-2 font-mono">description</td>
                          <td className="py-2">string</td>
                          <td className="py-2">Yes</td>
                          <td className="py-2">
                            Meta description for search engines and social media
                          </td>
                        </tr>
                        <tr
                          className={`border-b ${
                            theme === "dark"
                              ? "border-gray-700"
                              : "border-gray-200"
                          }`}
                        >
                          <td className="py-2 font-mono">url</td>
                          <td className="py-2">string</td>
                          <td className="py-2">No</td>
                          <td className="py-2">Canonical URL of the page</td>
                        </tr>
                        <tr
                          className={`border-b ${
                            theme === "dark"
                              ? "border-gray-700"
                              : "border-gray-200"
                          }`}
                        >
                          <td className="py-2 font-mono">image</td>
                          <td className="py-2">string</td>
                          <td className="py-2">No</td>
                          <td className="py-2">
                            Open Graph image URL for social media previews
                          </td>
                        </tr>
                        <tr
                          className={`border-b ${
                            theme === "dark"
                              ? "border-gray-700"
                              : "border-gray-200"
                          }`}
                        >
                          <td className="py-2 font-mono">type</td>
                          <td className="py-2">string</td>
                          <td className="py-2">No</td>
                          <td className="py-2">
                            Open Graph type (default: "website")
                          </td>
                        </tr>
                        <tr
                          className={`border-b ${
                            theme === "dark"
                              ? "border-gray-700"
                              : "border-gray-200"
                          }`}
                        >
                          <td className="py-2 font-mono">siteName</td>
                          <td className="py-2">string</td>
                          <td className="py-2">No</td>
                          <td className="py-2">Name of your website/brand</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-mono">keywords</td>
                          <td className="py-2">string[]</td>
                          <td className="py-2">No</td>
                          <td className="py-2">
                            Array of keywords for the page
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Advanced Usage */}
            <motion.div variants={fadeInUp}>
              <Card
                className={`${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-2xl ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Advanced Usage
                  </CardTitle>
                  <CardDescription>
                    Complete example with all available options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock language="tsx">{`import { AuroraSEO } from 'aurora-seo';

export default function BlogPost() {
  return (
    <>
      <AuroraSEO
        title="How to Build Amazing Web Apps"
        description="Learn the best practices for building modern web applications with React and Next.js"
        url="https://mysite.com/blog/amazing-web-apps"
        image="https://mysite.com/images/blog/web-apps-cover.jpg"
        type="article"
        siteName="Aurora Software Labs"
        keywords={["web development", "react", "nextjs", "tutorial"]}
      />
      <article>
        <h1>How to Build Amazing Web Apps</h1>
        <p>Your blog content here...</p>
      </article>
    </>
  );
}`}</CodeBlock>
                </CardContent>
              </Card>
            </motion.div>

            {/* Features */}
            <motion.div variants={fadeInUp}>
              <Card
                className={`${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-2xl ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Features
                  </CardTitle>
                  <CardDescription>
                    What aurora-seo provides out of the box
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="h-2 w-2 bg-[#67c970] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4
                            className={`font-semibold ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Meta Tags
                          </h4>
                          <p
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-600"
                            }`}
                          >
                            Automatically generates title, description, and
                            keyword meta tags
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-2 w-2 bg-[#67c970] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4
                            className={`font-semibold ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Open Graph
                          </h4>
                          <p
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-600"
                            }`}
                          >
                            Perfect social media previews for Facebook,
                            LinkedIn, and more
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-2 w-2 bg-[#67c970] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4
                            className={`font-semibold ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Twitter Cards
                          </h4>
                          <p
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-600"
                            }`}
                          >
                            Optimized Twitter/X card previews with proper
                            metadata
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="h-2 w-2 bg-[#67c970] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4
                            className={`font-semibold ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Canonical URLs
                          </h4>
                          <p
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-600"
                            }`}
                          >
                            Prevents duplicate content issues with proper
                            canonical tags
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-2 w-2 bg-[#67c970] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4
                            className={`font-semibold ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            TypeScript
                          </h4>
                          <p
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-600"
                            }`}
                          >
                            Full TypeScript support with type safety and
                            autocompletion
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-2 w-2 bg-[#67c970] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4
                            className={`font-semibold ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Zero Dependencies
                          </h4>
                          <p
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-600"
                            }`}
                          >
                            Lightweight with no external dependencies to bloat
                            your bundle
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Support */}
            <motion.div variants={fadeInUp}>
              <Card
                className={`${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-2xl ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Support & Contributing
                  </CardTitle>
                  <CardDescription>
                    Get help and contribute to the project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4
                      className={`font-semibold mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Found a bug or have a feature request?
                    </h4>
                    <p
                      className={`text-sm mb-3 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      We'd love to hear from you! Please open an issue on our
                      GitHub repository.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className={`${
                        theme === "dark"
                          ? "border-white/20 text-white bg-white/5 hover:bg-white/10"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Link
                        href="https://github.com/aurorasoftwarelabs/aurora-seo/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open an Issue
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div>
                    <h4
                      className={`font-semibold mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Want to contribute?
                    </h4>
                    <p
                      className={`text-sm mb-3 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Contributions are welcome! Check out our contributing
                      guidelines and submit a pull request.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className={`${
                        theme === "dark"
                          ? "border-white/20 text-white bg-white/5 hover:bg-white/10"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Link
                        href="https://github.com/aurorasoftwarelabs/aurora-seo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on GitHub
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
