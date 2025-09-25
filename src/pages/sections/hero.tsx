import { motion } from "framer-motion";
import HeroImg from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center min-h-[100dvh]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-8 w-full max-w-3xl px-4 sm:px-0"
      >
        <div className="relative w-full aspect-w-16 aspect-h-9">
          <img
            src={HeroImg}
            alt="Hero Image"
            style={{ objectFit: "cover", scale: 2 }}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="text-center px-4 sm:px-0 max-w-[800px]"
      >
        <h1 className="md:leading-[110%] -tracking-[2%] text-3xl sm:text-4xl md:text-6xl font-semibold text-gray-800 pb-10">
          Making commerce{" "}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C52FF] to-[#60E9FF]">
              better
            </span>{" "}
          </span>
          for everyone
        </h1>
        <p className="text-lg font-medium text-text max-w-xl mx-auto leading-7">
          At Snowball, we are committed to building truly remarkable products and
          processes that make commerce better for you.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
