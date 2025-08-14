import { useEffect, useRef, useState } from 'react';
import { Palette, Heart, Globe, Users } from 'lucide-react';
import mandalaOrnament from '../assets/mandala-ornament.png';

const Cultural = () => {
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

  const culturalElements = [
    {
      icon: Palette,
      title: "Dhaka Patterns",
      description: "Traditional geometric designs from the hills of Nepal, handwoven with precision and passed down through generations."
    },
    {
      icon: Heart,
      title: "Newari Craftsmanship",
      description: "Intricate metalwork and embroidery techniques from the Kathmandu Valley, showcasing unparalleled artisan skills."
    },
    {
      icon: Globe,
      title: "Regional Diversity",
      description: "From the Terai plains to the Himalayan heights, each region contributes unique textiles and design elements."
    },
    {
      icon: Users,
      title: "Community Heritage",
      description: "Supporting local artisan communities and preserving traditional knowledge for future generations."
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="inspiration"
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(45, 67%, 96%) 0%, hsl(45, 67%, 90%) 100%)',
      }}
    >
      {/* Decorative Backgrounds */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(/path-to-mandala-pattern.png)' }}></div>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/path-to-dhaka-pattern.png)' }}></div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Ornamental Divider */}
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
            className={`text-4xl sm:text-5xl font-bold mb-4 transition-all duration-700 text-red-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          
          >
            Cultural Inspiration
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ animationDelay: '0.2s', color: 'hsl(0, 0%, 50%)' }}
          >
            Every thread tells a story of Nepal's rich cultural heritage, woven into fabric that connects past, present, and future
          </p>
        </div>

        {/* Cultural Elements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {culturalElements.map((el, i) => (
            <div
              key={el.title}
              className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center group hover:shadow-2xl transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <div className="bg-yellow-200 p-3 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <el.icon className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="font-semibold text-xl text-red-700 mb-3">{el.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed">{el.description}</p>
            </div>
          ))}
        </div>

        {/* Cultural Quote */}
        <div
          className={`text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.8s' }}
        >
          <blockquote className="text-2xl sm:text-3xl font-serif mb-4 italic text-red-700">
            "In every fold of fabric lies the wisdom of our ancestors, in every pattern lives the soul of Nepal."
          </blockquote>
          <cite className="text-gray-600 font-medium">— Traditional Nepali Proverb</cite>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-100/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Cultural;
