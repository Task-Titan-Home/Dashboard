"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isLoggedIn, isAccessTokenExpired } from "./auth"; // Import your authentication functions

const withAuth = (WrappedComponent: React.ComponentType) => {
  const Wrapper = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        // Check if the user is logged in
        if (!isLoggedIn()) {
          // If not logged in, redirect to the login page
          router.push("/login");
          return;
        }

        // Check if the access token is expired
        const token = localStorage.getItem("access");
      };

      checkAuth();
    }, []);

    if (!isLoggedIn()) {
      // If not logged in, don't render the component
      return null;
    }

    // If logged in, render the wrapped component
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
