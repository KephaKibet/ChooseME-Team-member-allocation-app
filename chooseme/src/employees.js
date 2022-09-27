import React from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg'
import Teams from './teams';

const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) =>
{
  
  return (
  
  <main className='container'>
    <div className='row justify-content-center mt-3 mb-3'>
      <div className='col-6'>
          <Teams selectedTeam={selectedTeam}
            handleTeamSelectionChange={handleTeamSelectionChange} />
      </div>
    </div>
    <div className='row justify-content-center mt-3 mb-3 '>
      <div className='col-8'>
        <div className='card-collection'>
          {
            employees.map((employee) => (
              
            ))
          }
            
        </div>
      </div>
    </div>
  </main>
 )
}
      


export default Employees;