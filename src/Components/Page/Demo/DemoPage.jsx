import React, { useState, useEffect, Fragment } from "react";

export default function Demo() {
    const [count, setCount] = useState(0)

    const [aray, setArray] = useState([1, 2, 3, 4])


    const [congnhan, setCongnhan] = useState({ ten: '', tuoi: 0 })
    const [listCongnhan, setListCongnhan] = useState([{ ten: 'hung', tuoi: 20 }, { ten: 'ha', tuoi: 21 }, { ten: 'công', tuoi: 20 }])



    // const [zaray,setArray1] = useState([{a:1},{a:2}])


    const handleCount = () => {
        debugger
        let Newcount = count + 1;
        setCount(Newcount)

    }

    useEffect(() => {
    }, [])

    return (
        <Fragment>
            <h1>Giá Trị Của Count là : {count}</h1>

            <button onClick={handleCount}>
                Click để tăng giá trị
            </button>

            <h1>hiện thị danh sách trong 1 mảng Int</h1>


            <div>
                {
                    aray?.map((item, j) => {
                        debugger

                        return (
                            <div >
                                {item}
                            </div>

                        )
                    }
                    )
                }

            </div>
            <h1>hiện thị danh sách trong 1 mảng object</h1>
            <button>Thêm mới</button>

            <div className="data-object" style={{ margin: '15px',background:'#ddd' }}>
                
                <input value={congnhan.ten} placeholder="Tên" />
                <input value={congnhan.tuoi} placeholder="tuổi" />

                <button>Lưu</button>
            </div>


            {
                listCongnhan?.map((item, j) => {
                    debugger

                    return (
                        <div style={{ padding: '15px' }}>
                            {item.ten}   {'----'}  {item.tuoi}
                            <button>sửa</button>
                        </div>

                    )
                }
                )
            }












        </Fragment>

    );
}