"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Corrected import

export default function VerifyMagicLink() {
  const [tokenParam, setTokenParam] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Correct approach to parse query parameters in Next.js client-side
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);
      const linkToken = queryParams.get("link"); // Assuming 'link' is the query parameter
      if (linkToken) {
        setTokenParam(linkToken);
        verifyToken(linkToken); // Pass the token as an argument
      }
    }
  }, []);

  const verifyToken = async (token: string) => {
    try {
      const response = await fetch("http://localhost:3001/verify-magic-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ link: token }),
      });
      if (response.ok) {
        const data = await response.json(); // Assuming the response includes the token or relevant data
        localStorage.setItem("Token", data.token); // Example: storing the token from response

        // Example: Setting a cookie from the client side (consider server-side for HttpOnly)
        document.cookie = `access=${data.token}; path=/; secure`; // Add `;max-age=3600` or `;expires=Date` as needed

        console.log("Token verified successfully");
        router.push("/pages/dashboard");
      } else {
        const errorMsg = await response.text();
        alert(
          `Token is invalid or expired. Please try logging in again. Error: ${errorMsg}`
        );
      }
    } catch (error) {
      console.error("Failed to verify token:", error);
      alert("An error occurred while verifying the token.");
    }
  };

  return <div>Verifying your account...</div>;
}
