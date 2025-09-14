// import logo from './logo.svg';
import { useEffect, useState } from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './Components/Page/Home/Home';
import Manage_Student from './Components/Page/Manage_Student/Manage_Student';
import Class_Manager from './Components/Page/Class_Manager/Class_Manager';
import Demo from'./Components/Page/Demo/DemoPage';


import './App.css';
import Dangnhap from "./Components/Page/Dangnhap/Dangnhap";
function App() {
  const [isAuthen, setIsAuthen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsAuthen(true)
    }, 500);
  }, [])


  return (
    <div className="main">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Trang admin</a>
        </div>
      </nav>

      <Router>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
              <div className="position-sticky">
                <ul className="nav flex-column">

                  <li className="nav-item">
                    <a className="nav-link active" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                    </svg>Trang chủ </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/quan-ly-lop-hoc"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-raised-hand" viewBox="0 0 16 16">
                      <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
                      <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                    </svg>Quản lý lớp học</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/quan-ly-sinh-vien"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-raised-hand" viewBox="0 0 16 16">
                      <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
                      <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                    </svg>Quản lý sinh vien</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/dang-nhap"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                      <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                    </svg>Đăng Nhập</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/demo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                    </svg>Đây Là Trang Demo</a>
                  </li>


                </ul>
              </div>
            </nav>

            {
              isAuthen == true?
                <main style={{ border: "1px solid red" }} className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                  <Routes>
                    <Route path="/dang-nhap" element={<Dangnhap isAuthen={true} />} />
                    <Route path="/quan-ly-lop-hoc" element={<Class_Manager />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/quan-ly-sinh-vien" element={<Manage_Student />} />
                    <Route path="/demo" element={<Demo />} />
                  </Routes>
                </main>
                :
                null
            }

          </div>
        </div>
      </Router>

    </div>
  );
}

export default App;
