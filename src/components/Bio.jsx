import React from 'react';

import BioImage from '../assets/alexstaples.dev-bio-image-1.png';

export default function Bio() {
    return (
        <div className='mb-4'>
            <div className='grid grid-cols-5'>
                <div className='flex flex-col items-center'>
                    <img src={BioImage} className="" alt="Alex Staples" />
                </div>
                <div className='col-span-4 flex justify-start items-center pl-8'>
                    <h1 className='font-heading font-bold'>Alex Staples</h1>
                </div>
            </div>
            <p className='font-body mt-8'>
                My name is Alex Staples and I am cool and no one is better than me at smashing my face on the keyboard. I am from Stockhold, Sveeeeden and I like to play the clarinet from my Moai.
            </p>
        </div>
    )
}