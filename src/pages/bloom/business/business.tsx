import { Link, useNavigate } from "react-router-dom";
import HeaderImg from "../../../assets/bloom/business/1.png";
import GrowthImg from "../../../assets/bloom/business/2.png";
import SectionImg3 from "../../../assets/bloom/business/3.png";
import SectionImg4 from "../../../assets/bloom/business/4.png";
import Section5Img from "../../../assets/bloom/business/5.png";
import Section6Img from "../../../assets/bloom/business/6.png";
import FooterImg from "../../../assets/bloom/business/7.png";
import DownSvg from "../../../assets/bloom/business/down.svg";
import businessLogo from "../../../assets/bloom/business/Purple horizontally stacked 2 (3).png";
import InstagramSvg from "../../../assets/bloom/instagram.svg";
import LinkedinSvg from "../../../assets/bloom/linkedin.svg";
import bloomLogoWhite from "../../../assets/bloom/Purple horizontally stacked 2 (4).png";
import TwitterSvg from "../../../assets/bloom/twitter.svg";
import Navigation from "../../../components/bloom/navigation";
import { SocialLinks } from "../../../constants/socialLinks";
import ScrollToTop from "../../../components/scroll-to-top";
import { AppStoreButton, PlayStoreButton } from "../components/downloadButtons";
import { SEOHead } from "../../../components/seo/SEOHead.tsx";
import { useSEO } from "../../../hooks/useSEO.ts";

const businessMenu = [
  {
    id: 1,
    title: "Resellers",
    href: "/bloom/resellers",
  },

  {
    id: 3,
    title: "Blog",
    href: "/blog",
  },
];

const businessColorScheme = {
  textColor: "text-[#3D266D]",
  hoverColor: "hover:text-gray-800",
  lineColor: "bg-[#3D266D]",
};

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-[#8C52FF] text-white text-basepp py-3 px-9 rounded-xl font-semibold hover:scale-105  transition ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-flex px-1 text-[#8040FF] bg-purple-100 rounded-md  ">
      {children}
    </span>
  );
};

