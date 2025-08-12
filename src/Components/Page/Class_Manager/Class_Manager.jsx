import React, { useState, useEffect } from "react";

const enumTypeAction = {
  Default: 0, AddNew: 1, Update: 2
}

export default function ClassManager() {
  const [listClass, setListClass] = useState([]);
  const [formData, setFormData] = useState({ id: '', ma_lop: '', ten_lop: '', khoa_hoc: '', thay_co_chu_nhiem: '', giao_vien_tro_giang: '' })

  const [showModal, setShowModal] = useState(false);
  const [typeAction, setTypeAction] = useState(0);//0 là mặc định, 1 thêm mới, 2 update

  const [errors, setErrors] = useState([
    // { fieldName: 'ma_lop', textError: ' Dữ liệu không được để trống !' }
  ])



  // lưu lớp mới
  const handleInputChange = (fieldName, fieldValue) => {
    // ma_lop,ten_lop
    debugger
    let findeErrorIndex = errors.findIndex(x => x.fieldName == fieldName)
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

  const saveData = () => {
    let abc = validateForm();


    if (listClass.length > 0) {


      const maxId = Math.max(...listClass.map(item => item.id));
      formData.id = maxId + 1;
    }
    else {
      formData.id = 0;

    }
    listClass.push(formData);
    setShowModal(false);
    function_SetDefault_FormData();
    


  }

  const saveDatav2 = () => {
    debugger


    //tư id của fomdata ,duyệt qua từng đối tượng của list className ,nếu id = nhau thì update 
    listClass.forEach(item => {
      debugger
      if (item.id == formData.id) {
        item.ten_lop = formData.ten_lop
        item.ma_lop = formData.ma_lop
        item.giao_vien_tro_giang = formData.giao_vien_tro_giang
        item.khoa_hoc = formData.khoa_hoc
        item.thay_co_chu_nhiem = formData.thay_co_chu_nhiem
      }
    })
    function_SetDefault_FormData();
    setListClass([...listClass])
    setShowModal(false);
  }

  const function_SetDefault_FormData = () => {
    let formDataDefault = { id: '0', ma_lop: '', ten_lop: '', khoa_hoc: '', thay_co_chu_nhiem: '', giao_vien_tro_giang: '' }
    setFormData({ ...formDataDefault });

    console.log('formData', formData)
  }
  //chỉnh sửa 
  const handleClickEdit = (id) => {
    debugger

    let findItem = listClass.find(x => x.id == id);

    if (findItem != undefined) {
      formData.id = findItem.id;
      formData.ma_lop = findItem.ma_lop;
      formData.ten_lop = findItem.ten_lop;
      formData.thay_co_chu_nhiem = findItem.thay_co_chu_nhiem;
      formData.giao_vien_tro_giang = findItem.giao_vien_tro_giang;

      setFormData({ ...formData })
      setShowModal(true)
      setTypeAction(2)

    }
  }

  // xóa vị trí
  const handleDelete = (listClassId) => {
    debugger
    let confirmed = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (confirmed == true) {
      // viét   code xóa tại đây
      let fomdataFindIndex = listClass.findIndex(x => x.id == listClassId);
      if (fomdataFindIndex == -1) {
        alert("khoong tim thay")
      }
      else {
        debugger
        listClass.splice(fomdataFindIndex, 1);
        setListClass([...listClass])
      }
    }
    else {
      return;
    }

  }
  // Hàm kiểm tra dữ liệu
  const validateForm = () => {
    debugger
    let isValidate = true;

    const newErrors = [];

    let { ma_lop, ten_lop, khoa_hoc, thay_co_chu_nhiem, giao_vien_tro_giang } = formData;
    // if (fieldValue == '' || fieldValue.trim().length > 10) {

    if (formData.ma_lop.trim().length > 10 || formData.ma_lop == '') {
      newErrors.push({
        fieldName: 'ma_lop',
        textError: 'không thể lưu khi ô trống '
      });
      isValidate = false;
    }

    if (formData.ten_lop.trim().length > 10 || formData.ten_lop == '') {
      newErrors.push({
        fieldName: 'ten_lop',
        textError: 'không thể lưu khi ô trống '
      });
      isValidate = false;
    }

    if (formData.khoa_hoc.trim().length > 10 || formData.khoa_hoc=='') {
      newErrors.push({
        fieldName: 'khoa_hoc',
        textError: 'không thể lưu khi ô trống '
      });
      isValidate = false;
    }

    if (formData.thay_co_chu_nhiem.trim().length > 10 || formData.thay_co_chu_nhiem=='') {
      newErrors.push({
        fieldName: 'thay_co_chu_nhiem',
        textError:  'không thể lưu khi ô trống '
      });
      isValidate = false;
    }

    if (formData.giao_vien_tro_giang.trim().length > 10 || formData.giao_vien_tro_giang=='') {
      newErrors.push({
        fieldName: 'giao_vien_tro_giang',
        textError: 'không thể lưu khi ô trống '
        
      })
     
      isValidate = false;
    }

    setErrors([])
    setFormData(formData)
  
  };


  useEffect(() => {
    debugger
    let listData = [
      { id: 1, ma_lop: 'L01', ten_lop: 'CNTT A', khoa_hoc: '2022-2026', thay_co_chu_nhiem: 'Thầy Nam', giao_vien_tro_giang: 'huy' },
      { id: 2, ma_lop: 'L02', ten_lop: 'khoa CNTP', khoa_hoc: '2021-2025', thay_co_chu_nhiem: 'Thầy Nam', giao_vien_tro_giang: 'huy' },
      { id: 3, ma_lop: 'L03', ten_lop: 'ABC', khoa_hoc: '2023-2027', thay_co_chu_nhiem: 'Thầy Nam', giao_vien_tro_giang: 'huy' },
    ]
    setListClass(listData)

    // [] =>CHẠY LẦN ĐẦU VÀO PAPE  
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list me-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path></svg>Danh sách lớp học</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Mã lớp</th>
                  <th>Tên lớp</th>
                  <th>khóa học</th>
                  <th>Thầy cô chủ nhiêmn</th>
                  <th>Trợ Giảng</th>
                  <th>Tùy Chọn</th>

                </tr>
              </thead>
              <tbody>

                {
                  listClass?.map((item, j) => {

                    return (<tr key={j}>

                      <td>{item.id}</td>
                      <td>{item.ma_lop}</td>
                      <td>{item.ten_lop}</td>
                      <td>{item.khoa_hoc}</td>
                      <td>{item.thay_co_chu_nhiem}</td>
                      <td>{item.giao_vien_tro_giang}</td>

                      <td>
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path></svg></button>
                        <button
                          onClick={() => {
                            debugger
                            handleClickEdit(item.id)
                          }}
                          className="btn btn-sm btn-warning me-1" title={item.ten_lop}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path></svg></button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}

                          title="Xóa sinh viên"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                          </svg>
                        </button>
                      </td>
                    </tr>
                    )

                  })
                }

                <button
                  className="btn btn-success"
                  onClick={() => {

                    setShowModal(true)
                    setTypeAction(1)
                    setFormData({ ...formData })
                  }}
                // onClick={handleAddNewManager}

                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus me-1" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                  Thêm lớp học

                </button>



              </tbody>
            </table>
          </div></div>
      </div>

      {
        showModal == true ? (
          <div className={'modal fade show'}
            style={{ display: "block" }}
            tabIndex="-1">


            <div className="modal-dialog modal-lg">
              <div className="modal-content">

                <div className="modal-header bg-primary text-white">
                  <h5 className="modal-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus me-2" viewBox="0 0 16 16">
                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                    </svg>

                    {
                      typeAction == 1 ? 'Thêm mới lớp học' : 'cập nhập lớp học'
                    }

                    {/* {typeAction == enumTypeAction.Update ? 'Sửa thông tin sinh viên' : 'Thêm sinh viên mới'} */}
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => {
                      setShowModal(false)
                    }}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Mã lớp  </label>
                      <span style={{ color: "red", fontSize: "0.9em", marginTop: "4px", }}>
                        <input
                          name="ma_lop"
                          title="Mã lớp"
                          placeholder="Nhập mã lớp"
                          className="form-control"
                          value={formData.ma_lop}

                          onChange={(e) => {
                            debugger
                            console.log(e.target.value)
                            handleInputChange('ma_lop', e.target.value)


                          }}

                          required
                        />

                        {
                          errors?.map((item, j) => {
                            debugger
                            if (item.fieldName == 'ma_lop') {
                              return (
                                <text>{item.textError} </text>
                              )
                            }
                          })
                        }


                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">

                      <label className="form-label"> Tên lớp  </label>
                      <span style={{ color: "red", fontSize: "0.9em", marginTop: "4px", }}>

                        <input

                          name="ten_lop"
                          title="Mã Tên lớp "
                          placeholder="Nhập Tên Lớp"
                          className="form-control"
                          value={formData.ten_lop}

                          onChange={(e) => {
                            debugger
                            { }
                            console.log(e.target.value)
                            handleInputChange('ten_lop', e.target.value)
                          }}

                          required
                        />

                        {
                          errors?.map((item, j) => {
                            if (item.fieldName == 'ten_lop') {
                              return (
                                <text>{item.textError} </text>
                              )
                            }
                          })
                        }
                      </span>
                    </div>
                  </div>



                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label"> Khóa Học  </label>
                      <span style={{ color: "red", fontSize: "0.9em", marginTop: "4px", }}>
                        <input
                          name="khoa_hoc"
                          title="Khóa Học "
                          placeholder="Nhập Khóa Học"
                          className="form-control"
                          value={formData.khoa_hoc}
                          onChange={(e) => {
                            debugger
                            console.log(e.target.value)
                            handleInputChange('khoa_hoc', e.target.value)
                          }}
                          required
                        />
                        {
                          errors?.map((item, j) => {
                            if (item.fieldName == 'khoa_hoc') {
                              return (
                                <text>{item.textError} </text>
                              )
                            }
                          })
                        }
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label"> Thầy cô chủ nhiệm  </label>
                      <span style={{ color: "red", fontSize: "0.9em", marginTop: "4px", }}>

                        <input
                          name="thay_co_chu_nhiem"
                          title="Thầy cô chủ nhiệm c "
                          placeholder="Nhập thầy cô "

                          className="form-control"
                          value={formData.thay_co_chu_nhiem}
                          onChange={(e) => {
                            debugger
                            console.log(e.target.value)
                            handleInputChange('thay_co_chu_nhiem', e.target.value)
                          }}
                          required
                        />
                        {
                          errors?.map((item, j) => {
                            if (item.fieldName == 'thay_co_chu_nhiem') {
                              return (
                                <text>{item.textError} </text>
                              )
                            }
                          })
                        }
                      </span>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label"> Người Trợ Giảng  </label>
                      <span style={{ color: "red", fontSize: "0.9em", marginTop: "4px", }}>
                        <input
                          name="giao_vien_tro_giang "
                          title=" giáo viên trợ giảng "
                          placeholder="giáo viên trợ giảng"
                          className="form-control"
                          value={formData.giao_vien_tro_giang}
                          onChange={(e) => {
                            debugger
                            console.log(e.target.value)
                            handleInputChange('giao_vien_tro_giang', e.target.value)
                          }}
                          required
                        />
                        {
                          errors?.map((item, j) => {
                            if (item.fieldName == 'giao_vien_tro_giang') {
                              return (
                                <text>{item.textError} </text>
                              )
                            }
                          })
                        }
                      </span>
                    </div>
                  </div>


                </div>




                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"

                    onClick={
                      () => {
                        debugger
                        function_SetDefault_FormData()
                        setShowModal(false)
                      }
                    } >
                    Đóng
                  </button>

                  <button
                    onClick={() => {
                      debugger
                      if (typeAction == 1) {
                        saveData()

                      }
                      else {
                        if (typeAction == 2) {
                          saveDatav2()
                        }


                      }


                    }}
                    type="button" className="btn btn-primary"> Lưu </button>
                </div>
              </div>
            </div>
          </div>
        ) : null
      }



    </div>

  );
}
