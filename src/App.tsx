import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout.tsx";
import AdminDashboardLayout from "./layout/dashboard-layout.tsx";
import BlogPosts from "./pages/admin/blog-posts.tsx";
import AdminDashboard from "./pages/admin/dashboard.tsx";
import AdminLoginPage from "./pages/admin/login.tsx";
import Blog from "./pages/blog.tsx";
import Business from "./pages/bloom/business/business.tsx";
import Reseller from "./pages/bloom/reseller/reseller.tsx";
import DeleteAccount from "./pages/delete-account.tsx";
import {
  PrivacyPolicyBusinesses,
  PrivacyPolicyResellers,
  RefundPolicy,
  TermsOfUseBusinesses,
  TermsOfUseResellers,
} from "./pages/legal";
import Home from "./pages/page.tsx";
import PrivacyPolicy from "./pages/privacy-policy.tsx";
import AdminDashboardRoute from "./routes/protected/AdminDashboardRoute.tsx";
import AdminRoute from "./routes/protected/AdminRoute.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        // { path: "/bloom", element: <Bloom /> },`
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
        // { path: "terms-of-use", element: <TermsOfUse /> },
        {
          path: "/legal/bloom/refund-policy",
          element: <RefundPolicy />,
        },
        {
          path: "/legal/bloom/businesses/terms-of-use",
          element: <TermsOfUseBusinesses />,
        },
        {
          path: "/legal/bloom/businesses/privacy-policy",
          element: <PrivacyPolicyBusinesses />,
        },
        {
          path: "/legal/bloom/resellers/terms-of-use",
          element: <TermsOfUseResellers />,
        },
        {
          path: "/legal/bloom/resellers/privacy-policy",
          element: <PrivacyPolicyResellers />,
        },

        // { path: "/delete-all", element: <CodeSos /> },
        { path: "/bloom/account/delete", element: <DeleteAccount /> },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
    {
      path: "/bloom/resellers",
      element: <Reseller />,
    },
    {
      path: "/bloom/businesses",
      element: <Business />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/admin",
      element: <AdminRoute />,
      children: [
        {
          path: "login",
          element: <AdminLoginPage />,
        },
        {
          path: "",
          element: (
            <AdminDashboardRoute>
              <AdminDashboardLayout />
            </AdminDashboardRoute>
          ),
          children: [
            {
              path: "dashboard",
              element: <AdminDashboard />,
            },
            {
              path: "posts",
              element: <BlogPosts />,
            },
          ],
        },
        { path: "*", element: <Navigate to="dashboard" /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
