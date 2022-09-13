import React from 'react';
import { useState } from 'react';
import Header from './header';
import Employees from './employees';
import Footer from './footer';

import './App.css';


function App()
{

  
  const [selectedTeam, setTeam] = useState("Phoenix")

  const [employees, setEmployees] = useState([
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
      <Header />
      <Employees employees={employees}
        selectedTeam={selectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
        handleTeamSelectionChange={handleTeamSelectionChange}
      />
      <Footer/>
      
    </div>

  );
}

export default App;
