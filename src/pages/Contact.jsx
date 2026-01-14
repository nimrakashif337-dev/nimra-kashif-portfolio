
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0b0b0b] text-white px-6 md:px-24 py-28 scroll-mt-28"
    >
      {/* HEADER */}
      <div className="max-w-4xl mb-24">
        <p className="text-[#d4af37] uppercase tracking-widest mb-4">
          Get In Touch
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Let’s Create Something <br /> Truly Timeless
        </h2>

        <p className="text-gray-400 mt-6 leading-relaxed">
          Every jewelry piece tells a story. Whether it’s a special occasion,
          a personal milestone, or a custom design — RoséGems is here to craft
          elegance that lasts forever.
        </p>
      </div>

      {/* CONTACT EXPERIENCE */}
      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Visit Our Studio
          </h3>

          <p className="text-gray-400 leading-relaxed mb-8">
            Step into our world of luxury jewelry where craftsmanship meets
            elegance. Experience personalized consultations and premium service
            in a refined, welcoming environment.
          </p>

          <div className="space-y-6 text-gray-300">
            <p>
              <span className="text-[#d4af37] font-medium">📍 Location:</span>{" "}
              RoséGems Jewelry Studio
            </p>
            <p>
              <span className="text-[#d4af37] font-medium">🕰️ Studio Hours:</span>{" "}
              Monday – Saturday | 11:00 AM – 8:00 PM
            </p>
            <p>
              <span className="text-[#d4af37] font-medium">✨ Experience:</span>{" "}
              Private consultations & luxury fittings available
            </p>
          </div>
        </div>

        {/* RIGHT QUOTE / CTA */}
        <div className="bg-black border border-[#2a2a2a] p-10 rounded-2xl">
          <p className="text-2xl leading-relaxed italic text-gray-300 mb-10">
            “Jewelry is not just an accessory — it’s an expression of love,
            confidence, and individuality.”
          </p>

          <button className="bg-[#d4af37] text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
            Book a Private Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
