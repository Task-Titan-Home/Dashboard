"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import PageWrapper from "./components/page-wrapper";
import Features from "./components/feautres"; // corrected import statement
import Showcase from "./components/showcase";
import Footer from "./components/foot";
import { Container } from "./components/container";
import { Button } from "@nextui-org/react";
import NextLink from "next/link";
import { SmoothScrollHero } from "./components/smoothScrollHero";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "../app/components/animations/variants";
import { useInViewAnimation } from "../app/components/hooks/useInViewAnimation";
import { HeroImage } from "./components/hero-image";
import { VelocityText } from "./components/VelocityText";

export default function Home() {
  // Animation hooks for different sections
  const heroControls = useInViewAnimation();
  const featuresControls = useInViewAnimation();
  const showcaseControls = useInViewAnimation();
  const aboutControls = useInViewAnimation();
  const howItWorksControls = useInViewAnimation();
  const ctaControls = useInViewAnimation();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <Navbar />
      <PageWrapper delay={0.5}>
        {/* Hero Section */}
        <motion.div
          className="container flex-col mt-32"
          ref={heroControls.ref}
          initial="hidden"
          animate={heroControls.controls}
          variants={fadeInUp}
        >
          <h1 className="md:text-7xl text-4xl font-bold text-center leading-tight md:leading-tight gradient-text">
            YOUR ULTIMATE
            <br />
            TASK-SLAYING
            <br />
            SIDEKICK!
          </h1>
          <div className="flex justify-center mt-8">
            <NextLink href="pages/auth/signup" passHref>
              <Button
                size="lg"
                className="mt-8 center bg-customGrey3 text-white py-4 px-6 md:py-8 md:px-12"
              >
                Get Started
              </Button>
            </NextLink>
          </div>
        </motion.div>
      </PageWrapper>

      {/* Hero Image Section */}
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="md:px-20">
          <HeroImage />
        </Container>
      </div>

      {/* About Section */}
      <PageWrapper delay={1}>
        <motion.div
          className="about-section container flex flex-col items-center text-center mt-32"
          ref={aboutControls.ref}
          initial="hidden"
          animate={aboutControls.controls}
          variants={fadeInLeft}
        >
          <h2 className="text-3xl font-semibold mb-4">About Our Product</h2>
          <p className="text-lg text-gray-600 max-w-xl">
            We offer the ultimate task management solution that helps you stay
            organized and productive. Whether you’re managing personal tasks or
            team projects, we’ve got you covered.
          </p>
        </motion.div>
      </PageWrapper>
      <VelocityText />
      {/* Features Section */}
      <PageWrapper delay={1.2}>
        <motion.div
          className="features-section"
          ref={featuresControls.ref}
          initial="hidden"
          animate={featuresControls.controls}
          variants={fadeInRight}
        >
          <Features />
        </motion.div>
      </PageWrapper>
            <SmoothScrollHero />


      {/* How It Works Section */}
      <PageWrapper delay={1.4}>
        <motion.div
          className="how-it-works-section container flex flex-col items-center text-center mt-32"
          ref={howItWorksControls.ref}
          initial="hidden"
          animate={howItWorksControls.controls}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-xl">
            Simple and intuitive: Just create a task, set your deadlines, assign
            them to your team, and track progress. Stay on top of everything in
            real-time!
          </p>
        </motion.div>
      </PageWrapper>

      {/* Showcase Section */}
      <PageWrapper delay={1.6}>
        <motion.div
          className="showcase-section"
          ref={showcaseControls.ref}
          initial="hidden"
          animate={showcaseControls.controls}
          variants={fadeInUp}
        >
          <Showcase />
        </motion.div>
      </PageWrapper>

      {/* Call-to-Action Section */}
      <PageWrapper delay={1.8}>
        <motion.div
          className="cta-section container flex flex-col items-center text-center mt-32 mb-20"
          ref={ctaControls.ref}
          initial="hidden"
          animate={ctaControls.controls}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 max-w-xl mb-6">
            Sign up today and see how we can help you manage your tasks more
            efficiently!
          </p>
          <NextLink href="pages/auth/signup" passHref>
            <Button
              size="lg"
              className="center bg-customGrey3 text-white py-4 px-6 md:py-8 md:px-12"
            >
              Get Started
            </Button>
          </NextLink>
        </motion.div>
      </PageWrapper>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
