import React, { useContext, useEffect, useState } from 'react'
import { deletepost, Getpost } from '../Api/Api'
import { Context } from '../Context/Context'


const Blog = () => {
    const [getPost, setGetPost] = useState([])

    const getdata = async () => {
        const data = await Getpost()
        setGetPost(data.data)
    }
    useEffect(() => {
        getdata()
    }, [])

    const contextdata = useContext(Context)

    // delete items function

     

    return (
        <>
        
            <div className='blog gap-[20px]'>
                <div className="btn">{contextdata}</div>
                {getPost.map((item, index) => {
                    return (
                        <div key={index} className=" z-[-2px] border-[0.3px] w-[300px]">
                            <p>{item.id}</p>
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                            <div className="btn">
                                <button className='border-[1px]'>Update</button>
                                <button onClick={()=>deleteitem(item.id)} className='border-[1px] mx-[10px]'>delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Blog