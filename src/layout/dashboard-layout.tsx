import { useState } from "react";
import { CgCardSpades } from "react-icons/cg";
import { FaBars, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

const sidebarItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <FaTachometerAlt className="mr-2" />,
  },
  {
    name: "Manage Posts",
    path: "/admin/posts",
    icon: <CgCardSpades className="mr-2" />,
  },
];

const AdminDashboardLayout = () => {
  const location = useLocation();
  const { logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside
        className={`fixed lg:relative lg:flex flex-col w-64 bg-black text-white p-4 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-20 h-full`}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Beetle Admin</h1>
        <nav className="flex flex-col space-y-4">
          {sidebarItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-3 rounded hover:bg-gray-700 transition text-sm ${
                isActive(item.path) ? "bg-gray-700" : ""
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for Mobile */}
      <div
        className={`fixed inset-0 bg-black opacity-50 lg:hidden z-10 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-4">
          <button
            className="text-gray-800 lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FaBars />
          </button>
          <h2 className="text-lg font-semibold">Admin Dashboard</h2>
          <button
            className="flex text-sm font-semibold bg-red-500 p-1 px-3 rounded-md border border-red-600 items-center text-white hover:text-gray-100"
            onClick={logout}
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </header>

        {/* Main Section */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet /> {/* Renders child routes like "Manage Posts" */}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
