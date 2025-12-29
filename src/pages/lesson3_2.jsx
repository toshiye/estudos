function Lesson3_2() {

    const isLearningReact = true
    const name = 'Gabriel'
    const year = 2025
    const learning = isLearningReact ? "I am learning React" : "Not learning yet"

    return (
        <div className="lesson-container">
            <h1>Hello, my name is { name } and the year is { year }!</h1>
            <br />
            <p>{ learning }</p>
        </div>
    )
}

export default Lesson3_2