const Counter = ({ count, increaseCounter, decreaseCounter, resetCounter }) => {
    return (
        <div className='counter-container'>
            <h2>Count: {count}</h2>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
            <button onClick={resetCounter}>Reset</button>   
        </div>
    );
};

export default Counter;