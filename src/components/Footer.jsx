import React from "react";

function Footer() {
    return (
        <div className=' h-[20vw] bg-[#DCE2F0] flex flex-row justify-evenly align-middle'>
            <div className='grow flex flex-col justify-center align-middle w-[33%]'>
                <img
                    className='w-[12vw] place-self-center'
                    src={"/assets/ES_logo_black.png"}
                    alt={"logo education superheroes"}
                />
                <p className='text-[1vw] text-[#6A6D9E] place-self-center pt-[1vw] w-[15vw]'>
                    Copyright © 2020 Draft LLC. All rights reserved.
                </p>
            </div>
            <div className=' w-[33%] flex flex-col justify-center align-middle'>
                <a className='text-[1.2vw] text-[#16194F] ml-[5vw] pt-[2vw]'>Home</a>
                <a className='text-[1.2vw] text-[#16194F] ml-[5vw] pt-[2vw]'>Our Team</a>
                <a className='text-[1.2vw] text-[#16194F] ml-[5vw] pt-[2vw]'>Teacher's Training Program</a>
            </div>
            <div className=' w-[33%] flex flex-col justify-center align-middle'>
                <a className='text-[1.2vw] text-[#16194F] ml-[5vw] pt-[2vw]'>Contact Us</a>
                <a className='text-[1.2vw] text-[#16194F] ml-[5vw] pt-[2vw]'>Register</a>
                <a className='text-[1.2vw] text-[#16194F] ml-[5vw] pt-[2vw]'>Terms of Use</a>
            </div>
        </div>
    );
}

export default Footer;
