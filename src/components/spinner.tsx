import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-6 w-6 border-t-1 border-b-2 border-white"></div>
    </div>
  );
};

export default Spinner;
