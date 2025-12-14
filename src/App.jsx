import { BrowserRouter } from "react-router";
import Navbar from "./components/NavBar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import Projects from "./sections/Projects";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <FeatureCards />
    <Projects />
    <Experience />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
  </BrowserRouter>
);

export default App;
