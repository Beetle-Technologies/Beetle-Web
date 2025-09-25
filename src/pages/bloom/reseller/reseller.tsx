import bloomLogoWhite from "../../../assets/bloom/Purple horizontally stacked 2 (4).png";
import InstagramSvg from "../../../assets/bloom/instagram.svg";
import LinkedinSvg from "../../../assets/bloom/linkedin.svg";
import HeaderImg from "../../../assets/bloom/reseller/15.png";
import GrowthImg from "../../../assets/bloom/reseller/16.png";
import SectionImg4 from "../../../assets/bloom/reseller/17.png";
import Section5Img from "../../../assets/bloom/reseller/18.png";
import Section6Img from "../../../assets/bloom/reseller/19.png";
import Section7Img from "../../../assets/bloom/reseller/20.png";
import FooterImg from "../../../assets/bloom/reseller/21.png";
import resellerLogo from "../../../assets/bloom/reseller/brlogo.svg";
import DownSvg from "../../../assets/bloom/reseller/down.svg";
import trustIcon from "../../../assets/bloom/reseller/icon.png";
import TwitterSvg from "../../../assets/bloom/twitter.svg";
import Navigation from "../../../components/bloom/navigation";
import ScrollToTop from "../../../components/scroll-to-top";
import { SocialLinks } from "../../../constants/socialLinks";

import { Link, useNavigate } from "react-router-dom";
import { AppStoreButton, PlayStoreButton } from "../components/downloadButtons";
import { SEOHead } from "../../../components/seo/SEOHead.tsx";
import { useSEO } from "../../../hooks/useSEO.ts";

const resellerMenu = [
  {
    id: 1,
    title: "Businesses",
    href: "/bloom/businesses",
  },

  {
    id: 3,
    title: "Blog",
    href: "/blog",
  },
];

const resellerColorScheme = {
  textColor: "text-[#0B355E]",
  hoverColor: "hover:text-blue-700",
  lineColor: "bg-[#0B355E]",
};

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-[#0A71EB] text-white text-base py-3 px-9 rounded-xl font-semibold hover:scale-105  transition ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-flex px-1 mx-1 text-[#0D4173] bg-blue-100 rounded-md  ">
      {children}
    </span>
  );
};

