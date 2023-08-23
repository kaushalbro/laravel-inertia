import Sidebar from "@/Components/Sidebar/Sidebar";
import Layout from "@/Layouts/Layout";
import "./Dashboard.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Dashboard({ children }) {
    return (
        <Layout>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="main_container container-fluid">
                        {children}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
