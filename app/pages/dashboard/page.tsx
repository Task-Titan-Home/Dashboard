"use client";

import type { NextPage } from "next";
import { Content } from "@/app/components/home/content";
import withAuth from "@/app/components/Auth/is-loggedin";

// Your page component
const Home: NextPage = () => {
  return <Content />;
};

export default withAuth(Home);
