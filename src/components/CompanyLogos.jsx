import React from 'react';
import GenpactLogo from '../assets/logos/genpact-logo.png';
import WasabiLogo from '../assets/logos/wasabi-logo.png';
import RedboxLogo from '../assets/logos/redbox-logo.png';
import UnitedLogo from '../assets/logos/united-logo.png';
import HologicLogo from '../assets/logos/hologic-logo.png';

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