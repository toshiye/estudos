import { useState } from 'react';
import { Link } from 'react-router-dom';

function Lesson3_7() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="lesson-container">
            <h1>Level 3.7 — Conditional Rendering</h1>

            <p>
                This lesson demonstrates rendering content conditionally using state.
            </p>

            {/* Conditional rendering with ternary */}
            <h2>
                {isLoggedIn ? 'Welcome back, user!' : 'Please log in'}
            </h2>

            {/* Conditional rendering with && */}
            {isLoggedIn && (
                <p>You now have access to exclusive content 🎉</p>
            )}

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Log out' : 'Log in'}
            </button>

            <nav style={{ marginTop: '20px' }}>
                <Link to="/">Go Back Home</Link>
            </nav>
        </div>
    );
}

export default Lesson3_7;
