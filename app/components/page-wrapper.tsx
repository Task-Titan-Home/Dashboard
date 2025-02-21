"use client";
import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the interface for PageWrapper props
interface PageWrapperProps {
  children: ReactNode;
  delay?: number; // Make delay prop optional
}

// Define the PageWrapper component
const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  delay = 0.25,
}) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay }} // Use the delay prop here
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default PageWrapper;
