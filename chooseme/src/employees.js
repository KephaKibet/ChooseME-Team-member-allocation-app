import React from 'react';
import { useState } from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg'

const Employees = () =>
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
      fullName: 'Bancy K',
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
  
  return (
    <main className='container'>
     <div class='row justify-content-center mt-3 mb-3'>
        <div class='col-6'>
          <select className = "form-select form-select-lg" value ={selectedTeam} onChange = {handleTeamSelectionOnChange}>
            <option value ='Dynamics'>Dynamics</option>
            <option value ='Phoenix'>Phoenix</option>
            <option value ='Primes'>Primes</option>
            <option value ='Royals'>Royals</option>
          </select>
        </div>
      </div>
      <div class='row justify-content-center mt-3 mb-3 '>
        <div class='col-8'>
          <div class='card-collection'>
      {
            employees.map((employee) => (
              <div id ={employee.id} className='card m-2' style={{cursor:"pointer"}}>
                {
                  (employee.gender === 'male') ? <img src={maleProfile} className='card-img-top' alt='employeePicture' />
                  : <img src={femaleProfile} className='card-img-top' alt='employeePicture' />
                }
                <div className='card-body' >
                  <h5 className='card-tittle'>Full Name : {employee.fullName}</h5>
                  <p className='card-text'><b> Designation </b> : {employee.designation }</p>  
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
      


export default Employees;