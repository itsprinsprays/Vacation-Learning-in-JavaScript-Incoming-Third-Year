import { useState } from "react";

const students = [
    { id: 1, name: "Prince"},
    { id: 2, name: "John"},
    { id: 3, name: "Maria"}
];

return (
    <>
    {students.map(student => {
        <h2 key={student.id}> {student.name}</h2>
    })}
    </>

);
