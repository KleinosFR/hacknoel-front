import React from "react";
import Header from "./Header";
import Footers from "./Footers";

function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footers />
        </>
    );
}

export default Layout;
