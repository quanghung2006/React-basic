
import React, { useState, useEffect } from "react";

const Dangnhap = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fakeUser, setFakeUser] = useState([]);
    const [isAuthen, setIsAuthen] = useState(props.isAuthen);

    const handleSubmit = (e) => {
        debugger
        // e.preventDefault();
        console.log("Tên đăng nhập:", username);
        console.log("Mật khẩu:", password);

        // call lên api để check xem user có tồn tại trong hệ thống hay không
        // chua call api check trong fakeuser tồn tại thì cho pass qua

        if (fakeUser && fakeUser.length > 0) {
            let checkLogin = fakeUser.findIndex(x => x.username == username && x.password == password);
            if (checkLogin > -1) {
                // alert('login thành công')
                window.location.href = "/"
            }
            else {
                alert('login fail')
            }
        }



    };

    const handleOnchangeInput = (e, fieldName) => {
        // debugger
        let value = e.target.value;
        if (fieldName == 'username') {
            setUsername(value)
        }
        if (fieldName == 'password') {
            setPassword(value)
        } 
    }

    useEffect(() => {
        //chạy vào ham nay dau tien luc render

        let fakeUserNew = [
            {
                username: 'hungdq',
                password: '123456',
            },
            {
                username: 'dungtd',
                password: '12345678',
            }
        ]
        setFakeUser(fakeUserNew)
    }, [])
 
    useEffect(() => {
        // cay vao khi co su thay doi cua 1 bienaonao do: vd: ở đay la bien username
        if (username != "") {
            // alert("username change " + username)
        }

    }, [username])

    console.log('username', username)
    console.log('password', password)
    console.log('fakeUserNew', fakeUser)
    console.log('props isAuthen', props.isAuthen)
    console.log('state isAuthen', isAuthen)


    return <>
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: "900px", height: "500px" }}>
                <h2 className="text-center">Đăng nhập</h2>
                <div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Tên đăng nhập</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Nhập tên đăng nhập"
                            value={username}
                            onChange={(e) => handleOnchangeInput(e, 'username')}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Mật khẩu</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => handleOnchangeInput(e, 'password')}
                        />
                    </div>
                    <button onClick={() => {
                        handleSubmit()
                    }} type="button" className="btn btn-primary w-100">Đăng nhập</button>
                </div>
            </div >
        </div >



    </>;
};

export default Dangnhap;