import { PiBugBeetleBold } from "react-icons/pi";

const AdminDashboard = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <h1 className="text-4xl inline-flex items-center gap-x-5 font-semibold space-x-2">
        <span>
          <PiBugBeetleBold />
        </span>
        Welcome Beetle Admin
      </h1>
    </div>
  );
};

export default AdminDashboard;
