// components/LenisWrapper.tsx
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Adjust smoothness of scrolling
      smooth: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup when component is unmounted
    };
  }, []);

  return <>{children}</>;
};

export default LenisWrapper;
