import React from 'react';

function Banner() {
    return (
        <>
            <div
                className="h-[100vh] md:h-[90vh] bg-cover bg-center flex items-end "
                style={{
                    backgroundImage: `url('https://english.cdn.zeenews.com/sites/default/files/2025/01/16/1635505-jh234-2025-01-16t130115.212.jpg')`,
                }}
            >
                <div className='p-2 bg-slate-400/40 w-full text-center'>Mahavatar Narasimha</div>
            </div>
        </>
    );
}

export default Banner;
