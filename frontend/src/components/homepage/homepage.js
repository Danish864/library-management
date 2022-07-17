import React, { useState, useEffect } from "react";
import "./homepage.css";
import axios from "axios";
import Sidebar from "./Sidebar/Sidebar";

const Homepagee = ({ setLoginUser, user }) => {
  const [books, setBooks] = useState([]);
  const [students, setStudents] = useState([]);
  const tbooks = async () => {
    const response = await axios.get("http://localhost:9002/books/count/");

    setBooks(response.data);
  };

  const tStudents = async () => {
    const res = await axios.get("http://localhost:9002/user/count/");

    setStudents(res.data);
  };

  const getAllBooks=async()=>{
    const res = await axios.get("http://localhost:9002/books/allbook");
    console.log(res.data);
    console.log(res.data.length);
  };

  useEffect(() => {
    tbooks();
    tStudents();
    getAllBooks();
  }, []);

  return (
    <>
      <div className="d-flex dashBoard-holder w-100">
        <Sidebar setLoginUser={setLoginUser} />
        <div id="page-content-wrapper" className="position-relative">
          <div className="dashboard-header-fixed ">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
              <div className="d-flex align-items-center">
                <i
                  className="fas fa-align-left primary-text fs-4 me-3"
                />
                <h2 className="fs-2 m-0">Dashboard</h2>
              </div>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle second-text fw-bold"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fas fa-user me-2" />
                      {user}
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li> 
                        <a className="dropdown-item curser" onClick={() => setLoginUser({})}>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container-fluid px-4">
              <div className="row g-3 my-2">
                <div className="col-md-3">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">{books}</h3>
                      <p className="fs-5">Total Books</p>
                    </div>
                    <i class="fa-solid fa-book fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">{students}</h3>
                      <p className="fs-5">Total Students</p>
                    </div>
                    <i className="fa-solid fa-book-medical fs-1 primary-text border rounded-full secondary-bg p-3" />
                  </div>
                </div>
                {/* <div className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">3899</h3>
                  <p className="fs-5">Delivery</p>
                </div>
                <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">%25</h3>
                  <p className="fs-5">Increase</p>
                </div>
                <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3" />
              </div>
            </div> */}
              </div>
              <div className="row my-5">
                <h3 className="fs-4 mb-3">Recent Issued Books</h3>
                <div className="col-12 table-holder">
                  <table className="dashboard-table table bg-white rounded shadow-sm  table-hover">
                    <thead>
                      <tr>
                        <th scope="col" width={50}>
                          #
                        </th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Issued Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Harry Potter</td>
                        <td>Jonny</td>
                        <td>12-4-2022</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepagee;
