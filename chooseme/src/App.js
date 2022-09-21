import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './header';
import Employees from './employees';
import Footer from './footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


function App()
{
  
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "Phoenix");

  const [employees, setEmployees] = useState( JSON.parse(localStorage.getItem('employeeList'))||[
    {
      id: 1,
      fullName: 'Kepha Kibet',
      designation: 'trainee',
      gender: 'male',
      teamName: 'Dynamics'
    },
    {
      id: 1,
      fullName: 'Sarah K',
      designation: 'Engineer',
      gender: 'female',
      teamName: 'Dynamics'
    },
    {
      id: 1,
      fullName: 'Collins M',
      designation: 'trainee',
      gender: 'male',
      teamName: 'Dynamics'
    },
    {
      id: 1,
      fullName: 'Humphrey M',
      designation: 'Specialist',
      gender: 'male',
      teamName: 'Phoenix'
    },
    {
      id: 1,
      fullName: 'Michael M',
      designation: 'trainee',
      gender: 'male',
      teamName: 'Phoenix'
    },
    {
      id: 1,
      fullName: 'Terry',
      designation: 'trainee',
      gender: 'female',
      teamName: 'Phoenix'
    },
    {
      id: 1,
      fullName: 'Tabitha W',
      designation: 'trainee',
      gender: 'female',
      teamName: 'Primes'
    },
    {
      id: 1,
      fullName: 'Kerry  R',
      designation: 'trainee',
      gender: 'female',
      teamName: 'Primes'
    },
    {
      id: 1,
      fullName: 'Berry A',
      designation: 'trainee',
      gender: 'female',
      teamName: 'Primes'
    },
    {
      id: 1,
      fullName: 'Nicky U',
      designation: 'trainee',
      gender: 'male',
      teamName: 'Royals'
    },
    {
      id: 1,
      fullName: 'Joseph J.K',
      designation: 'trainee',
      gender: 'male',
      teamName: 'Royals'
    },
    {
      id: 1,
      fullName: 'KiKi Do',
      designation: 'trainee',
      gender: 'female',
      teamName: 'Royals'
    },
    
  ])

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))

  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))

  }, [selectedTeam]);
  
  
  function handleTeamSelectionChange(event)
  {
    setTeam(event.target.value);
    console.log(event.target.value);
  } 
  function handleEmployeeCardClick(event)
  {
    const trasformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ?(employee.teamName === selectedTeam) ? { ...employee, teamName:''} : {...employee, teamName:'selectedTeam'} : employee);
    
    setEmployees(trasformedEmployees);
  }
  

  return (
    <div>
      <Router>

        <Header
          selectedTeam={selectedTeam}
          teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
        />
        <Routes>
          <Route path='/'
                  element={ <Employees employees={employees}
                  selectedTeam={selectedTeam}
                  handleEmployeeCardClick={handleEmployeeCardClick}
                  handleTeamSelectionChange={handleTeamSelectionChange}
                  />}>
          </Route>
          <Route path='/groupedTeamMembers' element={< groupedTeamMembers/>}>
          </Route>
         </Routes>  
        <Footer />
      </Router>
      
    </div>

  );
}

export default App;
