import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/beetle-logo-white.svg";
import BlogSection from "../containers/blogs/blogs-container";
import Footer from "../components/shared/footer";
import { useToast } from "../hooks/use-toast";
import useGetAllBlogPosts from "../services/blogService/useGetAllBlogPosts";
import ScrollToTop from "../components/scroll-to-top";

const Blog = () => {
  const { blogPosts, error, loading } = useGetAllBlogPosts();
  const { showToast } = useToast();

  if (error) {
    showToast("Error something went wrong", "error", 3000);
  }

  return (
    <div>
      <ScrollToTop />
      <header className="relative h-[60dvh] sm:h-[55vh] blog__head">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative z-10 text-white px-4 sm:px-8 flex flex-col items-center justify-center h-full">
          {/* Logo & Nav */}
          <div className="w-[90%] md:container mx-auto absolute top-5 left-0 right-0 flex justify-between items-center">
            <Link to="/">
              <img
                src={LogoWhite}
                alt="Snowball Logo"
                className="h-6 sm:h-6 cursor-pointer"
              />
            </Link>
            <nav className="space-x-4 text-sm sm:text-sm">
              <Link to="/" className="hover:underline">
                Businesses
              </Link>
              <Link to="/" className="hover:underline">
                Resellers
              </Link>
              <Link to="/blog" className="font-semibold hover:underline">
                Blog
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-sm sm:text-lg mb-8">
              Stay up-to-date with the latest news and trends in tech, design,
              and business.
            </p>
          </div>

          {/* Search and Tags */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Search Bar */}
            <div className="relative w-full sm:w-2/3 lg:w-1/2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-3 px-5 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 pr-12"
              />
              <span className="absolute top-1/2 transform -translate-y-1/2 right-5 text-gray-400">
                <FiSearch size={18} />
              </span>
            </div>
            {/* Tags Dropdown */}
            <div className="relative w-full sm:w-auto">
              <select className=" text-sm w-full sm:w-auto px-5 py-3 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 appearance-none">
                <option value="">Tags</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="marketing">Marketing</option>
                <option value="business">Business</option>
              </select>
              <span className="absolute top-1/2 transform -translate-y-1/2 right-5 text-gray-400">
                <IoIosArrowDown size={20} />
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="w-[90%] md:container mx-auto py-10">
        {loading && (
          <div className="animate-pulse space-y-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/3 h-40 bg-gray-300 rounded-lg"></div>
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-300 rounded"></div>
                  <div className="h-6 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        )}
        <BlogSection blogPosts={blogPosts} />
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
