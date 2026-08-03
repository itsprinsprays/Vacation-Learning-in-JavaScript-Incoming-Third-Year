export default function getCourseById({ course }) {

    return (
        <div>
            <h1>Course Details</h1>
            <h2>Course: {course.courseName}</h2>
            <h2>Unit: {course.unit}</h2>
        </div>
    );

}