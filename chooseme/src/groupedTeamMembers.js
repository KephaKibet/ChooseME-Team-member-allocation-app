import React from 'react';
import { useState } from 'react';

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers())
  function groupTeamMembers()
  {
    var teams = []

    var phoenixMembers = employees.filter((employee) => employee.teamName === 'Phoenix');
    var phoenix = { team: 'Phoenix', members: phoenixMembers, collapsed: selectedTeam === 'Phoenix' ? false : true };
    teams.push(phoenix)

    var dynamicsMembers = employees.filter((employee) => employee.teamName === 'Dynamics');
    var dynamics = { team: 'Dynamics', members: dynamicsMembers, collapsed: selectedTeam === 'Dynamics' ? false : true };
    teams.push(dynamics)

    var primesMembers = employees.filter((employee) => employee.teamName === 'Primes');
    var primes = { team: 'Primes', members: primesMembers, collapsed: selectedTeam === 'Primes' ? false : true };
    teams.push(primes)

    var royalsMembers = employees.filter((employee) => employee.teamName === 'Royals');
    var royals = { team: 'Royals', members: royalsMembers, collapsed: selectedTeam === 'Royals' ? false : true };
    teams.push(royals)
  
    return (
      <main className="container" >
        {
          groupedEmployees.map((item) => {
            return (
              <div key ={item.team} className='card mt-2' style
            )
          })
        }
        
      </main>
    )
  }
  
}


export default GroupedTeamMembers;