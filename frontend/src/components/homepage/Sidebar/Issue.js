import React, { useState, useEffect } from "react";
import axios from "axios";
import "../homepage.css";
import Sidebar from "./Sidebar";

function Issue({ setLoginUser, user }) {
  const [bookIssue, setBookIssue] = useState([]);

  const getRequest = async () => {
    const res = await axios.get("http://localhost:9002/books/issue-bookRequest");
    setBookIssue(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <>
      <div className="d-flex dashBoard-holder w-100">
        <Sidebar setLoginUser={setLoginUser} />
        <div id="page-content-wrapper" className="position-relative">
          <div className="dashboard-header-fixed ">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
              <div className="d-flex align-items-center">
                <i className="fas fa-align-left primary-text fs-4 me-3" />
                <h2 className="fs-2 m-0">Dashboard</h2>
              </div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle second-text fw-bold"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fas fa-user me-2" />
                      {user.name}
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a
                          className="dropdown-item curser"
                          onClick={() => setLoginUser({})}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            
            <div className="col-12 table-holder ps-4">
                <table className="dashboard-table table bg-white rounded shadow-sm  table-hover ">
                  <thead>
                    <tr>
                      <th scope="col" width={50}>
                        #
                      </th>
                      <th scope="col">Book Name</th>
                      <th scope="col">Author</th>
                      <th scope="col">Publish Year</th>
                      {user && user.isAdmin ? <th scope="col">Issue Request</th> : <th scope="col">Assign To</th> }
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
        </div>
        </div>
        </div>
    </>
  );
}

export default Issue;
