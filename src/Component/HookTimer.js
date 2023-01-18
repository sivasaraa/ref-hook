import React, { useEffect, useRef, useState } from 'react'

function HookTimer(){
    const [count, setCount] = useState(0)
    const intervalRef = useRef() 

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(count => count + 1)
        },1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    },[])

    return (
        <div>Timer - {count}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Interval</button>
        </div>
    )
}

export default HookTimer