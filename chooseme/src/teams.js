import React from 'react';

const Teams = ({selectedTeam,handleTeamSelectionChange}) => {
  return(
  <select className='form-select form-select-lg' value={selectedTeam}   onChange={handleTeamSelectionChange}>
    <option value='Dynamics'>Dynamics</option>
    <option value='Phoenix'>Phoenix</option>
    <option value='Primes'>Primes</option>
    <option value='Royals'>Royals</option>
  </select>
    )
}


export default Teams;