export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Royal Jewelry
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Luxury handcrafted jewelry designed for elegance, beauty
            and timeless moments. Made with love & precision.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Collection</li>
            <li>Gallery</li>
            <li>Occasions</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* TAGLINE */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Promise
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Premium quality materials, elegant designs and
            unforgettable craftsmanship for every special occasion.
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © 2026 Royal Jewelry. All rights reserved.
      </div>
    </footer>
  );
}



// import { FaGithub, FaLinkedin } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="bg-black text-gray-400 py-10">
//       <div className="max-w-7xl mx-auto px-4 text-center">

//         {/* Divider */}
//         <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6" />

//         {/* Social Icons */}
//         <div className="flex justify-center gap-6 mb-4">
          
//           {/* GitHub */}
//           <a
//             href="https://github.com/nimrakashif337-dev"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 hover:text-white transition transform hover:scale-110"
//           >
//             <FaGithub size={22} />
//           </a>

//           {/* LinkedIn */}
//           <a
//             href="https://www.linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 hover:text-white transition transform hover:scale-110"
//           >
//             <FaLinkedin size={22} />
//           </a>

//         </div>

//         {/* Copyright */}
//         <p className="text-sm">
//           © {new Date().getFullYear()} Nimra Kashif. All rights reserved.
//         </p>

//         <p className="text-xs mt-1 text-gray-500">
//           Built with React & Tailwind CSS
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;









// import { FaGithub, FaLinkedinIn, FaHeart } from "react-icons/fa";


// function Footer() {
//   return (

    

//     <footer className="bg-[#0b0b0b] border-t border-purple-500/20 py-10 mt-20">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

//         {/* Left Text */}
//         <div>
//           <p className="text-gray-400 text-sm">
//             © {new Date().getFullYear()} MyPortfolio. All rights reserved.
//           </p>

//           <p className="mt-2 text-gray-500 text-xs flex items-center justify-center md:justify-start gap-1">
//             Designed with <FaHeart className="text-purple-500" /> using React & Tailwind CSS
//           </p>

//           <p className="mt-1 text-gray-500 text-xs">
//             nimrakashif337@gmail.com
//           </p>
//         </div>

//         {/* Social Icons */}
//         <div className="flex gap-5 text-xl">
//           <a
//             href="https://github.com/nimrakashif337-dev"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 hover:text-purple-500 transition"
//           >
//             <FaGithub />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/nimrakashif337-dev/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 hover:text-purple-500 transition"
//           >
//             <FaLinkedinIn />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;



















// function Footer() {
//   return (
//     <footer className="bg-purple-900 text-gray-300 py-6">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <p className="text-sm">
//           © {new Date().getFullYear()} MyPortfolio. All rights reserved🖇️.
//         </p>
//         <p className="mt-1 text-white text-xs">
//           {/* Designed with ❤️ using React & Tailwind CSS */}
//           @nimrakashif337@gmail.com 📞
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
