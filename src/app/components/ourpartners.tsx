"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

// Example logo imports - replace with your brand logo images
import logo1 from "./logos/logo1.png";
import logo2 from "./logos/logo2.png";
import logo3 from "./logos/logo3.png";
import logo4 from "./logos/logo4.png";
import logo5 from "./logos/logo5.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo1, logo2]; // Repeat for smooth loop

export default function OurPartners() {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-gradient-to-r from-black via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-white mb-8">
          Our Partners
        </h2>

        <div className="rounded-2xl overflow-hidden border border-white/40 bg-white/10 backdrop-blur-md py-4 shadow-inner">
          <Marquee gradient={false} speed={40}>
            {logos.map((logo, idx) => (
              <div key={idx} className="mx-6 flex items-center">
                <Image
                  src={logo}
                  alt={`Partner logo ${idx + 1}`}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
