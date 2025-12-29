import { useState } from 'react';
import ActionButton from '../../components/ActionButton.jsx';

function Lesson3_8() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {setCount(prev => prev + 1);};
    const handleDecrement = () => {setCount(prev => prev - 1);};
    const handleReset = () => {setCount(0);};

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Parent Component lesson3.8</h1>

            <h2>Current Count: {count}</h2>

            <ActionButton 
                onIncrement={handleIncrement} 
                onDecrement={handleDecrement} 
                onReset={handleReset}
            />
        </div>
    );
}

export default Lesson3_8;