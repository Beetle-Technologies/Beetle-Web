import BloomBusiness from "../../assets/bblogo.svg";
import BloomReseller from "../../assets/brlogo.svg";
import BloomAppBusiness from "../../assets/bloom.png";
import BBAppMobile from "../../assets/mobile/bb_mobile.png";
import BRAppMobile from "../../assets/mobile/br_mobile.png";
import BloomAppReseller from "../../assets/bloomforresellers.png";
import BBExtra from "../../assets/bb_extra.png";
import BRExtra from "../../assets/br_extra.png";
import { useNavigate } from "react-router-dom";

const sectionsData = [
  {
    logo: BloomBusiness,
    title: "Bloom for Businesses",
    description:
      "Bloom makes it easy to reach more customers, increase your sales and grow your business. It is simple, easy to use and powerful.",
    buttonText: "Learn more",
    primary: "#8C52FF",
    bg: "#F5F2FF",
    extra: BBExtra,
    image: {
      src: BloomAppBusiness,
      mobileSrc: BBAppMobile,
      alt: "Bloom for Businesses",
    },
    goTo: "/bloom/businesses",
  },
  {
    logo: BloomReseller,
    title: "Bloom for Resellers",
    description:
      "Start and grow a business with no capital. Bloom helps you make money by reselling different products easily.",
    buttonText: "Learn more",
    primary: "#1E90FF",
    bg: "#F2F9FF",
    extra: BRExtra,
    image: {
      src: BloomAppReseller,
      mobileSrc: BRAppMobile,
      alt: "Bloom for Resellers",
    },
    goTo: "/bloom/resellers",
  },
];

interface SectionCardProps {
  logo: string;
  title: string;
  description: string;
  buttonText: string;
  image: { src: string; mobileSrc: string; alt: string };
  bg: string;
  primary: string;
  extra: string;
  goTo: string;
}

const SectionCard = ({
  logo,
  title,
  description,
  buttonText,
  image,
  extra,
  bg,
  primary,
  goTo,
}: SectionCardProps) => {
  const navigate = useNavigate();
  return (
    <section
      className="relative px-0 md:px-6 pt-12 md:pt-20 overflow-y-hidden max-h-[1000px] "
      style={{
        background: bg,
      }}
    >
      <div className="flex flex-col items-center space-y-10 text-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt={`${title} logo`} className="w-10 md:w-16" />
          <h2
            className="text-2xl md:text-5xl font-bold text-blue-900"
            style={{
              color: primary,
            }}
          >
            {title}
          </h2>
        </div>

        <p className="text-gray-700 max-w-xl text-md md:text-lg">
          {description}
        </p>
        <button
          className="relative z-20 px-6 py-3 mt-4 text-white bg-blue-600 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg"
          style={{
            background: primary,
          }}
          onClick={() => navigate(goTo)}
        >
          {buttonText}
        </button>
      </div>
      <img
        src={extra}
        alt={`Extra-${title}`}
        className="absolute top-1/2 md:top-[35%] z-10 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="pt-16 md:pt-0">
        <img
          src={image.src}
          alt={image.alt}
          className="mx-auto hidden md:block"
        />
        {/* Mobile Image */}
        <img
          src={image.mobileSrc} // Mobile image path
          alt={image.alt}
          className="block md:hidden"
        />
      </div>
    </section>
  );
};

const Products = () => {
  return (
    <div>
      {sectionsData.map((section, index) => (
        <SectionCard key={index} {...section} />
      ))}
    </div>
  );
};

export default Products;
