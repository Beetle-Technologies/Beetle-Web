import World from "../../assets/world.png";
import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="flex flex-col items-center min-h-screen px-4 space-y-2 md:space-y-5">
      {/* Animated Top Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-2xl text-center mx-auto py-10"
      >
        <p className="text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-900 leading-relaxed">
          “We envision a future where commerce is seamless and easy, powered by
          technology that works.
          <span className="relative">
            Our technology.”
            <span className="absolute right-16 md:right-4 lg:right-1 -bottom-3 w-full h-3 mt-2">
              <svg
                className="w-full h-auto" // This makes the SVG responsive
                viewBox="0 0 258 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 19.9724C47 12.3058 160.9 -1.82758 256.5 2.97242"
                  stroke="url(#paint0_linear_983_3972)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_983_3972"
                    x1="7"
                    y1="14.5"
                    x2="220"
                    y2="11"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF2A21" />
                    <stop offset="1" stopColor="#FF7E21" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </span>
        </p>
      </motion.div>

      {/* Placeholder SVG Globe (replace src with your actual SVG) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src={World}
          alt="Globe"
          className="object-cover py-5 md:py-10 w-80 md:w-full"
        />
      </motion.div>

      {/* Animated Bottom Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        <p className="text-xl md:text-3xl font-semibold text-gray-900 leading-relaxed">
          At Snowball, we're driven by more than just business, we're
          <span className="text-transparent bg-clip-text px-1 bg-gradient-to-r from-[#8C52FF] to-[#8C52FF]">
            inspired
          </span>
          by the people we serve.
        </p>
        <p className="text-md font-semibold text-gray-600 mt-3">
          Their story, your story is our story.
        </p>
      </motion.div>
    </section>
  );
};

export default VisionSection;
