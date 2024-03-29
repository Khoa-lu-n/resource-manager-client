import React from "react";

import { Link } from "react-router-dom";
import { FileText, Home, Database } from "react-feather";

import "./menu.css";

function Menu() {
  const activeRoute = window.location.pathname;

  return (
    <ul className="nav flex-column nav-pills nav-fill nav-menu">
      <li className="nav-item">
        <Link
          className={`nav-link ${
            activeRoute.match(/\/home\/resource-manage/) ? "active" : ""
          }`}
          to={"/home/resource-manage"}
        >
          <Home sccize={20} />
          <span>Resource Manage</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${
            activeRoute.match(/\/dashboard\/devices/) ? "active" : ""
          }`}
          to={"/dashboard/devices"}
        >
          <Database size={20} />
          <span>Quản lý các thiết bị, đồ dùng</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${
            activeRoute.match(/\/dashboard\/delivery_reports/) ? "active" : ""
          }`}
          to={"/dashboard/delivery_reports"}
        >
          <FileText size={20} />
          <span>Quản lý biên bản bàn giao</span>
        </Link>
      </li>
    </ul>
  );
}
export default Menu;
