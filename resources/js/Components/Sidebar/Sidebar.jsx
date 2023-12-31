import React from "react";
import "./Sidebar.css";

function Sidebar() {
    return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* <!-- Brand Logo --> */}
                <a href="/dashboard" className="brand-link">
                    <img src="/dist/img/AdminLTELogo.png" className="brand-image img-circle elevation-3 " alt="fdf"  />
                                      <span className="brand-text font-weight-light">Admin Panel</span>
                </a>

                {/* <!-- Sidebar --> */}
                <div className="sidebar">
                    {/* <!-- Sidebar user panel (optional) --> */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img
                                src="dist/img/user2-160x160.jpg"
                                className="img-circle elevation-2"
                                alt="User Image"
                            />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">
                                Kaushal ghimire
                            </a>
                        </div>
                    </div>

                    {/* <!-- SidebarSearch Form --> */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input
                                className="form-control form-control-sidebar"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Sidebar Menu --> */}
                    <nav className="sidebar_nav mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                      
                            <li className="nav-item menu-open">
                                <a href="#" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Starter Pages
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link active">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Active Page</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Inactive Page</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Simple Link
                                        <span className="right badge badge-danger">
                                            New
                                        </span>
                                    </p>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Simple Link
                                        <span className="right badge badge-danger">
                                            New
                                        </span>
                                    </p>
                                </a>
                            </li> <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Simple Link
                                        <span className="right badge badge-danger">
                                            New
                                        </span>
                                    </p>
                                </a>
                            </li> <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Simple Link
                                        <span className="right badge badge-danger">
                                            New
                                        </span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Simple Link
                                        <span className="right badge badge-danger">
                                            New
                                        </span>
                                    </p>
                                </a>
                            </li> <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Simple Link
                                        <span className="right badge badge-danger">
                                            New
                                        </span>
                                    </p>
                                </a>
                            </li> <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Simple Link
                                        <span className="right badge badge-danger">
                                            New
                                        </span>
                                    </p>
                                </a>
                            </li> <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Simple Link
                                        <span className="right badge badge-danger">
                                            New
                                        </span>
                                    </p>
                                </a>
                            </li> <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Simple Link
                                        <span className="right badge badge-danger">
                                            New
                                        </span>
                                    </p>
                                </a>
                            </li> <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Simple Link
                                        <span className="right badge badge-danger">
                                            New
                                        </span>
                                    </p>
                                </a>
                            </li> <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        kaushal
                                        <span className="right badge badge-danger">
                                            New
                                        </span>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- /.sidebar-menu --> */}
                </div>
                {/* <!-- /.sidebar --> */}
            </aside>
    );
}
export default Sidebar;