const Business = () => {
  const navigate = useNavigate();
  const { generateStructuredData } = useSEO();

  const structuredData = [
    generateStructuredData.organization(),
    generateStructuredData.service({
      name: "Snowball for Businesses",
      description: "Advanced commerce tools, analytics, and integrations to scale business operations and increase revenue",
      provider: "Snowball",
      serviceType: "Business Commerce Platform"
    })
  ];

  return (
    <>
      <SEOHead
        title="Snowball for Businesses | Scale Your Commerce Operations"
        description="Discover how Snowball empowers businesses with advanced commerce tools, analytics, and integrations to scale operations and increase revenue."
        keywords="snowball business, commerce platform, business tools, ecommerce solutions, business growth, analytics, integrations"
        type="website"
        structuredData={structuredData}
      />
      <ScrollToTop />
      {/* navigation */}
      <Navigation
        colorScheme={businessColorScheme}
        menuItems={businessMenu}
        logoSrc={businessLogo}
      />

      {/* header */}
      <header className="pt-32 pb-10 sm:px-6 md:py-30">
        <div className="container mx-auto md:min-h-[600px] flex flex-col md:flex-row items-center justify-between p-0 md:p-8">
          <div className="md:max-w-[70%] space-y-6 text-center md:text-left">
            <div className="text-4xl sm:text-4xl md:text-6xl font-semibold text-purple-900 leading-tight">
              <p className="flex items-center justify-center md:justify-start gap-x-3 leading-none">
                Where{" "}
                <span>
                  <img src={DownSvg} alt="Down arrow icon" className="-mb-3" />
                </span>
              </p>
              <span className="leading-tight block">entrepreneurial</span>

              <span className="text-[#8C52FF] block">
                <span className="text-purple-900">dreams </span>
                take flight.
              </span>
            </div>
            <p className="w-[90%] text-md sm:text-md md:text-lg font-medium text-[#3D266D] max-w-lg mx-auto md:mx-0">
              Bloom makes it easy to sell more products and grow your business
              quickly.
            </p>
            <div className=" flex justify-center md:justify-start sm:flex-row gap-x-1 md:gap-4">
              <AppStoreButton url="#" />
              <PlayStoreButton url="#" />
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <img
              src={HeaderImg}
              alt="Header Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </header>

      {/* growth section */}
      <section
        className="py-20 px-4 sm:px-6"
        style={{
          background:
            "linear-gradient(180deg, rgba(237, 232, 255, 0) 0%, #EDE8FF 100%)",
        }}
      >
        <div className="flex flex-col items-center gap-y-10">
          <div className="mx-auto max-w-3xl text-center space-y-5">
            <h1 className="text-[#372360] text-2xl sm:text-3xl md:text-4xl font-semibold">
              Bloom is more than just an app — it's your partner in business
              growth.
            </h1>
            <p className="text-[#4A2D85] text-base sm:text-lg max-w-lg mx-auto">
              Bloom helps you get your products off the shelves quickly and into
              the hands of more customers.
            </p>
          </div>
          <div className="pt-10  mx-auto">
            <img
              src={GrowthImg}
              alt="Growth illustration"
              className="block mx-auto max-w-full w-full"
            />
          </div>
        </div>
      </section>

      {/* expand your search */}
      <section className="text-center py-10 md:py-20 md:min-h-screen px-4 sm:px-6">
        <div className="space-y-5 max-w-2xl mx-auto">
          <p className="text-sm text-[#8C52FF] font-medium">
            EXPAND YOUR SEARCH
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#372360]">
            Get your products into the hands of so much more people!
          </h1>
          <p className="text-[#3D266D] text-base sm:text-lg">
            Bloom connects you to a wide range of <Chip>resellers</Chip> who can
            take your products to places you can’t go. They’ll help you reach
            more customers and sell more in less time.
          </p>
        </div>

        <div className="mx-auto mt-10">
          <img
            src={SectionImg3}
            className="block mx-auto max-w-full h-auto"
            alt="Expand Your Reach"
          />
        </div>
      </section>

      {/* showcase and sell */}
      <section className="py-10 md:py-20 md:min-h-screen space-y-10 px-4 sm:px-6">
        <div className="space-y-5 text-center max-w-2xl mx-auto">
          <p className="text-sm text-[#197AD9] font-medium">
            SHOWCASE AND SELL
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#372360]">
            Your Products deserve a stage
          </h1>
          <p className="text-base sm:text-lg text-[#3D266D]">
            Let’s give them one that is simple and sleek. One that sells.
          </p>
          <p className="text-[#3D266D] text-sm sm:text-base">
            Bloom provides your business with a simple webpage where customers
            can browse, buy, and come back for more. It’s your online
            storefront, available 24/7, so you never miss a sale.
          </p>
        </div>

        <div className=" mx-auto">
          <img
            src={SectionImg4}
            alt="Product Showcase"
            className="block mx-auto max-w-full h-auto"
          />
        </div>
      </section>

      {/* insightful - management */}
      <section className="py-10 md:py-20 md:min-h-screen space-y-10 px-4 sm:px-6">
        <div className="space-y-5 text-center max-w-2xl mx-auto">
          <p className="text-sm text-[#8C52FF] font-medium">
            INSIGHTFUL MANAGEMENT
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#372360]">
            Your business management made simple
          </h1>
          <p className="text-[#3D266D] text-base sm:text-lg">
            Enjoy detailed weekly insights into your inventory and sales. You’ll
            know what’s selling, what’s not, and where to adjust.
          </p>
        </div>

        <div className="mx-auto">
          <img
            src={Section5Img}
            alt="Management Insights"
            className="block mx-auto max-w-full h-auto"
          />
        </div>
      </section>

      {/* why bloom */}
      <section className="bg-[#EDE8FF] py-20 px-4 sm:px-6 relative">
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl text-[#8C52FF] font-semibold">
            Why Bloom? Because it works!
          </h1>
          <h2 className="text-2xl sm:text-3xl text-[#3D266D] font-medium">
            Bloom is simple, easy to use, and powerful.
          </h2>
          <p className="text-[#3D266D] font-medium text-lg sm:text-base">
            We are delivering to you a superior experience that works. From
            ensuring the sale of your products to getting it into the hands of
            your customers, Bloom has got you covered!
          </p>
        </div>

        <div className="overflow-hidden h-[200px] sm:h-[700px] mt-10">
          <img
            src={Section6Img}
            alt="Bloom Showcase"
            className="block mx-auto max-w-full h-auto"
          />
        </div>

        <div className="mx-auto text-center max-w-lg pt-20 space-y-5">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#372360]">
            Start growing your business with Bloom today.
          </h1>
          {/* <p className="text-[#3D266D] font-semibold text-lg sm:text-xl">
            Join the Waitlist
          </p>
 */}
          {/* <div className="inline-flex gap-x-5 justify-center mt-4">
            <img src={AppleStore} alt="Apple Store" className="h-12 w-auto" />
            <img
              src={GooglePlay}
              alt="Google Play Store"
              className="h-12 w-auto"
            />
          </div> */}
          <div className="flex justify-center sm:flex-row gap-x-1 md:gap-4">
            <AppStoreButton url="#" />
            <PlayStoreButton url="#" />
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="bg-[#197AD9]">
        <div className="container mx-auto py-10 px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="text-white space-y-5 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl font-semibold">
                Want to make extra money?
              </h1>
              <p className="text-lg sm:text-xl">
                Start your business now with
                <Link className="font-semibold px-2" to={"/bloom/resellers"}>
                  Bloom: For Resellers
                </Link>
              </p>
              <p>
                Get instant access to a wide range of existing products you can
                resell and make money off.
              </p>
              <Button
                className="bg-white !text-[#083D71] mt-4 sm:mt-0"
                onClick={() => navigate("/bloom/resellers")}
              >
                Learn More
              </Button>
            </div>
            <div className="w-full lg:w-auto flex justify-center lg:justify-end">
              <img src={FooterImg} alt="" className="max-w-xs lg:max-w-none" />
            </div>
          </div>
        </div>
        <footer className="border-t-2 py-5 sm:py-10 px-4 sm:px-6">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* First Column */}
            <div className="space-y-4">
              <div className="flex justify-center lg:justify-start">
                <img
                  src={bloomLogoWhite}
                  alt="Bloom Logo"
                  className="h-12 w-auto -ml-2"
                />
              </div>
              <div className="text-center lg:text-left text-sm text-white">
                Copyright © 2024
                <Link to="/" className="hover:underline">
                  &nbsp;Snowball Ltd.&nbsp;
                </Link>
                All rights reserved.
              </div>
              <div className="flex justify-center lg:justify-start gap-x-4">
                <a href={SocialLinks.LinkedInSnowball}>
                  <img src={LinkedinSvg} alt="LinkedIn" className="h-6 w-6" />
                </a>
                <a href={SocialLinks.TwitterSnowball}>
                  <img src={TwitterSvg} alt="Twitter" className="h-6 w-6" />
                </a>
                <a href={SocialLinks.InstagramSnowball}>
                  <img src={InstagramSvg} alt="Instagram" className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-5">
              <h2 className="text-white text-lg font-semibold">Legal</h2>
              <ul className="space-y-3 text-sm text-white">
                <li>
                  <Link
                    to="/legal/bloom/businesses/terms-of-use"
                    className="hover:underline"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal/bloom/businesses/privacy-policy"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal/bloom/refund-policy"
                    className="hover:underline"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Business;
