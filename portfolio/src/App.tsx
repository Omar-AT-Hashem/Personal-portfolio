import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />

      <SocialLinks />
    </>
  );
}

export default App;
