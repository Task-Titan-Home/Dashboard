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
      className="bg-transparent text-white" // Set background color to transparent
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit text-lg md:2xl">Task Titan</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 justify-center text-white">
        <NavbarItem>
          <Link
            href="#"
            style={{ color: "inherit" }} // This makes the link inherit the color from its parent
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="#"
            style={{ color: "inherit" }} // This makes the link inherit the color from its parent
          >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            style={{ color: "inherit" }} // This makes the link inherit the color from its parent
          >
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <NextLink href="pages/auth/login" passHref>
            <Button className="bg-transparent text-white text-lg">Login</Button>
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="pages/auth/signup" passHref>
            <Button className="bg-transparent text-white text-lg">
              Sign Up
            </Button>
          </NextLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 4
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
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
