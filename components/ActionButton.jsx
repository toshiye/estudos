function ActionButton({onIncrement, onDecrement, onReset}) {
    return(
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
            <h2>Child Component (ActionButton.jsx)</h2>
            <button onClick={onDecrement}>Decrement (-)</button>
            <button onClick={onReset}>Reset</button>
            <button onClick={onIncrement}>Increment (+)</button>
        </div>
    );
};

export default ActionButton;