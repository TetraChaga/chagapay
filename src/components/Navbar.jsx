import { useState, useEffect } from "react";
import { close, logo, } from "../assets";
import { navLinks } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll"; 
import { LucideHome, Menu,  UsersIcon, CircleDashedIcon, LucidePhoneCall, User, FeatherIcon, X } from "lucide-react";

// Framer Motion Variants for Staggered Menu Items
const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      } flex items-center justify-between px-6 md:px-12 rounded-b-lg`}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="chagapay"
        className={`w-[230px] h-10 cursor-pointer transition-all ${
          scrolled ? "w-[120px] h-8" : ""
        }`}
      />

      {/* Desktop Menu */}
      <ul className="hidden sm:flex items-center gap-8">
        {navLinks.map((nav) => (
          <NavItem key={nav.id} nav={nav} />
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        to="get-started"
        smooth={true}
        duration={500}
        className="hidden sm:flex bg-indigo-600 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform cursor-pointer"
      >
        Get Started
      </Link>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="sm:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        {toggle ? <X className="w-8 h-8 text-black"/> : <Menu className="w-8 h-8 text-black" />} 
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="absolute top-16 right-4 bg-white shadow-2xl rounded-xl p-6 w-56"
          >
            <motion.ul className="flex flex-col gap-5">
              {navLinks.map((nav) => (
                <motion.li key={nav.id} variants={menuItemVariants}>
                  <NavItem nav={nav} />
                </motion.li>
              ))}
            </motion.ul>
            {/* Mobile CTA Button */}
            <motion.div variants={menuItemVariants}>
              <Link
                to="get-started"
                smooth={true}
                duration={500}
                className="block mt-4 text-center bg-indigo-600 text-white py-2 rounded-lg font-medium shadow-md hover:bg-indigo-700 hover:scale-105 transition-transform cursor-pointer"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


const navIcons = {
  home: <LucideHome className="w-5 h-5" />,
  about: <FeatherIcon className="w-5 h-5" />,
  contact: <LucidePhoneCall className="w-5 h-5" />,
  profile: <UsersIcon className="w-5 h-5" />,
};

const NavItem = ({ nav }) => {
  return (
    <li className="relative flex items-center gap-2">
      <Link
        to={nav.id}
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
        className="relative flex items-center gap-2 cursor-pointer text-lg font-semibold tracking-wide 
          text-gray-800 hover:text-transparent bg-gradient-to-r 
          from-indigo-600 to-purple-500 bg-clip-text transition-all duration-300"
      >
        {navIcons[nav.id] || <User className="w-5 h-5" />} {/* Default Icon */}
        {nav.title}
        <motion.span
          whileHover={{ scaleX: 1 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 bottom-0 h-[2px] w-full bg-indigo-600 origin-left"
        />
      </Link>
    </li>
  );
};



export default Navbar;
