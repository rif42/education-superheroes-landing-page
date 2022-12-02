import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Training() {
    return (
        <>
            <Navbar />
            <div className='h-[50vw] bg-team0 flex flex-col justify-center align-middle'>
                <p className='px-[15vw] text-center text-white text-[5vw] place-self-center'>
                    Education Superheroes Coaching Experience
                </p>
            </div>

            <div className='h-[50vw] bg-team0 flex flex-row justify-center align-middle'>
                <div className=''></div>
            </div>

            <Footer />
        </>
    );
}

export default Training;
