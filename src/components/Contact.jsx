import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import mandalaOrnament from "../assets/mandala-ornament.png";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: ["Bankroad,2no.bazaar, Sindhuli, Nepal"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [ "047520171"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["vastralaya@gmail.com", ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Sun-Sat: 10:00 AM - 8:00 PM" ],
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-[#FFF7E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className={`text-4xl sm:text-5xl font-bold mb-4 transition-all duration-700 text-red-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Get In Touch
          </h2>
          <p
            className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto transition-all duration-700 text-gray-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Visit our store or reach out to us for custom orders and inquiries.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="col-span-12 lg:col-span-6 bg-white p-10 sm:p-12 rounded-3xl shadow-xl transition-all duration-700">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-800 mb-8">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 transition-all duration-300 text-sm sm:text-base md:text-lg"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 transition-all duration-300 text-sm sm:text-base md:text-lg"
                  placeholder="abc@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 transition-all duration-300 resize-none text-sm sm:text-base md:text-lg"
                  placeholder="Tell us about your requirements or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-800 text-white py-3 text-base sm:text-lg md:text-xl rounded-xl hover:bg-red-900 transition-all duration-300 shadow-md cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="col-span-12 lg:col-span-6 space-y-8">
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-yellow-300 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1 text-base sm:text-lg md:text-xl">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-sm sm:text-base md:text-lg text-gray-500"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-red-800 mb-4 text-base sm:text-lg md:text-xl">
                Find Our Store
              </h4>
              <div className="w-full h-64 sm:h-72 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.450803627811!2d85.90881417490526!3d27.204992847469896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb8b5e4bb4a8f1%3A0x89e5e8942eca0bc4!2sGoverdhan%20Vastralaya!5e0!3m2!1sen!2snp!4v1755164026978!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"  
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

