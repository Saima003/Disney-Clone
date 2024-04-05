import React from 'react'
import classes from "./Login.module.css"
import bgImage from '../images/login-background.jpg'
import logoImg from "../images/cta-logo-one.svg"
import smallLogo from "../images/cta-logo-two.png"
const Login = () => {
  return (
    <>
    <section className="overflow-hidden flex flex-col h-screen text-center">
      <div className= {`${classes['mb-custom']} w-full h-screen relative min-h-screen box-border flex justify-center items-center flex-col`}>
        {/* <div className="h-100 bg-top bg-cover absolute top-0 left-0 right-0 z-[-1]" style={{backgroundImage: bgImage}}>  */}
        <div className={`max-w-650 mx-auto mb-2vw flex flex-wrap flex-col justify-center items-center text-center ml-auto mr-auto mt-0 ${classes['logo-div']}`}>
          <img className='mb-10 max-w-600 min-h-1 w-full block' src={logoImg} alt="" />
          <a className={`${classes['get-all']}`}>GET ALL THERE</a>
          <p className={`${classes['para-style']}`}>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/04/24, the price of Disney+ and the Disney Bundle will increase by $1.</p>
          <img className={`${classes['small-logo']}`} src={smallLogo} alt=''/>
        </div>
          <img className="h-100 bg-top bg-cover absolute top-0 left-0 right-0 z-[-1]" src={bgImage} alt="" />
         {/* </div> */}
        
    </div>
    </section>
    </>
  )
}

export default Login