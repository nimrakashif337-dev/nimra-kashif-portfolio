import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Gallery from "./pages/Gallery";
import Occasions from "./pages/Occasions";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
   
      <>
        <Header />

        <main className="pt-1 bg-black">
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="collection"><Collection /></section>
          <section id="gallery"><Gallery /></section>
          <section id="occasions"><Occasions /></section>
          <section id="services"><Services /></section>
          <section id="contact"><Contact /></section>
          <Footer />
        </main>
      </>

    
  );
}

export default App;







// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Collection from "./pages/Collection";




// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <>
//       <Header />

//       <section id="home">
//         <Home />
//       </section>

//       <section id="about">
//         <About />
//       </section>

//       <section id="collection">
//         <Collection />
//       </section>

//       <section id="gallery">
//         <Gallery />
//       </section>

//       <section id="occasion">
//         <Occasion />
//       </section>

//       <section id="service">
//         <Service />
//       </section>

//       <section id="contact">
//         <Contact />
//       </section>

//       {/* ✅ FOOTER YAHAN HOGA */}
//       <Footer />
//     </>
//   );
// }

// export default App;
























// import { Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// import Home from "./pages/Home";
// // import About from "./pages/about";
// import About from "./pages/About";
// import Project from "./pages/Project";
// import Education from "./pages/Education";
// import Contact from "./pages/Contact";
// import Skills from "./pages/Skills";
// import Experience from "./pages/experience";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//     <Header />
//       {/* Routing */}
//       <Routes>
//         {/* <Route path="/" element={<Home />} /> */}
//         <Route path="/" element={ <Home/>} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/education" element={<Education />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/skills" element={<Skills />} />
//       </Routes>
//       <Footer />
//     </>
//   )
// }

// export default App




