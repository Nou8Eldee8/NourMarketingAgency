"use client";

import Image from "next/image";
import Header from "./Header";
import Button from "./Button";
import bgImage from "./bg.jpg"; // Ensure the path is correct

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Fixed Header */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center mt-40">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          We Build Better Brands Online
        </h1>

        <p className="text-lg text-white max-w-xl mb-6">
          We help you grow your digital presence with stunning content and powerful strategy.
        </p>

        <Button>See Our Portfolio</Button>
      </div>
    </section>
  );
}
