import {useState} from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees = () => {

    const [selectedTeam, setTeam] = useState("TeamB");

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
    ]);

    function handleTeamSelectionChange(event){
        setTeam(event.target.value);
    }

    function handleEmployeeCardClick(event){
        const transforemdEmployees = employees.map(
            (employee) => employee.id === parseInt(event.currentTarget.id)?(employee.teamName === selectedTeam)?{...employee, teamName:''}:{...employee, teamName: selectedTeam}:employee
        );
        setEmployees(transforemdEmployees);
    }

    return (
        <main className="container">
                <div classNmae="row justify-content-center mt-3 mb-3">
                    <div className="col-6">
                        <select className="form-select form-selet-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
                            <option value="TeamA">TeamA</option>
                            <option value="TeamB">TeamB</option>
                            <option value="TeamC">TeamC</option>
                            <option value="TeamD">TeamD</option>
                        </select>
                    </div>
                </div>

            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
            {
                employees.map((employee) => (
                    <div id={employee.id} className="card m-2" style={{ cursor:"pointer" }} onClick={handleEmployeeCardClick}>

                        {
                        (employee.gender === 'male')?<img src={maleProfile} 
                        className="card-img-top"/>
                        :<img src={femaleProfile} 
                        className="card-img-top"/>
                        }

                        <div className="card-body">
                            <h5 className="card-title">
                                Full Name: {employee.fullName}
                            </h5>
                            <p className="card-text">
                                <b>Designation:</b>{employee.designation}
                            </p>
                        </div>
                    </div>
                ))
            }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employees