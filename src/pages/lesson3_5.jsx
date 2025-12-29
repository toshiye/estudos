import { useState } from 'react';
import Counter from '../../components/Counter.jsx';

function Lesson3_5() {

    const [count, setCount] = useState(0);

    const increaseCounter = () => {
        setCount(prev => prev + 1);
    }

    const decreaseCounter = () => {
        setCount(prev => prev - 1);
    }

    const resetCounter = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Lesson 3.5: Controlled Counter</h1>
            <Counter 
                count={count} 
                increaseCounter={increaseCounter}
                decreaseCounter={decreaseCounter}
                resetCounter={resetCounter}
            /> 
        </div>
    );
}

export default Lesson3_5;