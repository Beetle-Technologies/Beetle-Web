import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Logo from "@/assets/beetle-logo.svg";
import { Link } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    title: "Businesses",
    href: "/bloom/businesses",
  },
  {
    id: 2,
    title: "Resellers",
    href: "/bloom/resellers",
  },
  {
    id: 3,
    title: "Blog",
    href: "/blog",
  },
];

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="fixed top-0 left-0 w-full p-4 md:p-6 backdrop-blur-lg"
      id={"navbar"}
    >
      <div className="container mx-auto flex items-center justify-between ">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link to="/">
            <p className="" aria-label="Home">
              <img
                src={Logo} // Replace with your logo path
                alt="beetle-logo"
                width={100}
                height={100}
              />
            </p>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center justify-end flex-grow">
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: item.id * 0.1,
                ease: "easeOut",
              }}
              className="mx-4"
            >
              <Link to={item.href}>
                <p className="text-sm font-semibold text-text mix-blend-difference hover:text-primary transition-colors duration-300 group relative">
                  {item.title}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                    layoutId="underline"
                  />
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-text hover:text-primary transition-colors duration-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden p-4"
          >
            <ul className="space-y-4">
              <div className="w-full h-[.3px] bg-gray-900"></div>
              {menuItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: item.id * 0.1 }}
                >
                  <a href={item.href}>
                    <p className="block text-text hover:text-primary transition-colors duration-300 text-sm">
                      {item.title}
                    </p>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationMenu;
