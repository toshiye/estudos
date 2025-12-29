import { useState } from "react"

function Lesson3_4() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    const resetCount = () => {
        setCount(0)
    }



    return (
        <div className="lesson-container">
            <h1>State Basics - Counter</h1>
            <p className="counter-display">Current count: { count }</p>
            <div className="button-group">
                <button onClick={ increaseCount }>+</button>
                <button onClick={ decreaseCount }>-</button>
                <button onClick={ resetCount }>Reset</button>
            </div>
        </div>
    )
}

export default Lesson3_4