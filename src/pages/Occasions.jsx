import React from "react";

// IMAGES
import wedding from "../assets/bridal.jfif";
import ring from "../assets/diamond-ring.jfif";
import necklace from "../assets/gold-necklace.jfif";
import bracelet from "../assets/luxury-bracelet.jfif";
import earrings from "../assets/earrings.jfif";
import gift from "../assets/ring.jfif";

export default function Occasions() {
  const occasions = [
    {
      title: "Wedding Celebrations",
      desc:
        "Celebrate your most precious moments with exquisitely crafted bridal jewelry. Our wedding collections are designed to enhance elegance, tradition, and timeless beauty.",
      img: wedding,
    },
    {
      title: "Engagement Moments",
      desc:
        "Mark the beginning of forever with our stunning engagement rings. Each piece symbolizes love, commitment, and a promise that lasts a lifetime.",
      img: ring,
    },
    {
      title: "Anniversary Gifts",
      desc:
        "Celebrate milestones of love with meaningful anniversary jewelry. Thoughtfully designed to reflect memories, emotions, and enduring romance.",
      img: necklace,
    },
    {
      title: "Festive Occasions",
      desc:
        "Add sparkle to every celebration with luxurious festive jewelry. Perfect for cultural events, parties, and joyful gatherings.",
      img: bracelet,
    },
    {
      title: "Everyday Elegance",
      desc:
        "Minimal yet refined jewelry designed for everyday wear. Elevate your daily style with subtle luxury and unmatched comfort.",
      img: earrings,
    },
    {
      title: "Luxury Gifting",
      desc:
        "A timeless gift for someone special. Our curated gift collections express love, appreciation, and unforgettable emotions.",
      img: gift,
    },
  ];

  return (
    <section
      id="occasions"
      className="bg-black text-white px-8 md:px-20 py-24"
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Jewelry for Every <span className="text-[#d4af37]">Occasion</span>
        </h2>
        <p className="text-gray-400 leading-relaxed text-lg">
          Every moment deserves a touch of elegance. Our occasion-based jewelry
          collections are thoughtfully curated to complement life’s most
          meaningful celebrations.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {occasions.map((item, index) => (
          <div
            key={index}
            className="bg-black border border-gray-800 rounded-2xl overflow-hidden hover:-translate-y-3 transition duration-500"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#d4af37] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="text-center mt-24">
        <button className="px-10 py-3 border border-[#d4af37] text-[#d4af37] rounded-full hover:bg-[#d4af37] hover:text-black transition duration-500">
          Explore Occasion Collections
        </button>
      </div>
    </section>
  );
}


























// export default function Skills() {
//   const skills = [
//     { name: "HTML", level: 95 },
//     { name: "CSS", level: 90 },
//     { name: "JavaScript", level: 85 },
//     { name: "React", level: 88 },
//     { name: "Tailwind CSS", level: 92 },
//     { name: "Git & GitHub", level: 80 },
//     { name: "UI Design", level: 78 },
//     { name: "Responsive Design", level: 90 },
//   ];

//   return (
//     <section
//       id="skills"
//       className="min-h-screen bg-black text-white px-6 py-20"
//     >
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div className="animate-fadeInUp">
//           <p className="text-purple-400 tracking-widest uppercase mb-3">
//             My Skills
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//             Let’s Explore <br />
//             <span className="text-purple-500">Skills & Experience</span>
//           </h2>

//           <p className="text-gray-400 mb-10 max-w-lg">
//             I specialize in frontend development with a strong focus on
//             modern UI design, performance, and responsive layouts.
//           </p>

//           <a
//             href="#projects"
//             className="inline-block bg-purple-600 hover:bg-purple-700 transition-all px-7 py-3 rounded-lg font-medium shadow-lg hover:shadow-purple-500/30"
//           >
//             View Projects
//           </a>
//         </div>

//         {/* RIGHT SKILLS GRID */}
//         <div className="grid grid-cols-2 gap-6 animate-fadeInRight">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-[#111] border border-purple-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300"
//             >
//               <h3 className="text-lg font-semibold mb-4 text-purple-400">
//                 {skill.name}
//               </h3>

//               <div className="w-full bg-black rounded-full h-2 mb-3 overflow-hidden">
//                 <div
//                   className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full animate-skillBar"
//                   style={{ width: `${skill.level}%` }}
//                 />
//               </div>

//               <p className="text-sm text-gray-400">{skill.level}%</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }



















// export default function Skills() {
//   return <h2>Skills Page</h2>;
// }
// export default function Skills() {
//   return (
//     <div className="min-h-screen bg-black text-white p-10">
//       <h1 className="text-4xl font-bold text-purple-400 mb-8">Skills</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
//         {/* Skill Card */}
//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl hover:scale-105 transition">
//           <h2 className="text-xl font-semibold text-purple-300">HTML</h2>
//           <p className="text-gray-400 mt-2">Semantic structure, clean layouts</p>
//         </div>

//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl hover:scale-105 transition">
//           <h2 className="text-xl font-semibold text-purple-300">CSS</h2>
//           <p className="text-gray-400 mt-2">Flexbox, Grid, Responsive UI</p>
//         </div>

//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl hover:scale-105 transition">
//           <h2 className="text-xl font-semibold text-purple-300">JavaScript</h2>
//           <p className="text-gray-400 mt-2">Logic building, DOM handling</p>
//         </div>

//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl hover:scale-105 transition">
//           <h2 className="text-xl font-semibold text-purple-300">React.js</h2>
//           <p className="text-gray-400 mt-2">Components, props, hooks</p>
//         </div>

//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl hover:scale-105 transition">
//           <h2 className="text-xl font-semibold text-purple-300">TailwindCSS</h2>
//           <p className="text-gray-400 mt-2">Modern UI, animations, utility classes</p>
//         </div>

//         {/* <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl hover:scale-105 transition">
//           <h2 className="text-xl font-semibold text-purple-300">Git & GitHub</h2>
//           <p className="text-gray-400 mt-2">Version control, repo handling</p>
//         </div> */}
//       </div>
//     </div>
//   );
// }