import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import InstagramIcon from "@/assets/socials/instagram.svg";
import LinkedInIcon from "@/assets/socials/linkedin.svg";
import TwitterIcon from "@/assets/socials/twitter.svg";
import SnowballLogo from "@/assets/beetle-logo-white.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
        hidden: {},
      }}
      className={
        "bg-black backdrop-filter backdrop-blur-lg p-10 md:p-20 flex items-center"
      }
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 w-full h-full">
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          className={"flex flex-col space-y-10 justify-center"}
        >
          <a href="/">
            <img
              alt={"Snowball Logo"}
              src={SnowballLogo}
              className="w-40 md:w-[180px]"
            />
          </a>
          <div className="flex space-x-2 items-center">
            <a
              href="https://www.linkedin.com/company/snowball-ltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <img
                  alt={"LinkedIn Icon"}
                  src={LinkedInIcon}
                  width={25}
                  height={25}
                />
              </motion.div>
            </a>
            <a
              href="https://x.com/Snowball_ltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <img alt={"twitter"} src={TwitterIcon} width={20} height={20} />
              </motion.div>
            </a>
            <a
              href="https://www.instagram.com/snowball.ltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <img
                  alt={"Instagram"}
                  src={InstagramIcon}
                  width={20}
                  height={20}
                />
              </motion.div>
            </a>
          </div>
          <motion.p
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            className={"text-white text-sm  xl:text-justify"}
          >
            Copyright © 2024 Snowball Ltd. All rights reserved.
          </motion.p>
        </motion.div>
        <motion.div
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-lg">Products</h3>
            <Link
              to="/bloom/resellers"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Bloom: For Resellers
            </Link>
            <Link
              to="/bloom/businesses"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Bloom: For Businesses
            </Link>
          </div>
          {/* <div className="flex flex-col space-y-4">
            <h3 className="text-white text-lg">Legal</h3>
            <Link
              to="/terms-of-use"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/privacy-policy"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Privacy
            </Link>
          </div> */}
        </motion.div>
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="flex flex-col space-y-4 text-white"
        >
          <p>5B Salimonu Estate, New Bodija, Ibadan, Nigeria.</p>
          <div className={"flex flex-col space-y-1 justify-end"}>
            <a
              href="mailto:contact@snowball.com"
              className="hover:text-gray-300 transition-colors"
            >
              hello@snowballtd.org
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
