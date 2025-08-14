import { useEffect, useRef, useState } from "react";
import aboutImage from "../assets/about-image.jpg";
import mandalaOrnament from "../assets/mandala-ornament.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 bg-[hsl(45,67%,96%)]  overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12 relative">
          {/* Left Decorative Line */}
          <div className="flex-1 h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent"></div>

          {/* Ornament with glow */}
          <div className="relative z-10 mx-6 bg-yellow-400 rounded-full p-4 flex items-center justify-center shadow-lg">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-50 blur-md"></div>
            <img
              src={mandalaOrnament}
              alt="Mandala Ornament"
              className="relative w-6 h-6 opacity-90"
            />
          </div>

          {/* Right Decorative Line */}
          <div className="flex-1 h-[2px] bg-gradient-to-l from-yellow-400 via-yellow-300 to-transparent"></div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 transition-all duration-700 text-red-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Our Heritage
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 text-gray-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Preserving the rich tradition of Nepali craftsmanship for
            generations
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={aboutImage}
                alt="Traditional Nepali craftswoman"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-red-400 to-yellow-300 rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-red-300 to-yellow-200 rounded-full opacity-40 blur-lg"></div>
          </div>

          {/* Text Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 text-red-800">
              Three Generations of Excellence
            </h3>

            <div className="space-y-6 text-foreground leading-relaxed text-base sm:text-lg md:text-xl max-w-4xl mx-auto text-justify px-4 sm:px-6 lg:px-8">
              <p>
                Founded in 1952, Goberdhan Vastralaya has been at the forefront
                of preserving and celebrating Nepal's rich textile heritage. Our
                journey began with a simple vision: to create authentic Nepali
                garments that honor our ancestors while embracing the needs of
                modern life.
              </p>

              <p>
                Each piece in our collection tells a story of meticulous
                craftsmanship, where traditional weaving techniques passed down
                through generations meet contemporary design sensibilities. Our
                artisans, many of whom learned their craft from their mothers
                and grandmothers, pour their hearts into every stitch.
              </p>

              <p>
                From the vibrant Dhaka patterns of the hills to the intricate
                metalwork of the Newars, we celebrate the diversity of Nepal's
                cultural tapestry through our clothing. Every garment is not
                just apparel—it's wearable art that connects you to the soul of
                Nepal.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-red-800 mb-2 text-xl">
                  Authenticity
                </h4>
                <p className="text-lg text-gray-500">
                  Original techniques and patterns
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-red-800 mb-2 text-xl">
                  Quality
                </h4>
                <p className="text-lg text-gray-500">
                  Premium materials and craftsmanship
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-red-800 mb-2 text-xl">
                  Heritage
                </h4>
                <p className="text-lg text-gray-500">
                  Preserving cultural traditions
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-red-800 mb-2 text-lg">
                  Community
                </h4>
                <p className="text-xl text-gray-500">
                  Supporting local artisans
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
