import React, { useState } from 'react'

const Click = () => {
    const [count, setCount] = useState(0)
    const [storage,setstorage] = useState([])

    const numstoeage = () => {
       setstorage([...storage,count])

    }

    return (
        <div className='click'>
            {!count ? <button onClick={() => setCount(prev => prev + 1)} >+</button> :
                <div> <button onClick={() => setCount(prev => prev + 1)}>+</button>
                    <p>{count}</p>
                    <button onClick={() => setCount(prev => prev - 1)}>-</button>
                </div>

            }
        </div>
    )
}

export default Click