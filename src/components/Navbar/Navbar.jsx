import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./navBar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <motion.nav
        className={`relative w-full px-4 sm:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? "navBar" : "bg-transparent"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div aria-label="logo" className="order-2 min-[950px]:order-1">
          <a href="/" className="logo">
            <span>P</span>
            <span>H</span>
          </a>
        </div>

        <div aria-label="manubar" className="min-[950px]:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBarsStaggered size={30} />
          </button>
        </div>

        <ul className="py-2 lg:py-4 px-3 min-[450px]:px-8 order-1 min-[950px]:order-1 hidden min-[950px]:flex gap-1 min-[450px]:gap-3 sm:gap-0 min-[450px]:w-[95%] min-[640px]:w-[50%]">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <motion.a
                key={item.name}
                href={item.link}
                onClick={() => setActiveTab(item.name)}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-1.5 relative flex-1 group"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 lg:-bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-white rounded-full"
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                )}
                <li
                  className={`md:font-medium transition-all duration-300 ${isActive ? "text-white" : "text-gray-200"}`}
                >
                  {item.name}
                </li>
              </motion.a>
            );
          })}
        </ul>

        <div className="order-3">
          <a
            href="#contact"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg hover:shadow-2xl hover:opacity-80 transition duration-300 py-1.5 sm:py-2 lg:py-2.5 px-3.5 sm:px-5 lg:px-7 border-none rounded-4xl font-medium sm:font-semibold"
          >
            Reach Out
          </a>
        </div>
      </motion.nav>

      {menuOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 left-0 z-50 w-[250px] min-[950px]:hidden h-screen bg-gray-900 px-6 py-12"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4"
          >
            <MdClose size={30} />
          </button>
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => {
                    setActiveTab(item.name);
                    setMenuOpen(false);
                  }}
                  className="block text-gray-200 hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
