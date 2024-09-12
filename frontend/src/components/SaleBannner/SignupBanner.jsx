import React from 'react'
import './SignupBanner.css'
import { FaArrowRightLong } from 'react-icons/fa6'
const SignupBanner = () => {
  return (
    <div className='banner-wrapper'>
        <h1>Join adidas and get 15% OFF</h1>
        <div className="button-div">
        <button>
        SIGN UP FOR FREE
        <FaArrowRightLong className="arrow-icon" />
        </button>
        <div className="border-div"></div>
      </div>
    </div>
  )
}

export default SignupBanner