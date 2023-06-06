import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav'
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) ||[
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

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees));
  },[employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  },[selectedTeam]);

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
      <Router>
        <Nav/>
        <Header selectedTeam={selectedTeam}
                teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
                />
        <Routes>
          <Route path ="/"
            element={
              <Employees employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
              handleTeamSelectionChange={handleTeamSelectionChange}
              />
            }
          >
            
            </Route>
            <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers/>}>
            </Route>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
