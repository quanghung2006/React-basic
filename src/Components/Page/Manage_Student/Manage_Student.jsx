import React, { useState, useEffect } from "react";
import "./styles.css";

const Manage_Student = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [students, setStudents] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const [searchText, setSearchText] = useState("");
    const [selectedFaculty, setSelectedFaculty] = useState("");
    const [editingStudent, setEditingStudent] = useState(null);

    // Add states for select options
    const [facultyList] = useState([
        { value: "cntt", name: "Công nghệ thông tin" },
        { value: "kt", name: "Kinh tế" },
        { value: "nn", name: "Ngoại ngữ" }
    ]);

    const [genderList] = useState([
        { value: "nam", name: "Nam" },
        { value: "nu", name: "Nữ" },
        { value: "khac", name: "Khác" }
    ]);

    const [classList] = useState([
        { value: "K62-CACLC1", name: "K62-CACLC1" },
        { value: "K62-CACLC2", name: "K62-CACLC2" },
        { value: "K62-CACLC3", name: "K62-CACLC3" }
    ]);

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        dob: "",
        gender: "",
        faculty: "",
        class: "",
        email: "",
        phone: "",
        address: "",
    });




    useEffect(() => {
        // Mock data =>Tạo fake data
        const mockStudents = [
            {
                id: "24000839", // mã sinh viên
                name: "Đào Quang Hùng",// HỌ và tên
                dob: "14-11-2006",// năm sinh
                gender: "Nam",//giới tính 
                faculty: "CNTT",//khoa
                class: "K62-CACLC1", //lớp
                email: "hungsenpai2006@email.com", //email
                phone: "0866706151",// số ddien thoai
            }
        ];
        // call api lấy danh sách sinh viên 

        setStudents(mockStudents)




    }, []);

    const handleSearch = (e) => {

    };

    const handleFacultyChange = (e) => {

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        formData[name] = value;
        setFormData({ ...formData })
        // setFormData(prev => ({ ...prev, [name]: value }))
        console.log('formData-onchannge', formData)

    };

    const resetForm = () => {

    };

    const handleAddNew = () => {
        debugger
        let abc = true;

        setShowModal(abc)

        if (editingStudent) {

        }




    };

    const handleEdit = (student) => {

    };

    const handleDelete = (studentId) => {

    };

    const handleSubmit = (e) => {

    };

    const handleView = (student) => {
        if (!student) {
            setError("Không tìm thấy thông tin sinh viên");
            return;
        }

        alert(`
            Thông tin chi tiết sinh viên:
            Mã SV: ${student.id}
            Họ tên: ${student.name}
            Ngày sinh: ${student.dob}
            Giới tính: ${student.gender === 'nam' ? 'Nam' : student.gender === 'nu' ? 'Nữ' : 'Khác'}
            Khoa: ${student.faculty === 'CNNT' ? 'Công nghệ thông tin' :
                student.faculty === 'kt' ? 'Kinh tế' : 'Ngoại ngữ'}
            Lớp: ${student.class}
            Email: ${student.email}
            Điện thoại: ${student.phone}
        `);
    };

    console.log("students", students)

    return (
        <div className="container-fluid p-4">
            {error && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" className="btn-close" onClick={() => setError(null)}></button>
                </div>
            )}

            {loading && (
                <div className="text-center my-4">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tìm kiếm sinh viên..."
                            value={searchText}
                            onChange={handleSearch}
                        />
                        <button className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="col-md-6 text-end">
                    <select
                        className="form-select d-inline-block w-auto me-2"
                        value={selectedFaculty}
                        onChange={handleFacultyChange}
                    >
                        <option value="">Lọc theo khoa</option>
                        {facultyList.map((faculty) => (
                            <option key={faculty.value} value={faculty.value}>
                                {faculty.name}
                            </option>
                        ))}
                    </select>
                    <button
                        className="btn btn-success"
                        onClick={handleAddNew}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus me-1" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        Thêm sinh viên
                    </button>
                </div>
            </div>


            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h5 className="mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list me-2" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        Danh sách sinh viên
                    </h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Mã SV</th>
                                    <th>Họ và tên</th>
                                    <th>Ngày sinh</th>
                                    <th>Giới tính</th>
                                    <th>Khoa</th>
                                    <th>Lớp</th>
                                    <th>Email</th>
                                    <th>Điện thoại</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    students.map((item, j) => {
                                        debugger
                                        return (<tr key={j}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.dob}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.faculty}</td>
                                            <td>{item.class}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <button
                                                    className="btn btn-sm btn-info me-1"
                                                    title="Xem chi tiết"
                                                    onClick={() => handleView({ id: 'SV001' })}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-warning me-1"
                                                    title="Sửa thông tin"
                                                    onClick={() => handleEdit({ id: 'SV001' })}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    title="Xóa sinh viên"
                                                    onClick={() => handleDelete('SV001')}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>


                                        )
                                    })
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className={`modal fade ${showModal == true ? 'show' : ''}`}
                style={{ display: showModal ? 'block' : 'none' }}
                tabIndex="-1">

                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus me-2" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                                {editingStudent ? 'Sửa thông tin sinh viên' : 'Thêm sinh viên mới'}
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                onClick={() => {
                                    setShowModal(false);
                                    resetForm();
                                }}
                            ></button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Mã sinh viên</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="id"
                                            value={formData.id}
                                            onChange={handleInputChange}
                                            required
                                            disabled={editingStudent !== null}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Họ và tên</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Ngày sinh</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="dob"
                                            value={formData.dob}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Giới tính</label>
                                        <select
                                            className="form-select"
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Chọn giới tính</option>
                                            {genderList.map((gender) => (
                                                <option key={gender.value} value={gender.value}>
                                                    {gender.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Khoa</label>
                                        <select
                                            className="form-select"
                                            name="faculty"
                                            value={formData.faculty}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Chọn khoa</option>
                                            {facultyList.map((faculty) => (
                                                <option key={faculty.value} value={faculty.value}>
                                                    {faculty.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Lớp</label>
                                        <select
                                            className="form-select"
                                            name="class"
                                            value={formData.class}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Chọn lớp</option>
                                            {classList.map((cls) => (
                                                <option key={cls.value} value={cls.value}>
                                                    {cls.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Nhập email"
                                        onChange={(e) => handleInputChange(e, 'email')}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Điện Thoại</label>
                                    <input
                                        className="form-select"
                                        onChange={(e) => handleInputChange(e, 'phone')}
                                        required
                                    />
                                </div>

                                <div className="text-end">
                                    <button
                                        type="button"
                                        className="btn btn-secondary me-2"
                                        onClick={() => {
                                            setShowModal(false);
                                            resetForm();
                                        }}
                                    >
                                        Đóng
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        {editingStudent ? 'Cập nhật' : 'Lưu thông tin'}
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal-backdrop fade show"></div>
            )}

        </div>
    );
};

export default Manage_Student;