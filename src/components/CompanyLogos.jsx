import React from 'react';
import GenpactLogo from '../assets/genpact-logo.png';
import WasabiLogo from '../assets/wasabi-logo.png';
import RedboxLogo from '../assets/redbox-logo.png';
import UnitedLogo from '../assets/united-logo.png';
import HologicLogo from '../assets/hologic-logo.png';

export default function CompanyLogos() {
    return (
        <div className='grid grid-cols-4 mt-16'>
            <div className='flex items-center mx-4'>
                <img src={GenpactLogo} className="" alt="Alex Staples" />

            </div>
            <div className='flex items-center mx-4'>
                <img src={RedboxLogo} className="" alt="Alex Staples" />
            </div>
            <div className='flex items-center mx-4 brightness-150'>
                <img src={UnitedLogo} className="" alt="Alex Staples" />
            </div>
            {/* <div className='flex items-center mx-4'>
      <img src={HologicLogo} className="" alt="Alex Staples" />
      </div> */}
            <div className='flex items-center mx-4'>
                <img src={WasabiLogo} className="" alt="Alex Staples" />
            </div>
        </div>
    )
}