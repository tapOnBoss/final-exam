import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
return (
    <>
    <Header />
    <Sidebar />
    <div className="main-content">{children}</div>
    </>
    );
};

export default Layout;
