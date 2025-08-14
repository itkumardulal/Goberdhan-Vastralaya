import { useEffect, useRef, useState } from "react";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import product4 from "../assets/product-4.jpg";
import mandalaOrnament from "../assets/mandala-ornament.png";

const products = [
  {
    id: 1,
    name: "Traditional Kurta Suruwal",
    description: "Elegant women's traditional outfit with intricate embroidery",
    price: "NPR 15,000",
    image: product1,
    category: "Women's Wear",
  },
  {
    id: 2,
    name: "Men's Daura Suruwal",
    description: "Classic men's traditional attire with vest and dhaka topi",
    price: "NPR 18,000",
    image: product2,
    category: "Men's Wear",
  },
  {
    id: 3,
    name: "Designer Saree",
    description: "Luxurious silk saree with gold border and traditional motifs",
    price: "NPR 25,000",
    image: product3,
    category: "Women's Wear",
  },
  {
    id: 4,
    name: "Children's Festival Wear",
    description: "Adorable traditional outfit for kids with vibrant colors",
    price: "NPR 8,000",
    image: product4,
    category: "Children's Wear",
  },
];

const ProductsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ornamental Divider */}
        <div className="flex items-center justify-center mb-12 relative">
          <div className="flex-1 h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent"></div>

          <div className="relative z-10 mx-6 bg-yellow-400 rounded-full p-4 flex items-center justify-center shadow-lg">
            <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-50 blur-md"></div>
            <img
              src={mandalaOrnament}
              alt="Mandala Ornament"
              className="relative w-6 h-6 opacity-90"
            />
          </div>

          <div className="flex-1 h-[2px] bg-gradient-to-l from-yellow-400 via-yellow-300 to-transparent"></div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-red-800 mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Our Collection
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Discover authentic Nepali garments crafted with love and tradition
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Original Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-800/80 via-red-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6 relative rounded-b-xl">
                {/* Cream Overlay behind text */}
                <div className="absolute inset-0 bg-[#FFF7E6] opacity-0 group-hover:opacity-80 rounded-b-xl transition-opacity duration-300"></div>

                <h3 className="font-semibold text-lg text-foreground mb-2 relative z-10 group-hover:text-black transition-colors duration-300">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between relative z-10">
                  <span className="text-xl font-bold text-red-800">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Products CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <p className="text-gray-400 text-xl mb-6">
            This is just a glimpse of our extensive collection
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
