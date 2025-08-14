import { Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer = ({ logo }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#inspiration", label: "Inspiration" },
    { href: "#contact", label: "Contact" },
  ];

  const categories = [
    "Women's Traditional Wear",
    "Men's Traditional Wear",
    "Children's Wear",
    "Accessories",
    "Custom Orders",
  ];

  const socialLinks = [{ icon: Facebook, href: "https://www.facebook.com/profile.php?id=100077590794742", label: "Facebook" }];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-2 sm:px-4 lg:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            {logo ? (
              <img
                src={logo}
                alt="Goberdhan Vastralaya"
                className="h-14 w-auto mb-4"
              />
            ) : (
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Goberdhan Vastralaya
              </h2>
            )}

            <p className="mb-6 text-base md:text-lg leading-relaxed">
              Preserving Nepal's rich textile heritage through authentic
              craftsmanship and contemporary design. Experience tradition, wear
              pride.
            </p>

            <div className="space-y-2 text-base md:text-lg">
              <div className="flex items-center space-x-2">
                <MapPin size={18} className="text-yellow-400" />
                <span>Bankroad,2no.bazaar, Sindhuli, Nepal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-yellow-400" />
                <span>047520171</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-yellow-400" />
                <span>vastralaya@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-base md:text-lg">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Categories
            </h3>
            <ul className="space-y-2 text-base md:text-lg">
              {categories.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/30 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-2 sm:px-4 lg:px-0">
          <p className="text-sm md:text-base">
            © {currentYear} Nepal Leadership Technology. All rights reserved. | Crafted
            with tradition.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-sm md:text-base">Follow us:</span>
            {socialLinks.map((social) => (
              <a
              target="blank"
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className=" cursor-pointer hover:text-yellow-400 transition-transform transform hover:scale-110 "
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div className="text-sm md:text-base flex items-center space-x-2">
            <span>NP</span>
            <span>Authentically Nepali</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
