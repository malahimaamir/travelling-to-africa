import React from 'react';

const Title = ({ title, subtitle }) => {
    return (
        <div className='flex flex-col gap-1'>
            <p className='uppercase text-lg font-bold tracking-widest'>{title}</p>
            <p className='text-[crimson] lg:text-5xl xs:text-4xl font-bold leading-[60px]'>{subtitle}</p>             
        </div>
    );
};

export default Title;
