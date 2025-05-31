import React from "react";

const Home = () => {
  return <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#">Trang chủ</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Dịch vụ</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Liên hệ</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

      
            <header className="bg-light text-center py-5">
                <div className="container">
                    <h1 className="fw-bold">Chào mừng đến với Website!</h1>
                    <p className="lead">Khám phá những dịch vụ tuyệt vời của chúng tôi</p>
                    <button className="btn btn-primary btn-lg">Bắt đầu ngay</button>
                </div>
            </header>

         
            <section className="container my-5">
                <h2 className="text-center">Dịch vụ của chúng tôi</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card p-3">
                            <h3>Thiết kế Web</h3>
                            <p>Dịch vụ thiết kế website chuyên nghiệp.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3">
                            <h3>Marketing Online</h3>
                            <p>Chiến lược quảng cáo giúp doanh nghiệp phát triển.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3">
                            <h3>Phát triển phần mềm</h3>
                            <p>Giải pháp phần mềm tùy chỉnh theo nhu cầu.</p>
                        </div>
                    </div>
                </div>
            </section>

       
            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; ĐỜI BUỒN JQK</p>
            </footer>


    </div>
  </>;
};

export default Home;