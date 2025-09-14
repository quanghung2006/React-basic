import React, { useState, useEffect } from "react";
import "./styles.css";

const enumTypeAction = {
    Default: 0, AddNew: 1, Update: 2
}


const Manage_Student = () => {
    const defaultFormData = () => {
        return {
            id: "",//id của sinh viên
            student_code: "",//mã sinh viên  
            name: "",//Tên sinh viên
            dob: "",// ngày sinh
            gender: "",//giới tính
            faculty: "",//khoa hoc sinh
            class: "",// lớp
            email: "",//thông tin
            phone: "",// số điện thoại
            address: "",//thao tác
        }
    }

    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false);

    // listStudent => danh sách học sinh sinh viên
    const [listStudent, setListStudent] = useState([]);
    // object data của modal
    const [formData, setFormData] = useState(defaultFormData);

    const [showModal, setShowModal] = useState(false);

    const [searchText, setSearchText] = useState("");
    const [selectedFaculty, setSelectedFaculty] = useState("");
    const [editingStudent, setEditingStudent] = useState(null);
    // 1 thêm mới, 2: upadate
    const [typeAction, setTypeAction] = useState(enumTypeAction.Default);

    // Add states for select options
    const [facultyList] = useState([
        { value: "1", name: "Công nghệ thông tin" },
        { value: "2", name: "Kinh tế" },
        { value: "3", name: "Ngoại ngữ" }
    ]);

    const [genderList] = useState([
        { value: "1", name: "Nam" },
        { value: "2", name: "Nữ" },
        { value: "0", name: "Khác" }
    ]);

    const [classList] = useState([
        { value: "1", name: "K62-CACLC1" },
        { value: "2", name: "K62-CACLC2" },
        { value: "3", name: "K62-CACLC3" }
    ]);




    const handleSearch = (e) => {
        debugger
        let value = e.target.value;
        if (value == '') {
            listStudent.forEach(item => {
              
                item.isShow = true;

            });
            setListStudent([...listStudent])
        }
        setSearchText(value);

    };

    const handleSearchClick = (e) => {
        debugger
        listStudent.forEach(item => {
            debugger
            item.isShow = item.student_code.includes(searchText);

        });
        setListStudent([...listStudent])

    };

    const handleFacultyChange = (e) => {

    };

    const handleInputChange = (fieldName, fieldValue) => {
        debugger

        //     if (fieldName == 'student_code') {
        //         formData.student_code = value;
        //     }
        //     if (fieldName == 'name') {
        //         formData.name = value;
        //     }
        //     if (fieldName == 'dob') {
        //         formData.dob = value;
        //     }
        //     if (fieldName == 'gender') {
        //         formData.gender = value;
        //     }
        //     if (fieldName == 'faculty') {
        //         formData.faculty = value;
        //     }
        //     if (fieldName == 'class') {
        //         formData.class = value;
        //     }
        //     if (fieldName == 'email') {
        //         formData.email = value;
        //     }
        //     if (fieldName == 'phone') {
        //         formData.phone = value;
        //     }


        //     //  formData[fieldName] = value;
        //     setFormData({ ...formData })
        //     // setFormData(prev => ({ ...prev, [name]: value }))
        //     console.log('formData-onchannge', formData)

        // };

        // const resetForm = () => {
        //     setFormData(defaultFormData)


        {

            let findeErrorIndex = errors.findIndex(x => x.fieldName == fieldName);
            if (findeErrorIndex != -1) {
                errors.splice(findeErrorIndex, 1)
            }

            if (fieldName == 'ma_lop') {
                if (fieldValue == '' || fieldValue.trim().length > 10) {
                    errors.push({
                        fieldName: fieldName,
                        textError: fieldValue == '' ? 'Dữ liệu không được để trống!' : 'không được vượt quá 10 ký tự'

                    });

                }
            } else {
                if (fieldValue == '' || fieldValue.trim().length > 10) {
                    errors.push({
                        fieldName: fieldName,
                        textError: fieldValue == '' ? 'Dữ liệu không được để trống!' : 'không được vượt quá 10 ký tự'
                    });
                }
            }
            formData[fieldName] = fieldValue;


            setFormData({ ...formData });


        };
    };
    //thêm mới sinh viên//
    const handleAddNewStudent = () => {
        debugger
        if (listStudent.length > 0) {
            const maxId = Math.max(...listStudent.map(students => students.id));
            formData.id = maxId + 1;
        }
        else {
            formData.id = 1;
        }

        setFormData(formData);
        setTypeAction(enumTypeAction.AddNew)
        setShowModal(true)
    }
    // lưu người mới 
    const SaveStudent = (type) => {
        debugger
        let isValidate = validateForm()
        if (isValidate == false) {
            return;
        }
        // thêm mới
        if (typeAction == enumTypeAction.AddNew) {
            let listStudentNew = listStudent;
            listStudentNew.push(formData)
            setListStudent([...listStudentNew])
            setShowModal(false)
            setTypeAction(enumTypeAction.Default)
            setFormData(defaultFormData)
        }
        // update
        if (typeAction === enumTypeAction.Update) {
            const listStudentNew = listStudent;
            debugger
            listStudentNew.forEach(item => {
                debugger
                if (item.id === formData.id) {

                    item.student_code = formData.student_code;
                    item.name = formData.name;
                    item.dob = formData.dob;
                    item.gender = formData.gender;
                    item.faculty = formData.faculty;
                    item.email = formData.email;
                    item.phone = formData.phone;
                    item.address = formData.address;
                }


            })
            setListStudent([...listStudentNew])
            setShowModal(false)
            setTypeAction(enumTypeAction.Default)
            setFormData(defaultFormData)
        }


    }

    const validateForm = () => {
        debugger
        let isValidate = true;


        const newErrors = [];

        let { name, dob, gender, faculty, email, phone, address } = formData;

        if (formData.name.trim().length > 10) {
            newErrors.push({
                fieldName: 'name',
                textError: ' không được vượt quá 10 ký tự`'
            });
            isValidate = false;
        }

        if (formData.dob.trim().length > 10) {
            newErrors.push({
                fieldName: 'dob',
                textError: 'không được vượt quá 10 ký tự'
            });
            isValidate = false;
        }

        if (formData.gender.trim().length > 10) {
            newErrors.push({
                fieldName: 'gender',
                textError: 'không được vượt quá 10 ký tự'
            });
            isValidate = false;
        }

        if (formData.faculty.trim().length > 10) {
            newErrors.push({
                fieldName: 'faculty',
                textError: 'không được vượt quá 10 ký tự'
            });
            isValidate = false;
        }

        if (formData.email.trim().length > 10) {
            newErrors.push({
                fieldName: 'email',
                textError: 'không được vượt quá 10 ký tự'
            });
            isValidate = false;
        }
        if (formData.phone.trim().length > 10) {
            newErrors.push({
                fieldName: 'phone',
                textError: 'không được vượt quá 10 ký tự'
            });
            isValidate = false;
        }
        if (formData.address.trim().length > 10) {
            newErrors.push({
                fieldName: 'address',
                textError: 'không được vượt quá 10 ký tự'
            });
            isValidate = false;
        }


        return isValidate;
    };

    const handleEdit = async (id_student) => {
        debugger
        //Tìm item (sinh viên) Cần update
        let findItem = listStudent.find(x => x.id == id_student);
        // let findItem = undefined;
        // listStudent.forEach((x) => {
        //     console.log('item', x)
        //     if (x.id == id_student) {
        //         findItem = x;
        //     }
        // })

        //Gán các giá trị vào from data để hiện thị tren modal
        // formData.student_code = findItem.student_code;

        formData.id = findItem.id;
        formData.student_code = findItem.student_code;
        formData.name = findItem.name;
        formData.dob = findItem.dob;
        formData.gender = findItem.gender;
        formData.faculty = findItem.faculty;
        formData.class = findItem.class;
        formData.email = findItem.email;
        formData.phone = findItem.phone;
        formData.address = findItem.address;

        // let formDatanew = findItem;

        //set (gán lại) lại giá trị      
        setFormData(formData)
        // bật modal để updata
        setShowModal(true)
        //set tyaction để biết modal  dùng trong trường hợp them mới hay updata
        setTypeAction(enumTypeAction.Update)
    }

    const handleDelete = (studentId) => {
        debugger
        console.log(">>>check student :", studentId)
        //b1: tu student id tìm duoc sinh vien trong lisstudent (tìm vị tri trong mảng)
        let studentFindIndex = listStudent.findIndex(x => x.id == studentId);
        if (studentFindIndex == -1) {
            alert("không tìm thấy student")
        }
        else {
            alert("student tại vị trí " + studentFindIndex)
            //b2: ấy duoc vi tri trong mang =>xóa khỏi mảng
            listStudent.splice(studentFindIndex, 1);

            setListStudent([...listStudent])


            //b3:set lại giá trị lisstudent
        }
    }


    const handleSubmit = (e) => {

    };

    const handleView = (student) => {
        if (!student) {
            setErrors("Không tìm thấy thông tin sinh viên");
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

    useEffect(() => {
        // Mock data =>Tạo fake data
        const mockStudents = [
            {
                id: 1,
                student_code: "24000839", // mã sinh viên
                name: "Đào Quang Hùng",// HỌ và tên
                dob: "14-11-2006",// năm sinh
                gender: "Nam",//giới tính 
                faculty: "CNTT",//khoa
                class: "K62-CACLC1", //lớp
                email: "hungsenpai2006@email.com", //email
                phone: "0866706151",// số ddien thoai
                isShow: true,//true (hiện thị), false(kh hiển thi)
            },

            {
                id: 2,
                student_code: "123456", // mã sinh viên
                name: "Đào Quang Hùng",// HỌ và tên
                dob: "14-11-2006",// năm sinh
                gender: "Nam",//giới tính 
                faculty: "CNTT",//khoa
                class: "K62-CACLC1", //lớp
                email: "hungsenpai2006@email.com", //email
                phone: "0866706151",// số ddien thoai
                isShow: true
            }
        ];
        // call api lấy danh sách sinh viên 

        setListStudent(mockStudents)

        debugger


    }, []);

    console.log("listStudent", listStudent)
    console.log("showModal", showModal)
    console.log('typeAction', typeAction)
    console.log('formData', formData)
    console.log('errors', errors)

    return (
        <div className="container-fluid p-4">
            {errors && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {errors}
                    <button type="button" className="btn-close" onClick={() => setErrors(null)}></button>
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
                        <button className="btn btn-primary" onClick={(handleSearchClick)}>
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
                        onClick={handleAddNewStudent}
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
                                    <th>id</th>
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
                                    listStudent?.map((item, j) => {
                                        if (item.isShow == true) {
                                            return (<tr key={j}>

                                                <td>{item.id}</td>
                                                <td>{item.student_code}</td>
                                                <td>{item.name}</td>
                                                <td>{item.dob}</td>
                                                <td>{item.gender}</td>
                                                <td>{item.faculty}</td>
                                                <td>{item.class}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>
                                                    <button onClick={() => handleView(item.id)}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-warning me-1"
                                                        title="Sửa thông tin"
                                                        onClick={() => handleEdit(item.id)}


                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        title="Xóa sinh viên"
                                                        onClick={() => handleDelete(item.id)}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>


                                            )

                                        }


                                    })
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className={`modal fade ${showModal == true ? 'show' : ''}`}
                style={{ display: showModal == true ? 'block' : 'none' }}
                tabIndex="-1">

                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus me-2" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                                {typeAction == enumTypeAction.Update ? 'Sửa thông tin sinh viên' : 'Thêm sinh viên mới'}
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                onClick={() => {
                                    setShowModal(false);

                                    setTypeAction(enumTypeAction.Default)
                                }}
                            ></button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={handleSubmit}>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">id sinh viên</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="id"
                                            value={formData.id}
                                            //  onChange={handleInputChange}
                                            required
                                            disabled={editingStudent !== null}
                                        />
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Mã sinh viên</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="idstudent_code"
                                            value={formData.student_code}
                                            onChange={(e) => {
                                                debugger
                                                console.log(e.target.value)
                                                handleInputChange('student_code', e.target.value)
                                            }}
                                            required

                                        />
                                        {
                                            errors?.map((item, j) => {
                                                if (item.fieldName == 'student_code') {
                                                    return (
                                                        <span style={{ color: "red", fontSize: "0.9em", marginTop: "4px", }}> {item.textError} </span>
                                                    )
                                                }
                                            })
                                        }



                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Họ và tên</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={(e) => {
                                                console.log(e.target.value)
                                                handleInputChange('name', e.target.value)
                                            }}
                                            required
                                        />
                                        {
                                            errors?.map((item, j) => {
                                                if (item.fieldName == 'name') {
                                                    return (
                                                        <span style={{ color: "red", fontSize: "0.9em", marginTop: "4px", }}> {item.textError} {item.textError} </span>
                                                    )
                                                }
                                            })
                                        }
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
                                            onChange={(e) => {
                                                debugger
                                                console.log(e.target.value)
                                                handleInputChange('dob', e.target.value)
                                            }}
                                            required
                                        />
                                        {
                                            errors?.map((item, j) => {
                                                if (item.fieldName == 'dod') {
                                                    return (
                                                        <text>{item.textError} </text>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Giới tính</label>
                                        <select
                                            className="form-select"
                                            name="gender"
                                            onChange={(e) => {
                                                debugger
                                                console.log(e.target.value)
                                                handleInputChange('gender', e.target.value)
                                            }}
                                            required
                                        >
                                            {
                                                errors?.map((item, j) => {
                                                    if (item.fieldName == 'gender') {
                                                        return (
                                                            <text>{item.textError} </text>
                                                        )
                                                    }
                                                })
                                            }
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
                                            onChange={(e) => {
                                                debugger
                                                console.log(e.target.value)
                                                handleInputChange('faculty', e.target.value)
                                            }}
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
                                            onChange={(e) => {
                                                debugger
                                                console.log(e.target.value)
                                                handleInputChange('class', e.target.value)
                                            }}
                                            required
                                        >
                                            {
                                                errors?.map((item, j) => {
                                                    if (item.fieldName == 'calss') {
                                                        return (
                                                            <text>{item.textError} </text>
                                                        )
                                                    }
                                                })
                                            }
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
                                        value={formData.email}
                                        onChange={(e) => {
                                            debugger
                                            console.log(e.target.value)
                                            handleInputChange('email', e.target.value)
                                        }}
                                        required
                                    />
                                    {
                                        errors?.map((item, j) => {
                                            if (item.fieldName == 'email') {
                                                return (

                                                    <span style={{ color: "red", fontSize: "0.9em", marginTop: "4px", }}> {item.textError} </span>
                                                )
                                            }
                                        })
                                    }
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Điện Thoại</label>
                                    <span style={{ color: "red", fontSize: "0.9em", marginTop: "4px", }}></span>

                                    <input
                                        className="form-control"
                                        value={formData.phone}
                                        onChange={(e) => {
                                            debugger
                                            console.log(e.target.value)
                                            handleInputChange('phone', e.target.value)
                                        }}
                                        required
                                    />
                                    {
                                        errors?.map((item, j) => {
                                            if (item.fieldName == 'phone') {
                                                return (
                                                    <text>{item.textError} </text>
                                                )
                                            }
                                        })
                                    }
                                </div>

                                <div className="text-end">
                                    <button
                                        type="button"
                                        className="btn btn-secondary me-2"
                                        onClick={() => {
                                            setShowModal(false);

                                        }}
                                    >
                                        Đóng
                                    </button>
                                    <button onClick={SaveStudent} type="button" className="btn btn-primary"> Lưu

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