import React from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg'

const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) =>
{
  
  return (
  
  <main className='container'>
    <div className='row justify-content-center mt-3 mb-3'>
      <div className='col-6'>
        <select className='form-select form-select-lg' value={selectedTeam} onChange={handleTeamSelectionChange}>
          <option value='Dynamics'>Dynamics</option>
          <option value='Phoenix'>Phoenix</option>
          <option value='Primes'>Primes</option>
          <option value='Royals'>Royals</option>
        </select>
      </div>
    </div>
    <div className='row justify-content-center mt-3 mb-3 '>
      <div className='col-8'>
        <div className='card-collection'>
          {
            employees.map((employee) => (
              <div id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 selected' : 'card m-2')} style={{ cursor: 'pointer' }} onClick={handleEmployeeCardClick}>
                {
                  (employee.gender === 'male') ? <img src={maleProfile} className='card-img-top' alt='employeePicture' />
                    : <img src={femaleProfile} className='card-img-top' alt='employeePicture' />
                }
                <div className='card-body' >
                  <h5 className='card-tittle'>Full Name : {employee.fullName}</h5>
                  <p className='card-text'><b> Designation </b> : {employee.designation}</p>
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