import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import NextLink from "next/link";
export default function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black/50 backdrop-blur-sm text-white border-b border-gray-800/50" // Enhanced dark styling with backdrop blur
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-white text-lg md:text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Task Titan</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6 justify-center">
        <NavbarItem>
          <Link
            href="#features"
            className="text-gray-200 hover:text-white transition-colors duration-200 font-medium"
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#testimonials"
            className="text-gray-200 hover:text-white transition-colors duration-200 font-medium"
          >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#integrations"
            className="text-gray-200 hover:text-white transition-colors duration-200 font-medium"
          >
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <NextLink href="pages/auth/login" passHref>
            <Button className="bg-transparent text-gray-200 hover:text-white text-lg border border-transparent hover:border-gray-600 transition-all duration-200">Login</Button>
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="pages/auth/signup" passHref>
            <Button className="bg-neutral-900 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold px-6 rounded-lg transition-all duration-200">
              Sign Up
            </Button>
          </NextLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-black/90 backdrop-blur-sm border-r border-gray-800">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full text-lg font-medium transition-colors duration-200 ${
                index === menuItems.length - 1
                  ? "text-red-400 hover:text-red-300"
                  : "text-gray-200 hover:text-white"
              }`}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
