import React from 'react'
import classes from "./Login.module.css"
import bgImage from '../images/login-background.jpg'
const Login = () => {
  return (
    <>
    <section className="overflow-hidden flex flex-col h-screen text-center">
      <div className= {`${classes['mb-custom']} w-full h-screen relative min-h-screen box-border flex justify-center items-center flex-col`}>
        {/* <div className="h-100 bg-top bg-cover absolute top-0 left-0 right-0 z-[-1]" style={{backgroundImage: bgImage}}>  */}
          <img className="h-100 bg-top bg-cover absolute top-0 left-0 right-0 z-[-1]" src={bgImage} />
         {/* </div> */}
        
    </div>
    </section>
    </>
  )
}

export default Login