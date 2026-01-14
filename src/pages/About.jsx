
import ringImg from "../assets/ring.jfif";
import necklaceImg from "../assets/necklace.jfif";
import bridalImg from "../assets/bridal.jfif";
import earringsImg from "../assets/earrings.jfif";


export default function About() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            About <span className="text-[#d4af37]">Our Jewelry</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Luxury crafted with precision, elegance, and timeless beauty.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl font-serif mb-6">
              Our Story
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Jewelry is not just fashion — it’s a reflection of confidence,
              love, and heritage. Every piece we design tells a story of
              craftsmanship and passion.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From minimal everyday elegance to luxurious bridal sets, our
              designs are made to last forever.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#111] p-10 rounded-2xl border border-white/10 shadow-xl">
            <h3 className="text-3xl font-serif mb-6 text-[#d4af37]">
              Why Choose Us
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>✨ Premium Handcrafted Jewelry</li>
              <li>✨ Elegant & Timeless Designs</li>
              <li>✨ Perfect for Every Occasion</li>
              <li>✨ Trusted Quality Finish</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-12">
            Categories
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* CARD */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <img
                src={ringImg}
                alt="Rings"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-serif tracking-wide">
                  Rings
                </h3>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <img
                src={necklaceImg}
                alt="Necklaces"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-serif tracking-wide">
                  Necklaces
                </h3>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <img
                src={bridalImg}
                alt="Bridal Sets"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-serif tracking-wide">
                  Bridal Sets
                </h3>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <img
                src={earringsImg}
                alt="Earrings"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-serif tracking-wide">
                  Earrings
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
























// const About = () => {
//   return (
//     <div className="min-h-screen bg-black text-white px-6 py-16 md:px-20">

//       {/* PROFILE IMAGE
//       <div className="flex justify-center mb-10">
//         <motion.img
//           src={profile}
//           alt="Profile"
//           className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-purple-600 shadow-lg"
//           initial={{ opacity: 0, scale: 0.7 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//         />
//       </div> */}

//       {/* CONTENT */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-3xl mx-auto text-center"
//       >
//         <h1 className="text-4xl font-bold text-purple-500 mb-4">About Me</h1>

//         <p className="text-gray-300 leading-relaxed text-lg">
//           I am a Frontend Developer skilled in designing modern, clean, and
//           user-friendly interfaces. I love building websites that are fast,
//           attractive, and responsive. I always focus on writing clean code
//           and creating beautiful UI with perfect animations.
//         </p>
//       </motion.div>

//       {/* SKILLS SECTION */}
//       <div className="max-w-3xl mx-auto mt-14">
//         <h2 className="text-3xl font-semibold text-purple-400 text-center mb-6">
//           What Skills I Have
//         </h2>

//         <div className="flex justify-center gap-10 text-5xl text-purple-500">
//           <FaHtml5 className="hover:text-purple-300 transition" />
//           <FaCss3Alt className="hover:text-purple-300 transition" />
//           <FaJs className="hover:text-purple-300 transition" />
//           <FaReact className="hover:text-purple-300 transition" />
//         </div>
//       </div>

//       {/* GOALS */}
//       <div className="max-w-3xl mx-auto mt-16 text-center">
//         <h2 className="text-3xl font-semibold text-purple-400 mb-4">
//           My Goal
//         </h2>

//         <p className="text-gray-300 text-lg leading-relaxed">
//           My goal is to become a professional frontend developer, mastering
//           React.js, UI/UX, and advanced animations. I want to build real-world
//           projects, improve daily, and grow into a full-stack developer in future.
//         </p>
//       </div>

//       {/* BUTTONS */}
//       <div className="flex justify-center gap-6 mt-12">
//         <a
//           href="/contact"
//           className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold shadow-md"
//         >
//           Contact Me
//         </a>

//         <a
//           href="/cv.pdf"
//           download
//           className="px-6 py-3 border border-purple-500 text-purple-300 rounded-lg hover:bg-purple-600/20 transition"
//         >
//           Download CV
//         </a>



//       </div>
//     </div >
//   );
// };

// export default About;


































// export default function About() {
//   return (





//     <div className="min-h-screen bg-black text-white flex items-center justify-center p-10">
//       <div className="max-w-4xl bg-purple-700/20 p-10 rounded-2xl flex gap-10 items-center">
//         <img
//           src={profileImg}
//           alt="Profile"
//           className="w-52 h-52 object-cover rounded-xl shadow-lg"
//         />



//         {/* TEXT SECTION */}
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-purple-300 drop-shadow-lg">
//             About Me
//           </h1>

//           <p className="text-lg leading-relaxed text-gray-300">
//             Hi! I'm <span className="text-purple-300 font-semibold">Nimra Kashif</span>,
//             a passionate Frontend Developer who loves building beautiful,
//             responsive, and user‑friendly web interfaces. I work with
//             <span className="text-purple-300 font-semibold"> HTML, CSS, JavaScript, React.js, and TailwindCSS</span>.
//           </p>

//           <p className="text-lg leading-relaxed text-gray-300">
//             I'm currently seeking an <span className="font-semibold text-purple-300">internship</span>
//             where I can apply my skills, learn from professionals, and grow as a
//             developer.
//           </p>

//           <div className="flex gap-4 pt-4">
//             <Link to="/contact">
//               <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition shadow-lg font-semibold">
//                 Contact Me
//               </button>
//             </Link>





//             <button className="px-6 py-3 rounded-xl border border-purple-400 hover:bg-purple-500/20 transition font-semibold">
//               Download CV
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







