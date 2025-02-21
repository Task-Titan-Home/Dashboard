import { Input } from "@nextui-org/react";

export default function input() {
  const variants = ["flat", "bordered", "underlined", "faded"];

  return (
    <main className=" min-h-screen flex-col items-center">
        {variants.map((variant) => (
          <div
            key={variant}
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
          >  

          
            <Input type="email" variant={variant as "flat"} label="Email" />
            <Input
              type="email"
              variant={variant as "faded"}
              label="Email"
              placeholder="Enter your email"
            />
          </div>
        ))}
      );
    </main>
  );
}
