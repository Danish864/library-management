import React, { useState, useEffect } from "react";

import axios from "axios";
import "../homepage.css";
import Sidebar from "./Sidebar";

function Allbooks({ setLoginUser, user }) {
  const [book, setBook] = useState([]);
  const [searchBook, setSearchBook] = useState("");
  console.log(user);

  const getAllBooks = async () => {
    const res = await axios.get("http://localhost:9002/books/allbook");
    setBook(res.data);
    console.log(res.data);
    console.log(res.data.length);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const issueToUser = async (bookId, userId) => {
    try {
      const response = await axios.post(
        "http://localhost:9002/books/issue-bookRequest",
        { bookId, userId }
      );
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

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
            <div className="row tablebook m-2">
              <h3 className="fs-4 mb-3">All Books List</h3>

              <div className="pb-3">
                <input
                  style={{
                    width: "350px",
                    height: "50px",
                    "padding-left": "20px",
                  }}
                  type="text"
                  placeholder="Search by Book Name"
                  className="pl-3"
                  onChange={(e) => {
                    setSearchBook(e.target.value);
                  }}
                />
              </div>

              <div className="col-12 table-holder">
                <table className="dashboard-table table bg-white rounded shadow-sm  table-hover ">
                  <thead>
                    <tr>
                      <th scope="col" width={50}>
                        #
                      </th>
                      <th scope="col">Book Name</th>
                      <th scope="col">Author</th>
                      <th scope="col">Copies</th>
                      <th scope="col">Publish Year</th>
                      <th scope="col">Assign</th>
                    </tr>
                  </thead>
                  <tbody>
                    {book
                      .filter((item) => {
                        if (searchBook == "") {
                          return item;
                        } else if (
                          item.title
                            .toLowerCase()
                            .includes(searchBook.toLowerCase())
                        ) {
                          return item;
                        }
                      })
                      .map((item, i) => {
                        return (
                          <tr>
                            <th scope="row">{i + 1}</th>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>{item.copies}</td>
                            <td>{item.year}</td>
                            <td>
                              <button
                                onClick={() => issueToUser(item._id, user._id)}
                              >
                                Issue
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Allbooks;
