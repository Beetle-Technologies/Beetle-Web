import { Outlet } from "react-router-dom";

const AdminRoute = () => {
  // const [accessKey, setAccessKey] = useState<string | null>(null);
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // useEffect(() => {
  //   const storedAccessKey = localStorage.getItem("accessKey");
  //   if (storedAccessKey) {
  //     setAccessKey(JSON.parse(storedAccessKey));
  //   } else {
  //     setIsModalOpen(true);
  //   }
  // }, []);

  // const handleModalSubmit = (value: string) => {
  //   localStorage.setItem("accessKey", JSON.stringify(value));
  //   setAccessKey(value);
  //   setIsModalOpen(false);
  // };

  // const handleModalClose = () => {
  //   setIsModalOpen(false);
  // };

  // if (
  //   accessKey !== null &&
  //   accessKey !== import.meta.env.VITE_ADMIN_ACCESS_KEY
  // ) {
  //   alert("wrong access key");
  //   localStorage.removeItem("accessKey");
  //   return <Navigate to="/" />;
  // }

  return (
    <>
      <Outlet />
      {/* <AccessKeyModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      /> */}
    </>
  );
};

export default AdminRoute;
