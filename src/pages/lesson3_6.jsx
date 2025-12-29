import { Link } from 'react-router-dom';
import Item from '../../components/Item.jsx';

function Lesson3_6() {
    const itemList = [
        { id: 1, name: 'Item A' },
        { id: 2, name: 'Item B' },
        { id: 3, name: 'Item C' },
        { id: 4, name: 'Item D' },
    ];

    return (
        <div className='lesson-container'>

            <h1>Level 3.6 - Dynamic List Rendering</h1>

            <p>This page demonstrates rendering a list of items using `Array.prototype.map()` and unique keys.</p>

            <div className='item-list-container'>
                <h2>Items: </h2>
                {itemList.map((item) => (
                    <Item key={item.id} name={item.name} />
                ))}
            </div>

            <nav style={{ marginTop: '20px' }}>
                <Link to="/">Go Back Home</Link>
            </nav>
        </div>
    );
};

export default Lesson3_6;