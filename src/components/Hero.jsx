import { ChevronDown } from "lucide-react";
import heroBackground from "../assets/hero-background.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNext = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // optional parallax effect
        }}
      >
        {/* Red Overlay */}
        <div className="absolute inset-0 bg-red-600/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 fade-in-up">
            <span className="block">Crafted with</span>
            <span className="block text-yellow-500">Tradition,</span>
            <span className="block">Worn with Pride</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Discover the finest collection of authentic Nepali attire, where
            centuries-old craftsmanship meets contemporary elegance.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToProducts}
            className="text-lg fade-in-up bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:cursor-pointer"
            style={{ animationDelay: "0.6s" }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
