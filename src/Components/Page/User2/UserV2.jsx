import React, { useState, useEffect } from "react";
const enumTypeAction = {
    Default: 0, AddNew: 1, Update: 2
}

const UserV2 = () => {
    const [listUser, setListUser] = useState([
        { id: 1, userName: 'Nguyễn Tiến Lộc', email: 'Loc@gmail.com' },
        { id: 2, userName: 'Nguyễn Trương Bản', email: 'Ban1@gmail.com' },
        { id: 3, userName: 'Đoàn Văn Thái', email: 'Thai@gmail.com' },
    ]);

    const [user, setUser] = useState({ id: 0, userName: '', email: '' });
    const [isOpenModal, setIsOpenModal] = useState(false);
    // 1 thêm mới, 2: upadate
    const [typeAction, setTypeAction] = useState(enumTypeAction.Default);

    // click buton thêm mới ngươì dùng
    const handleAddNewUser = () => {
        // lấy id lơn nhất hiện có của listUserr\
        if (listUser.length > 0) {
            const maxId = Math.max(...listUser.map(user => user.id));
            user.id = maxId + 1;
        }
        else {
            user.id = 1;
        }

        setUser(user);
        setTypeAction(enumTypeAction.AddNew)
        setIsOpenModal(true)
    }
    const handleFindUser = (id) => {
        debugger
        let findUser = listUser.find(x => x.id == id)

        setUser({ ...user })
        setTypeAction(enumTypeAction.Update)
        setIsOpenModal(true)
    }


    // thay đổi data input 

    const onChangeInput = (e, fieldName) => {
        debugger
        let value = e.target.value;
        user[fieldName] = value;
        setUser({ ...user })

    }
    // Xóa User khỏi danh sách listUser,

    const handlDeleteUser = async (user) => {
        console.log(">>> check user:", user)
    }
    const deleteUser = async (id) => {
        try {
            // tìm user
            let userFindIndex = listUser.findIndex(x => x.id == id);
            if (userFindIndex == -1) {
                alert("không tìm thấy User")
            }
            else {
                alert("User tại vị trí " + userFindIndex)
                listUser.splice(userFindIndex, 1)
                setListUser([...listUser])
            }

        }
        catch {
            console.error("Lỗi xóa người dùng");
        }

    }

    // đóng modalmodal
    const closeModal = () => {
        setIsOpenModal(false)
    }


    // lưu user
    const SaveUser = () => {
        debugger
        if (typeAction == enumTypeAction.AddNew) {
            let listUserNew = listUser;
            if (user.id > 0 && user.userName && user.userName) {
                listUserNew.push(user);
                setListUser([...listUser]);
                setIsOpenModal(false);
                let userNew = { id: 0, userName: '', email: '', };
                setUser(userNew);
            }
        }
        else {
            if (typeAction == enumTypeAction.Update) {
                let userChange = user;

                listUser.forEach(item => {
                    if (item.id == userChange.id) {
                        item.email = userChange.email;
                        item.userName = userChange.userName;
                    }
                })

                setListUser([...listUser])
            }
        }

    }

    console.log("typeAction", typeAction);

    return (<>
        <div className="row">
            <div className="container mt-4">

                <button onClick={() => {
                    debugger
                    handleAddNewUser()
                }} className="btn btn-success mb-3">Thêm Người Dùng</button>

                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Email</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listUser != null && listUser.length > 0 ?
                                listUser.map((item, j) => {
                                    return (
                                        <tr key={j}>
                                            <td>{item.id}</td>
                                            <td>{item.userName}</td>
                                            <td>{item.email}</td>
                                            <td>
                                                <button onClick={() => {
                                                    debugger
                                                    handleFindUser(item.id)
                                                }} className="btn btn-primary btn-sm">Chỉnh sửa</button>
                                                <button className="btn btn-danger btn-sm" onClick={() => {
                                                    debugger
                                                    deleteUser(item.id)
                                                }}>Xóa</button>
                                            </td>
                                        </tr>
                                    )

                                })
                                :
                                null
                        }

                    </tbody>
                </table>
            </div>

            {
                isOpenModal == true
                    ?
                    <div style={{ display: 'block' }} className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">


                                    <h1 className="modal-title fs-5" id="exampleModalLabel">

                                        {typeAction == enumTypeAction.AddNew ? 'Thêm mới người dùng' : 'Cập nhât người dùng'}


                                    </h1>


                                    <button onClick={() => {
                                        closeModal()
                                        setTypeAction(0)
                                    }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">

                                    <div>
                                        <div className="mb-3">
                                            <label className="form-label">Tên người dùng</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Nhập tên người dùng"
                                                value={user?.userName}
                                                onChange={(e) => onChangeInput(e, 'userName')}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Nhập email"
                                                value={user?.email}
                                                onChange={(e) => onChangeInput(e, 'email')}
                                                required
                                            />
                                        </div>
                                    </div>


                                </div>
                                <div className="modal-footer">
                                    <button onClick={() => {
                                        closeModal()
                                        setTypeAction(0)
                                    }} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button onClick={SaveUser} type="button" className="btn btn-primary">Lưu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }

        </div>
    </>
    );
};

export default UserV2;