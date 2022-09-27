import React from 'react';
import { useState } from 'react';

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers())
  function groupTeamMembers() {
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
    teams.push(royals);

    return teams;

    function handleTeamClick(event) {
      var transformedGroupedData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarge.id ? { ...groupedData, collapsed: !groupedData.collapsedData } : groupedData)
      
      setGroupedData(transformedGroupedData);
      setTeam(event.currentTarget.id)
    }
  
    // eslint-disable-next-line no-unreachable
    return (
      <main className="container" >
        {
          groupedEmployees.map((item) => {
            return (
              <div key={item.team} className='card mt-2' style={{ cursor: 'pointer' }}>
                <h4 id={item.team} className='card-header text-secondary bg-white' onClick ={handleTeamClick}> Team Name : {item.team} </h4>
                <div id={'collapse' + item.team}
                  className={item.collapsed === true ? 'collapsed' : ''}>
                  <hr />
                  {
                    item.members.map(member => {
                      return (
                        <div className='mt-2'>
                          <h5 className='card-tittle mt-2'>
                            <span className='text-dark'> FullName :{member.fullName} </span> </h5>
                          <p> Designation :{member.designation}</p>
      
                        </div>
                      )
                    })
                  }
                </div>
              </div >
            )
          })
        }
      </main>
    )
  }
}


export default GroupedTeamMembers;