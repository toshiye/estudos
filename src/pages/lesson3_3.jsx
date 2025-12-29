import Profile from "../../components/Profile.jsx";

function Lesson3_3() {
    let name = 'Gabriel Sasaki'
    let role = 'Student'
    let year = 2025
    return(
        <div className="lesson-container">
            <Profile name={name} role={role} year={year} />
        </div>
    )
}

export default Lesson3_3