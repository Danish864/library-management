import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../homepage.css";
import Sidebar from "./Sidebar";

function AddBook({ setLoginUser, user }) {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [copies, setCopies] = useState("");

  const newAddBook = async () => {
    let book = console.log(book);

    if (title == "") {
      alert("Please Enter Title");
    } else if (author == "") {
      alert("Please Enter Author Name");
    } else if (year == /^[0-9]+$/) {
      alert("Please Enter Year in Correct Format");
    } else if (copies == /^[1-9]+$/) {
      alert("Please Enter Copies in Digits");
    } 
    else if (copies == "0") {
      alert("Please Enter copies greater than 0");
    }
    else if (copies == "") {
      alert("Please Enter some value");
    } else {
      const res = await axios
        .post("http://localhost:9002/books/addbook", {
          title,
          author,
          year,
          copies,
        })
        .then((res) => {
          // setAddBook(res.data.addBook);
          console.log(res);
          alert(res.data.message);
          history.push("/allbooks");
        });
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
                      {user}
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

            <div className="mt-5">
              <div className="card col-md-6 m-auto p-3">
                <h2 style={{ textAlign: "center", marginBottom: 20 }}>
                  Add a New Book
                </h2>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Book title"
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ height: 60 }}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Author name"
                    className="form-control"
                    style={{ height: 60 }}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Year"
                    className="form-control"
                    // pattern="[0-9]"
                    style={{ height: 60 }}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Number of Copies"
                    className="form-control"
                    pattern="[0-9]"
                    style={{ height: 60 }}
                    onChange={(e) => setCopies(e.target.value)}
                  />
                </div>
                <button onClick={newAddBook} className="btn btn-primary ">
                  Add Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBook;
