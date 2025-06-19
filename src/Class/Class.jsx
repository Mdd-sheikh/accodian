import React, { useState } from 'react'
import logo from '../assets/image.png'

const Class = () => {
    const [option, setoption] = useState([])
    const [count, setCount] = useState(0)
    const [searchinput, setSearchinput] = useState("")
    console.log(option);


    const handledata = () => {
        const trimdata = searchinput.trim()
        if (trimdata === "") {
            return alert("empty is not allowed")
        }
        const dublicate = option.some((item) => item.toLowerCase() === trimdata.toLowerCase())
        if (dublicate) {
            return alert("not allowed")

        }
        setoption([...option, searchinput])
        setSearchinput("")
    }


    const removehandler = (Index) => {
        setoption((item) => item.filter((_,index) => index!== Index)) 
    }

    return (
        <>
            <div className="relative top-[15px] left-[150px] mx-[-60px]" >
                <input className='border-[1px] mx-[80px] w-[250px] h-[35px]' type="search" placeholder='Add.......' onChange={(e) => setSearchinput(e.target.value)} value={searchinput} />
               <button onClick={handledata} className='mx-[-70px] border-[1px] w-[80px] h-[35px]'>Add</button>
                
            </div>

            <div className='w-[150px]'>
                {!count ? <div className=" w-[60px] flex" onClick={() => setCount(prev => prev + 1)}>
                    select
                    <img className="w-[25px] h-[25px]" src={logo} alt="" />
                </div> :
                    <div className="">
                        <div className="flex" onClick={() => setCount(prev => prev - 1)}>
                            select
                            <img className="w-[25px] h-[25px]" src={logo} alt="" />
                        </div>
                        <div className=" border-gray-400 shadow-xl">
                            {option.map((item, index) => {
                            return (
                                <div key={index} className="hover:bg-gray-400 w-auto h-[30px] align-center items-center flex gap-[10px]">{item}<button className='w-[10px] h-[10px] bg-red-400 rounded-[50px] text-[8px] cursor-pointer' onClick={()=>removehandler(index)}>x</button></div>
                            )

                        })}
                        </div>

                    </div>

                }


            </div>
           
        </>
    )
}

export default Class