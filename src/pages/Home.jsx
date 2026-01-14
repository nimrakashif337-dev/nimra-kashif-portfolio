
import heroImg from "../assets/hero-jewelry.jfif";
import goldNecklaceImg from "../assets/gold-necklace.jfif";
import diamondRingImg from "../assets/diamond-ring.jfif";
import luxuryBraceletImg from "../assets/luxury-bracelet.jfif";

export default function Home() {
  const featuredItems = [
    {
      title: "Gold Necklace",
      img: goldNecklaceImg,
    },
    {
      title: "Diamond Ring",
      img: diamondRingImg,
    },
    {
      title: "Luxury Bracelet",
      img: luxuryBraceletImg,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-24">

      {/* HERO */}
      <section className="px-8 md:px-20 pt-4 pb-12 grid md:grid-cols-2 gap-10 items-center">
        <div>

          <p className="uppercase text-sm tracking-widest text-[#d4af37] mb-3">
            COLLTECTION 2026
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-4">
            <span className="text-[#d4af37]">RoseGems </span>  <br />
            Jewelry Collection
          </h1>

          <p className="text-gray-300 max-w-xl mb-8">
            Discover timeless handcrafted jewelry designed to elevate your everyday elegance. Each piece is carefully crafted to bring luxury, beauty, and confidence to your style.
            <span className="text-[#d4af37]"> Get special price this week</span>
          </p>

          <button className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Read More
          </button>




        </div>

        <img
          src={heroImg}
          alt="Hero Jewelry"
          className="rounded-xl w-full"
        />
      </section>

      {/* FEATURED */}
      <section className="px-8 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Featured <span className="text-[#d4af37]">Jewelry</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl p-6 hover:-translate-y-3 transition duration-500"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <h3 className="text-xl text-[#d4af37] font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-2">
                Premium handcrafted luxury jewelry
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
































