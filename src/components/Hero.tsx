import React, { useEffect, useRef, useState } from "react";
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
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Delay starting the video load until the page has finished initial works
    const startLoading = () => {
      // small delay so image/LCP gets priority
      const t = setTimeout(() => setShouldLoadVideo(true), 600);
      return () => clearTimeout(t);
    };

    if (document.readyState === "complete") {
      const cleanup = startLoading();
      return cleanup;
    }

    window.addEventListener("load", startLoading);
    return () => window.removeEventListener("load", startLoading);
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo || !videoRef.current) return;

    const video = videoRef.current;

    const handleLoadedData = () => {
      // mark ready so we can fade the video in
      setVideoReady(true);
      // Try to play (in case autoplay was blocked earlier)
      video.play().catch(() => {
        // Wait for user interaction if autoplay blocked
        const playOnInteraction = () => {
          video.play().catch(() => {});
          document.removeEventListener("click", playOnInteraction);
          document.removeEventListener("touchstart", playOnInteraction);
        };
        document.addEventListener("click", playOnInteraction);
        document.addEventListener("touchstart", playOnInteraction);
      });

      // After the fade completes remove the image element to free memory
      const removeTimer = setTimeout(() => setShowImage(false), 750);
      return () => clearTimeout(removeTimer);
    };

    const handleError = () => {
      // If video fails, keep the image (videoReady stays false)
      setVideoReady(false);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
    };
  }, [shouldLoadVideo]);

  return (
    <div>
      <section className="min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          {/* Render the image while showImage is true */}
          {showImage && (
            <Image
              src="/aurora-landscape.jpg"
              alt="Aurora landscape"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={85}
            />
          )}

          {/* Video - only added to the DOM when shouldLoadVideo is true to avoid blocking LCP */}
          {shouldLoadVideo && (
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                videoReady ? "opacity-100" : "opacity-0"
              }`}
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/aurora_infinite_loop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

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
