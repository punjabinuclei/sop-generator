import React from 'react'
import Lottie from 'lottie-react';
import animationData from "../assets/errorAnimation.json";


const Error = () => {
  return (
    <div>
        <h1 className='text-center font-bold text-[4rem] text-red-500'>FORM NOT SUBMITTED</h1>
        <Lottie animationData={animationData} />
    </div>
  )
}

export default Error