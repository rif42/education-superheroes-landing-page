import React from "react";

function Navbar() {
    return (
        <div className='w-full absolute h-[8vw]'>
            <div className='h-full flex flex-row justify-evenly align-middle px-[5vw]'>
                <a className='flex flex-col justify-center align-middle pr-[7vw]'>
                    <img className='w-[10vw]' src={"/src/assets/ES_logo.png"} alt={"logo education superheroes"} />
                </a>
                <a className='flex flex-col justify-center align-middle text-white text-[1.2vw]'>
                    <div>Home</div>
                </a>
                <a className='flex flex-col justify-center align-middle text-white text-[1.2vw]'>
                    <div>Teacher's Training Program</div>
                </a>
                <a className='flex flex-col justify-center align-middle text-white text-[1.2vw]'>
                    <div>Our Team</div>
                </a>
                <a className='flex flex-col justify-center align-middle text-white pl-[5vw] text-[1.2vw]'>
                    <div className='w-[12vw] bg-red-400 h-[3vw] rounded-full text-center flex flex-col justify-center'>
                        Contact Us
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
