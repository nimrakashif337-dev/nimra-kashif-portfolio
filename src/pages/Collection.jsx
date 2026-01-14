import ring1 from "../assets/col-ring-1.jfif";
import ring2 from "../assets/col-ring-2.jpg";
import necklace1 from "../assets/col-necklace-1.jfif";
import necklace2 from "../assets/col-necklace-2.jfif";
import bracelet1 from "../assets/col-bracelet-1.jfif";
import earrings1 from "../assets/col-earring-1.jfif";

export default function Collection() {
  const collections = [
    {
      title: "Royal Diamond Ring",
      category: "Rings",
      price: "$2,450",
      img: ring1,
    },
    {
      title: "Luxury Gold Ring",
      category: "Rings",
      price: "$1,980",
      img: ring2,
    },
    {
      title: "Elegant Pearl Necklace",
      category: "Necklaces",
      price: "$3,200",
      img: necklace1,
    },
    {
      title: "Bridal Gold Necklace",
      category: "Necklaces",
      price: "$4,850",
      img: necklace2,
    },
    {
      title: "Classic Gold Bracelet",
      category: "Bracelets",
      price: "$1,750",
      img: bracelet1,
    },
    {
      title: "Diamond Stud Earrings",
      category: "Earrings",
      price: "$1,250",
      img: earrings1,
    },
  ];

  return (
    <section
      id="collection"
      className="bg-black text-white px-8 md:px-24 py-28"
    >
      {/* HEADER */}
      <div className="text-center mb-20">
        <p className="uppercase tracking-widest text-[#d4af37] mb-4">
          Our Exclusive Collection
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Luxury <span className="text-[#d4af37]">Jewelry</span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Explore our premium jewelry collection crafted with elegance,
          precision, and timeless beauty. Each piece reflects luxury
          designed for unforgettable moments.
        </p>
      </div>

      {/* CATEGORY BAR */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {["All", "Rings", "Necklaces", "Bracelets", "Earrings"].map(
          (item) => (
            <button
              key={item}
              className="px-6 py-2 rounded-full border border-gray-700 text-gray-300
                         hover:bg-[#d4af37] hover:text-black transition"
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {collections.map((item, index) => (
          <div
            key={index}
            className="group bg-[#0c0c0c] border border-gray-800 rounded-2xl overflow-hidden
                       hover:-translate-y-4 transition duration-500"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />
              <span className="absolute top-4 left-4 bg-black/70 text-[#d4af37]
                               text-xs px-3 py-1 rounded-full">
                {item.category}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-7 text-center">
              <h3 className="text-xl font-semibold text-[#d4af37] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-3">
                Handcrafted premium jewelry
              </p>
              <p className="text-lg font-bold mb-5">{item.price}</p>

              <button className="w-full py-3 rounded-full border border-[#d4af37]
                                 text-[#d4af37] hover:bg-[#d4af37]
                                 hover:text-black transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


































// export default function Project() {
//   return <h2>Project Page</h2>;
// }


// export default function Project() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
//       <div className="max-w-5xl mx-auto">

//         {/* Heading */}
//         <h1 className="text-4xl font-bold text-purple-400 mb-10 border-b border-purple-500 pb-2">
//           My Projects
//         </h1>

//         {/* Project Grid */}
//         <div className="grid md:grid-cols-2 gap-8">

//           {/* Project 1 */}
//           <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 duration-300">
//             <h2 className="text-2xl font-semibold text-purple-300">
//               Portfolio Website
//             </h2>
//             <p className="text-gray-300 mt-2">
//               A responsive personal portfolio built using React and TailwindCSS.
//             </p>
//             <button className="mt-4 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
//               View Project
//             </button>
//           </div>

//           {/* Project 2 */}
//           <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 duration-300">
//             <h2 className="text-2xl font-semibold text-purple-300">
//               Login Form UI
//             </h2>
//             <p className="text-gray-300 mt-2">
//               Beautiful login page with validation built using HTML, CSS and JavaScript.
//             </p>
//             <button className="mt-4 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
//               View Project
//             </button>
//           </div>

         
        

//         </div>
//       </div>
//     </div>
//   );
// }
