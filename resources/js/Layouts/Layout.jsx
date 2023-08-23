import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Sidebar from "@/Components/Sidebar/Sidebar";
import React from "react";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <Sidebar />
            {children}
            <Footer />
        </div>
    );
}
