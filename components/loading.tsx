import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="spinner border-t-4 border-blue-500 rounded-full h-12 w-12 animate-spin"></div>
    </div>
  );
};

export default Loading;
