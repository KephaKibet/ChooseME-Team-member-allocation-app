import React from 'react';

const TeamMemberCard = ({selectedTeam,handleTeamSelectionChange}) => {
  return (
    
<div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 selected' : 'card m-2')} style={{ cursor: 'pointer' }} onClick={handleEmployeeCardClick}>
{
  (employee.gender === 'male') ? <img src={maleProfile} className='card-img-top' alt='employeePicture' />
    : <img src={femaleProfile} className='card-img-top' alt='employeePicture' />
}
<div className='card-body' >
  <h5 className='card-tittle'>Full Name : {employee.fullName}</h5>
  <p className='card-text'><b> Designation </b> : {employee.designation}</p>
</div>
</div>

    )
}


export default TeamMemberCard;




























