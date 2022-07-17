import React from "react";
import "../homepage.css";

export default function Sidebar({ setLoginUser }) {
  
  return (
    <>
      <div className="bg-black sidebar" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
          <i className="fas fa-user-secret me-2" />
          Library Management
        </div>
        <div className="list-group hover-effect list-group-flush my-3 mx-auto">
          <a
            href="/dashboard"
            className="list-group-item hover-effect bg-transparent active fs-4 my-2"
          >
            <i className="fas fa-tachometer-alt me-2" />
            Dashboard
          </a>
          <a
            href="/allbooks"
            className="list-group-item bg-transparent text-white fs-4 my-2"
          >
            <i className="fa-solid fa-book me-2"></i>
            All Books
          </a>
          <a
            href="/addbook"
            className="list-group-item bg-transparent text-white fs-4 my-2"
          >
            <i className="fa-solid fa-book-medical me-2"></i>
            Add Book
          </a>
          <a
            href="/issue"
            className="list-group-item bg-transparent text-white fs-4 my-2"
          >
            <i className="fa-solid fa-book-medical me-2"></i>
            Issue Book
          </a>
          <div
            className="list-group-item bg-transparent text-danger fw-bold curser fs-2 my-2"
            onClick={() => setLoginUser({})}
          >
            <i className="fas fa-power-off me-2" />
            Logout
          </div>
        </div>
      </div>
    </>
  );
}
