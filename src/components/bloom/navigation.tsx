import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface ColorScheme {
  textColor: string;
  hoverColor: string;
  lineColor?: string;
}

interface MenuItem {
  id: number;
  title: string;
  href: string;
}

interface NavigationProps {
  logoSrc: string;
  menuItems: MenuItem[];
  colorScheme: ColorScheme;
}

const Navigation = ({ logoSrc, menuItems, colorScheme }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed z-10 top-0 left-0 w-full p-4 md:p-6 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between md:grid md:grid-cols-[30%,70%] items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link to="/">
            <img src={logoSrc} alt="logo" width={100} height={100} />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          {menuItems.map((item) =>
            location.pathname !== item.href ? (
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
                <Link to={item.href} className="group relative">
                  <p
                    className={`text-sm font-semibold ${colorScheme.textColor} hover:${colorScheme.hoverColor} transition-colors duration-300`}
                  >
                    {item.title}
                    <motion.span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 ${colorScheme?.lineColor}  group-hover:w-full transition-all duration-300`}
                    />
                  </p>
                </Link>
              </motion.div>
            ) : null
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden ${colorScheme.textColor} hover:${colorScheme.hoverColor} transition-colors duration-300 focus:outline-none`}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
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
              <div className="w-full h-[0.3px] bg-gray-900"></div>
              {menuItems.map((item) =>
                location.pathname !== item.href ? (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: item.id * 0.1 }}
                  >
                    <Link to={item.href} onClick={() => setIsOpen(false)}>
                      <p
                        className={`block ${colorScheme.textColor} hover:${colorScheme.hoverColor} transition-colors duration-300 text-sm`}
                      >
                        {item.title}
                      </p>
                    </Link>
                  </motion.li>
                ) : null
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
