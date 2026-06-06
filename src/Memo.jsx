import React, { useState } from 'react'

const Memo = () => {
    const [count, setcount] = useState(0)
    function calculate(num) {
        for (let i = 0; i < 10000000; i++) {
            num += i
        }

    }
    const save = calculate(count)
    return (
        <div>
            <h2>{count}</h2>
            <h2>{save}</h2>
            <button onClick={() => setcount(count + 1)}>INCR</button>
        </div>
    )
}

export default Memo