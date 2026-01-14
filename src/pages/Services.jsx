import React from "react";

const services = [
  {
    title: "Custom Jewelry Design",
    desc: "We design exclusive, handcrafted jewelry tailored to your personality, taste, and special moments.",
    icon: "💎",
  },
  {
    title: "Ring Resizing",
    desc: "Our experts carefully resize your rings ensuring perfect fitting without affecting the original design.",
    icon: "💍",
  },
  {
    title: "Jewelry Cleaning",
    desc: "Professional deep cleaning service that restores shine, brilliance, and elegance to your jewelry.",
    icon: "✨",
  },
  {
    title: "Luxury Packaging",
    desc: "Premium packaging designed to enhance the luxury feel and make every gift unforgettable.",
    icon: "🎁",
  },
  {
    title: "Stone Replacement",
    desc: "High-quality stone replacement using expert craftsmanship and precision detailing.",
    icon: "🔮",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white px-6 md:px-24 py-28 scroll-mt-28"
    >
      {/* HEADER */}
      <div className="max-w-4xl mb-20">
        <p className="text-[#d4af37] uppercase tracking-widest mb-3">
          What We Offer
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Luxury Jewelry <br />
          Services Crafted With Precision
        </h2>
        <p className="text-gray-400 mt-6 leading-relaxed">
          At RoséGems, every service is handled with attention to detail,
          elegance, and craftsmanship — ensuring timeless beauty in every piece.
        </p>
      </div>

      {/* SERVICES LIST (ALTERNATING LAYOUT) */}
      <div className="space-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } gap-10 items-start`}
          >
            {/* ICON */}
            <div className="text-5xl text-[#d4af37] shrink-0">
              {service.icon}
            </div>

            {/* CONTENT */}
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-6 h-[1px] w-24 bg-[#d4af37]"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}





