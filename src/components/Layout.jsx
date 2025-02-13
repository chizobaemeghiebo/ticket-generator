import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-transparent w-[90%] shadow-md max-w-[700px] mx-auto p-5 lg:p-12 rounded-[40px] border-2 border-border2">
      {children}
    </div>
  );
};

export default Layout;
