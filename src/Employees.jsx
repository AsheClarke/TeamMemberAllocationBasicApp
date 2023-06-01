import {useState} from 'react';

const Employees = () => {

    const [employees, setEmployees] = useState([
        {
        id: 1,
        fullName: "Ashe Clarke",
        designation: "Javascript Developer",
        gender: "non-binary",
        teamName: "TeamA"},

        {
        id: 2,
        fullName: "Leanda Wright",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"},

        {
        id: 3,
        fullName: "Rhonda Wright",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"},

        {
        id: 4,
        fullName: "Joshmin Garnett",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"},

        {
        id: 5,
        fullName: "Eevee Clarke",
        designation: "DotNet Developer",
        gender: "female",
        teamName: "TeamB"},

        {
        id: 6,
        fullName: "Olive Cameron",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"},

        {
        id: 7,
        fullName: "Jason Cameron",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"},

        {
        id: 8,
        fullName: "Gelicia Cameron",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"},

        {
        id: 9,
        fullName: "Aiden Cameron",
        designation: "C++ Developer",
        gender: "male",
        teamName: "TeamC"},

        {
        id: 10,
        fullName: "Heabert Cameron",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"},

        {
        id: 11,
        fullName: "Sakshi Cameron",
        designation: "Vue Developer",
        gender: "female",
        teamName: "TeamD"},

        {
        id: 12,
        fullName: "Avery Cameron",
        designation: "Graphic Designer",
        gender: "female",
        teamName: "TeamD"}
    ])

    return (
        <main>
            {
                employees.map((employee) => (
                    <p>{employee.fullName}</p> 
                ))
            }
        </main>
    )
}

export default Employees