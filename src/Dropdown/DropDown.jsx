import { useState } from "react";
import React from "react";

const DropDown = () => {
    const [select, setSelect] = useState([]);
    const [selectValue, setSelectValue] = useState("");
    console.log(select);


    const handleAdd = () => {
        const data = selectValue.trim()
        if (data === "") {
             alert("empty value is not allowed")
            return
        }
        const duplicate = select.some((item) => item.toLowerCase() === data.toLowerCase())
        if (duplicate) {
            alert("duplicate value not allowed")
            return
        }
        setSelect([...select, selectValue]); 
        setSelectValue("")

    }


    return (
        <div>
           
            <select name="" id="">
                 <option value="">select</option>
                {select.map((item, index) => {
                    return (
                        <option key={index} value="">{item} </option>
                    )

                })}


            </select>
            <input className="border-[1px]"
                type="text"
                onChange={(evt) => setSelectValue(evt.target.value)}
                value={selectValue}
            />
            <button className="w-[50px] border-[1px]" onClick={handleAdd}>Add</button>
        </div>
    );
};
export default DropDown;