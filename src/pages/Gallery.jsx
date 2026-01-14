import React from "react";

// OLD images
import ring from "../assets/diamond-ring.jfif";
import necklace from "../assets/gold-necklace.jfif";
import bracelet from "../assets/luxury-bracelet.jfif";
import earrings from "../assets/earrings.jfif";
import bridal from "../assets/bridal.jfif";
import ring2 from "../assets/ring.jfif";

// NEW gallery images
import gRing from "../assets/gallery-ring-1.jfif";
import gNecklace from "../assets/gallery-necklace-1.jfif";
import gBracelet from "../assets/gallery-bracelet-1.jfif";
import gEarrings from "../assets/gallery-earrings-1.jpg";
import gBridal from "../assets/gallery-bridal-1.jfif";
import gRing2 from "../assets/gallery-ring-2.jfif";

export default function Gallery() {
  const images = [
    ring,
    necklace,
    bracelet,
    earrings,
    bridal,
    ring2,
    gRing,
    gNecklace,
    gBracelet,
    gEarrings,
    gBridal,
    gRing2,
  ];

  return (
    <section id="gallery" className="bg-black text-white px-8 md:px-20 py-24">

      {/* TEXT / CONTEXT */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-[#d4af37]">Jewelry Gallery</span>
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Discover a refined selection of handcrafted jewelry pieces,
          designed to celebrate elegance, beauty, and timeless luxury.
          Each creation reflects premium artistry and modern sophistication.
        </p>
      </div>

      {/* IMAGES */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-gray-800"
          >
            <img
              src={img}
              alt="jewelry"
              className="w-full h-40 object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="text-center">
        <button className="px-10 py-3 border border-[#d4af37] text-[#d4af37] rounded-full hover:bg-[#d4af37] hover:text-black transition duration-500">
          View Full Collection
        </button>
      </div>

    </section>
  );
}


















// export default function Experience() {
//   return <h2>Experience Page</h2>;
// }
// export default function Experience() {
//   return (
//     <div className="min-h-screen bg-black text-white p-10">
//       <h1 className="text-4xl font-bold text-purple-400 mb-8">Experience</h1>

//       <div className="grid gap-6 max-w-3xl">
//         {/* Card 1 */}
//         <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
//           <h2 className="text-2xl font-semibold text-purple-300">Frontend Developer Intern</h2>
//           <p className="text-sm text-gray-400 mt-1">(Future Internship)</p>
//           <p className="text-gray-300 mt-3">
//             Seeking internship opportunities to build real‑world experience in frontend
//             development using React.js, TailwindCSS, JavaScript, and responsive UI design.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
//           <h2 className="text-2xl font-semibold text-purple-300">Personal Projects</h2>
//           <p className="text-gray-300 mt-3">
//             Developed multiple portfolio projects including UI components, landing pages,
//             and responsive layouts. Gaining experience in styling, animations, state
//             management, and clean code architecture.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
