
import React from 'react';

const TeamMembers = ({employees, handleEmployeeCardClick, selectedTEam}) => {
  return (
    employees.map(employee)=> (
      <TeamMemberCard handleEmployeeCardClick={ handleEmployeeCardClick} selectedTeam={selectedTeam} />
    )


      )
  }

export default TeamMembers;