const Reseller = () => {
  const navigate = useNavigate();
  const { generateStructuredData } = useSEO();

  const structuredData = [
    generateStructuredData.organization(),
    generateStructuredData.service({
      name: "Snowball for Resellers",
      description: "Join thousands of successful resellers using Snowball to source products, manage inventory, and scale their reselling operations",
      provider: "Snowball",
      serviceType: "Reseller Commerce Platform"
    })
  ];

  return (
    <>
      <SEOHead
        title="Snowball for Resellers | Grow Your Reselling Business"
        description="Join thousands of successful resellers using Snowball to source products, manage inventory, and scale their reselling operations."
        keywords="snowball resellers, reselling platform, product sourcing, inventory management, reseller tools, dropshipping, wholesale"
        type="website"
        structuredData={structuredData}
      />
      <ScrollToTop />
      <Navigation
        colorScheme={resellerColorScheme}
        menuItems={resellerMenu}
        logoSrc={resellerLogo}
      />

      {/* header */}
      <header className="pt-32 pb-10 sm:px-6 md:py-30">
        <div className="container mx-auto md:min-h-[600px] flex flex-col md:flex-row items-center justify-between p-0 md:p-8">
          <div className="md:max-w-[70%] space-y-6 text-center md:text-left">
            <div className="text-4xl sm:text-4xl md:text-6xl font-semibold text-blue-900 leading-tight">
              <p className="flex items-center justify-center md:justify-start gap-x-3 leading-none">
                Where{" "}
                <span>
                  <img src={DownSvg} alt="Down arrow icon" className="-mb-3" />
                </span>
              </p>
              <span className="leading-tight block">entrepreneurial</span>

              <span className="text-[#1E90FF] block">
                <span className="text-blue-900">dreams </span>
                take flight
              </span>
            </div>
            <p className="w-[90%] text-md sm:text-md md:text-lg font-medium text-[#0D4173] max-w-lg mx-auto md:mx-0">
              Bloom connects you with a wide range of products from business, to
              resell.
            </p>
            <div className="flex justify-center md:justify-start sm:flex-row gap-x-1 md:gap-4">
              <AppStoreButton url="https://apps.apple.com/ng/app/bloom-for-resellers/id6739034527" />
              <PlayStoreButton
                url="https://play.google.com/store/apps/details?id=your.app.id"
                className=""
              />
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
            "linear-gradient(180deg, rgba(237, 249, 255, 0) 0%, #EDF9FF 100%)",
        }}
      >
        <div className="flex flex-col items-center gap-y-10">
          <div className="mx-auto max-w-3xl text-center space-y-5">
            <h1 className="text-[#0D4173] text-2xl sm:text-3xl md:text-4xl font-semibold">
              Start Your Business with
              <span className="relative px-5 sm:px-6">
                Zero
                <span className="absolute -left-2 sm:left-1 -bottom-4 sm:-bottom-2 transform scale-75 sm:scale-100">
                  <svg
                    width="117"
                    height="67"
                    viewBox="0 0 117 67"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M78.4531 2.43228C48.2202 -0.770562 -1.92683 14.0012 2.24464 40.8664C8.12432 78.7328 108.947 70.6289 114.775 30.7999C116.147 21.4182 111.705 12.0407 88.6481 12.0407C65.5908 12.0407 58.0621 17.9885 58.0621 17.9885"
                      stroke="#1E90FE"
                      stroke-width="3.16822"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </span>
              Capital
            </h1>
            <p className="text-[#0D4173] font-medium text-base sm:text-lg max-w-lg mx-auto">
              You don’t need to create your own products or hold any inventory.
            </p>
            <p className="text-sm text-[#0D4173]">
              Bloom helps you resell anything, anywhere and make a lot of money
              while at it.
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

      {/* profit with ease */}
      <section className="py-10 md:py-20 md:min-h-screen space-y-10 px-4 sm:px-6">
        <div className="space-y-5 text-center max-w-2xl mx-auto">
          <p className="text-sm text-[#197AD9] font-medium">PROFIT WITH EASE</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B355E]">
            The opportunities are endless with Bloom
          </h1>
          <p className="text-base sm:text-lg text-[#0D4173]">
            You are connected to existing products from various businesses, so
            you can start selling immediately.
          </p>
          <p className="max-w-lg mx-auto leading-loose text-[#0D4173] text-xs sm:text-sm">
            We know starting a business can be expensive. But with Bloom, you
            don’t need a penny to get going.
            <Chip>No costs, no risk — just profit.</Chip>
          </p>
          <p className="max-w-lg mx-auto text-[#0D4173] text-xs sm:text-sm">
            For every sale you make, you earn a commission. The more you sell,
            the more money you make.
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

      {/* curate and earn*/}
      <section className="py-10 md:py-20 md:min-h-screen space-y-10 px-4 sm:px-6">
        <div className="space-y-5 text-center max-w-2xl mx-auto">
          <p className="text-sm text-[#1E90FF] font-medium">CURATE & EARN</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0D4173]">
            Your business, your way
          </h1>
          <div className="max-w-xl space-y-5 mx-auto">
            <p className="text-[#0D4173] text-base sm:text-lg font-medium">
              Simply pick the items you love, share them with your network, and
              start making money.
            </p>
            <p className="font-medium text-sm text-[#0D4173]">
              Bloom gives you access to a massive marketplace, full of amazing
              products you want to sell — without the headache of managing
              inventory.
            </p>
          </div>
        </div>

        <div className="mx-auto">
          <img
            src={Section5Img}
            alt="Management Insights"
            className="block mx-auto max-w-full h-auto"
          />
        </div>
      </section>

      {/* you sell we deliver */}
      <section className="py-10 md:py-20 md:min-h-screen space-y-10 px-4 sm:px-6">
        <div className="space-y-5 text-center max-w-2xl mx-auto">
          <p className="text-sm text-[#1E90FF] font-medium">
            YOU SELL, WE DELIVER
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0D4173]">
            You make a sale, we handle the rest
          </h1>
          <p className="text-[#0D4173] text-base sm:text-lg">
            Once you’ve made a sale, we ship the products directly to your
            customers. No capital, no storage — just sales in your pocket.
          </p>
        </div>

        <div className="mx-auto">
          <img
            src={Section6Img}
            alt="Management Insights"
            className="block mx-auto max-w-full h-auto"
          />
        </div>
      </section>

      {/* you can trust us*/}
      <section className="bg-[#F2F9FF] py-20 px-4 sm:px-6 relative">
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <img src={trustIcon} alt="trust" className="inline-flex mx-auto" />
          <h1 className="text-4xl sm:text-5xl text-[#0B355E] font-semibold">
            You can trust us.
          </h1>

          <p className="text-[#0D4173] font-medium text-lg">
            Bloom ensures that the products you sell gets delivered to your
            customers with integrity and no extra hassle from you.
          </p>
        </div>

        <div className="overflow-hidden h-[200px] sm:h-[700px] mt-10">
          <img
            src={Section7Img}
            alt="Bloom Showcase"
            className="block mx-auto max-w-full h-auto"
          />
        </div>

        <div className="text-center pt-20 space-y-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#0B355E]">
            Get access to multiple products and start reselling today
          </h1>
          {/* <p className="text-[#0B355E] font-semibold text-lg sm:text-xl">
            Download the app here
          </p> */}

          {/* <div className="inline-flex gap-x-5 justify-center mt-4">
            <img src={AppleStore} alt="Apple Store" className="h-12 w-auto" />
            <img
              src={GooglePlay}
              alt="Google Play Store"
              className="h-12 w-auto"
            />
          </div> */}

          <div className=" flex justify-center sm:flex-row gap-x-1 md:gap-4">
            <AppStoreButton url="https://apps.apple.com/ng/app/bloom-for-resellers/id6739034527" />
            <PlayStoreButton
              url="https://play.google.com/store/apps/details?id=your.app.id"
              className=""
            />
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="bg-[#7F30F7]">
        <div className="container mx-auto py-10 px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="max-w-xl text-white space-y-5 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl font-semibold">
                Already Have a business?
              </h1>
              <p className="text-lg sm:text-xl">
                Make sales faster and get your products in the hands of more
                people with
                <Link to={"/bloom/businesses"} className="font-semibold px-1">
                  Bloom: For Businesses.
                </Link>
              </p>
              <Button
                className="!bg-white !text-[#4E169C] mt-4 sm:mt-0"
                onClick={() => navigate("/bloom/businesses")}
              >
                Learn More
              </Button>
            </div>
            <div className="w-full lg:w-auto flex justify-center lg:justify-end">
              <img src={FooterImg} alt="" className="max-w-xs lg:max-w-none" />
            </div>
          </div>
        </div>
        <footer className="border-t-2 py-10 px-4 sm:px-6">
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
            <div className="space-y-5 ">
              <h2 className="text-white text-lg font-semibold">Legal</h2>
              <ul className="space-y-3 text-sm text-white">
                <li>
                  <Link
                    to="/legal/bloom/resellers/terms-of-use"
                    className="hover:underline"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal/bloom/resellers/privacy-policy"
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

export default Reseller;
