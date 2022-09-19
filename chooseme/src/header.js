import React from 'react';

const Header = ({selectedTeam, teamMemberCount}) => {
  
  return (
    <header className="container" >
      <div className="row justify-content-center mt-3 mb-4">
        <div className ="col-8 row ">
          <h1>
          ChooseMe Team Member Allocation
          </h1>
          <h3>{selectedTeam} has {teamMemberCount} members</h3>
          </div>
        </div>
    </header>
    )
}


export default Header;