import React, { useState, useEffect, Fragment } from "react";

export default function Demo() {
    const [count, setCount] = useState(0)
    const enumTypeAction = {
        Default: 0, AddNew: 1, Update: 2
    }


    const [aray, setArray] = useState([1, 2, 3, 4])


    const [congnhan, setCongnhan] = useState({ ten: '', tuoi: '' })
    const [listCongnhan, setListCongnhan] = useState([{ ten: 'hung', tuoi: 20 }, { ten: 'ha', tuoi: 21 }, { ten: 'công', tuoi: 20 }])
    const [typeAction, setTypeAction] = useState(enumTypeAction.Default);



    // const [zaray,setArray1] = useState([{a:1},{a:2}])


    const handleCount = () => {
        debugger
        let Newcount = count + 1;
        setCount(Newcount)

    }

    useEffect(() => {
    }, [])

    const AddNewLeCout = () => {
        setCongnhan({ ten: '', tuoi: '', index: null });
        setTypeAction(enumTypeAction.AddNew);

    }


    const SaveLeCout = () => {
        if (typeAction === enumTypeAction.Update) {
            const updatedList = listCongnhan.map((item, index) =>
                index === congnhan.index ?{ ten: congnhan.ten, tuoi: congnhan.tuoi } : item
            );
            setListCongnhan(updatedList);

        }
        else if (typeAction === enumTypeAction.AddNew) {
            setListCongnhan([...listCongnhan, { ten: congnhan.ten, tuoi: congnhan.tuoi }]);
        }
        setCongnhan({ ten: '', tuoi: 0 });
        setTypeAction(enumTypeAction.Default);
    };


    const handleCouEdit = () => {
        let findIndex = listCongnhan.find();
           congnhan.ten=findIndex.ten;
           congnhan.tuoi=findIndex.tuoi

    }





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
            <button onClick={AddNewLeCout}>Thêm mới </button>

            <div className="data-object" style={{ margin: '15px', background: '#ddd' }}>

                <input
                    type="text"
                    onChange={(e) => {
                        setCongnhan({ ...congnhan, ten: e.target.value })

                    }}
                    value={congnhan.ten}
                    placeholder="Tên" />
                <input
                    type="text"
                    onChange={(e) => {
                        setCongnhan({ ...congnhan, tuoi: e.target.value })
                    }}

                    value={congnhan.tuoi}
                    placeholder="tuổi" />

                <button onClick={SaveLeCout}> Lưu</button>
            </div>


            {
                listCongnhan?.map((item, j) => {
                    debugger

                    return (
                        <div style={{ padding: '15px' }}>
                            {item.ten}   {'----'}  {item.tuoi}
                            <button onClick={() => handleCouEdit}> sửa</button>
                        </div>

                    )
                }
                )
            }


        </Fragment>

    );
}