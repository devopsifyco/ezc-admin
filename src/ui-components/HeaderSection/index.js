import React from 'react';

const HeaderSection = ({ heading, subHeading: SubHeading }) => {
  return (
    <header style={{ 
      margin: "20px",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between' 
    }}>
      <div className=' w-auto'>
        <h1 style={{ fontSize: "30px" }}>{heading}</h1>
        {SubHeading && <SubHeading />}
      </div>
    </header>
  );
};

export default HeaderSection;
