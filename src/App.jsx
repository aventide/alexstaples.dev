import React from 'react';

import Resume from './components/Resume';
// import Bio from './components/Bio';
// import CompanyLogos from './components/CompanyLogos';

import './App.css'

function App() {
  return (
    <>
      {/* <Bio /> */}
      {/* <div className='grid grid-cols-3 text-lg font-bold underline'>
        <p>
          Resume
        </p>
        <p>
          Projects
        </p>
        <p>
          Contact
        </p>
      </div> */}
      <Resume />
      {/* <CompanyLogos /> */}
    </>
  )
}

export default App