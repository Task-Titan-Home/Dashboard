// File: sidebar.styles.ts
import { tv } from "@nextui-org/react";

/**
 * Main sidebar wrapper.
 * - By default, it’s off-screen (translate-x-full)
 * - If "collapsed" is true, it slides in.
 */
export const SidebarWrapper = tv({
  base: [
    "fixed",
    "left-0",
    "top-0",
    "h-screen",
    "w-64",
    "z-[202]",
    "bg-neutral-950", // Sidebar background
    "border-r",
    "border-neutral-800",
    "transition-transform",
    "duration-300",
    "-translate-x-full",
    "md:translate-x-0", // On md+ screens, always shown
    "md:static",
    "md:w-64",
    "overflow-y-auto",
    "flex",
    "flex-col",
    "justify-between",
    "py-4",
    "shadow-lg", // Slight shadow for a 'raised' feel
  ].join(" "),
  variants: {
    collapsed: {
      true: "translate-x-0", // Slide in
    },
  },
});

/**
 * Overlay for mobile devices or when collapsed is triggered.
 * - Dark overlay to highlight the sidebar when open
 */
export const Overlay = tv({
  base: [
    "fixed",
    "inset-0",
    "bg-black/60",
    "z-[201]",
    "md:hidden", // Hide overlay on medium+ screens
    "transition-opacity",
  ].join(" "),
});

/**
 * Header area (brand / logo).
 * - We use a subtle gradient to make it pop.
 */
export const Header = tv({
  base: [
    "relative",
    "flex",
    "items-center",
    "w-full",
    "px-4",
    "py-3",
    "bg-gradient-to-r",
    "from-indigo-600",
    "to-purple-600",
    "shadow-sm",
  ].join(" "),
});

/**
 * Body area for menu items, scrollable if large.
 */
export const Body = tv({
  base: [
    "flex-1",
    "flex",
    "flex-col",
    "gap-6",
    "p-4",
    "overflow-y-auto",
    "scrollbar-thin",
    "scrollbar-track-neutral-900",
    "scrollbar-thumb-neutral-700",
  ].join(" "),
});

/**
 * Footer area for quick-access icons (settings, profile, etc.).
 */
export const Footer = tv({
  base: [
    "border-t",
    "border-neutral-800",
    "px-4",
    "py-3",
    "flex",
    "gap-5",
    "items-center",
    "justify-center",
  ].join(" "),
});

/**
 * Combine them into a single export object.
 */
export const Sidebar = Object.assign(SidebarWrapper, {
  Overlay,
  Header,
  Body,
  Footer,
});
