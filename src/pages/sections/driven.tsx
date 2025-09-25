import BadgeImg from "@/assets/badge.svg";
import WorkImg from "@/assets/work.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Driven = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      className="py-10 md:py-20 mx-auto  px-4 sm:px-8 md:px-16 lg:px-24 overflow-x-hidden"
      ref={ref}
    >
      <div>
        <div className=" md:container mx-auto py-20 flex flex-col md:flex-row items-center md:space-x-10 bg-[radial-gradient(84.24%_369.28%_at_15.8%_87.43%,_#FFFFFF_0%,_#FFFBF0_100%)]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 1.6 }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            className="mb-8 md:mb-0"
          >
            <img
              src={WorkImg}
              alt="an-image-of-a-lady-working"
              className="max-w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 2 }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            className="flex flex-col gap-y-3 relative w-full md:w-[45%]"
          >
            <img
              src={BadgeImg}
              alt="badge"
              width={50}
              height={50}
              className="absolute -top-5 -left-5"
            />
            <div className="border border-gray-100 bg-white shadow-lg rounded-xl w-full text-text font-medium p-6 text-lg">
              Our commitment to building a better reality along each point of
              the commerce value chain is unwavering.
            </div>
            <div className="border border-gray-100 bg-white shadow-lg rounded-xl w-full text-text font-medium p-6 text-lg">
              We're passionate about building things that work and dedicated to
              solving the problems of our customers, as unique individuals.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Driven;
