import PropTypes from 'prop-types';

const Profile = ({ name, role, year }) => {
    return (
        <div className='profile-container'>
            <h1>User Profile</h1>
            <p><strong>Name: </strong>{ name }</p>
            <p><strong>Role: </strong>{ role }</p>
            <p><strong>Year: </strong>{ year }</p>
        </div>
    );
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
};

export default Profile;