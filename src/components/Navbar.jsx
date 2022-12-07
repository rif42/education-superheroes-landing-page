import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Navbar() {
    let urltest = useLocation().pathname;
    return (
        <div className='w-full absolute h-[8vw]'>
            <div className='h-full flex flex-row justify-evenly align-middle px-[5vw] '>
                <a className='flex flex-col justify-center align-middle pr-[7vw]'>
                    <img className='w-[10vw]' src={"/assets/ES_logo.png"} alt={"logo education superheroes"} />
                </a>
                <Link to={"/home"} className='flex flex-col justify-center align-middle text-white text-[1.2vw]'>
                    <div>Home</div>
                </Link>
                <Link to={"/training"} className='flex flex-col justify-center align-middle text-white text-[1.2vw]'>
                    <div>Teacher's Training Program</div>
                </Link>
                <Link to={"/our_team"} className='flex flex-col justify-center align-middle text-white text-[1.2vw]'>
                    <div>Our Team</div>
                </Link>
                <Link to={`${urltest}/form`} className='flex flex-col justify-center align-middle text-white pl-[5vw] text-[1.2vw] '>
                    <div className='w-[12vw] bg-red-400 h-[3vw] rounded-full text-center flex flex-col justify-center cursor-pointer'>
                        Contact Us
                    </div>
                </Link>
            </div>
            <Outlet/>
        </div>
    );
}

export default Navbar;
