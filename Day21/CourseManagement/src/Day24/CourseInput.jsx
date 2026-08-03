export default function CourseInput({ courseId, setCourseId, onFetch}) {

    function handleInputChange(e) {
        setCourseId(e.target.value);
    }

    return (
        <div>

            <input
                placeholder="Enter Course ID"
                value={courseId}
                onChange={handleInputChange}
            />
                <button onClick={onFetch}>Fetch Course</button>
        </div>
    )
}