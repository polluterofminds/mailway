import Blog from "./components/Blog";
import Feature from "./components/Feature";
import FeatureGrid from "./components/FeatureGrid";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import { BrowserRouter } from "react-router-dom";

export default function Example() {
  return (
    <BrowserRouter>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Navbar />
          <main>
            <Hero />
            {/* Feature section with screenshot */}
            <Feature />

            {/* Feature section with grid */}
            <FeatureGrid />

            {/* Testimonial section */}
            <Testimonial />

            {/* Blog section */}
            {/* <Blog /> */}

            {/* CTA Section */}
            {/* <FinalCTA /> */}
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
