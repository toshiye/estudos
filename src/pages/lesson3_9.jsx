import { useState } from 'react'

function Lesson3_9() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    /* const message = count === 0 ? (<p>"Counter is at zero"</p>) : count > 0 ? (<p>"Counter is positive"</p>) : (<p>"Counter is negative"</p>); */

    return (
        <div>
            <h1>Level 3.9 - Conditional Rendering.</h1>

            <h2>Count: {count}</h2>

            {/* {message} */}

            {count === 0 && <p>Counter is at zero</p>}
            {count > 0 && <p>Counter is positive</p>}
            {count < 0 && <p>Counter is negative</p>}

            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>

                {count !== 0 && (<button onClick={reset}>Reset</button>)}
            </div>
        </div>
    )
}

export default Lesson3_9;