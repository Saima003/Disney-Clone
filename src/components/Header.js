import React from 'react'
import disneyLogo from '../images/logo.svg'
import homeImg from '../images/home-icon.svg'
import searchImg from '../images/search-icon.svg';
import watchImg from '../images/watchlist-icon.svg';
import originalsImg from '../images/original-icon.svg';
import moviesImg from '../images/movie-icon.svg';
import seriesImg from '../images/series-icon.svg';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
    // const handleLogin =()=>{
        // alert("Pls Login")
        // <SignedIn>
        //     <UserButton />
        // </SignedIn>
    // }
  return (
    <nav className={`fixed top-0 left-0 right-0 h-16 bg-gray-900 flex justify-between items-center px-20 z-10 text-white`}>
        <a href="/" className='nav-a'>
        <img className="nav-img" src={disneyLogo} alt="Disney+" />
        </a>
        <div className={`flex flex-row flex-nowrap h-full justify-end items-center relative mr-auto ml-20 p-0 m-0 nav-menu`}>
            <a href="/home" className='nav-menu-a'>
                <img className="nav-menu-img" src={homeImg} alt='HOME'/>
            <span className='nav-menu-span'>HOME</span>
            </a>
            <a href="/home" className='nav-menu-a'>
                <img className="nav-menu-img" src={searchImg} alt='SEARCH'/>
            <span className='nav-menu-span'>SEARCH</span>
            </a>
            <a href="/home" className='nav-menu-a'>
                <img className="nav-menu-img" src={watchImg} alt='WATCHLIST'/>
            <span className='nav-menu-span'>WATCHLIST</span>
            </a>
            <a href="/home" className='nav-menu-a'>
                <img className="nav-menu-img" src={originalsImg} alt='ORIGINALS'/>
            <span className='nav-menu-span'>ORIGINALS</span>
            </a>
            <a href="/home" className='nav-menu-a'>
                <img className="nav-menu-img" src={moviesImg} alt='MOVIES'/>
            <span className='nav-menu-span'>MOVIES</span>
            </a>
            <a href="/home" className='nav-menu-a'>
                <img className="nav-menu-img" src={seriesImg} alt='SERIES'/>
            <span className='nav-menu-span'>SERIES</span>
            </a>
        </div>
        {/* <SignedIn> */}
            {/* <UserButton/> */}
        {/* </SignedIn> */}
        {/* <button className='login'>Login</button> */}
        <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
        </nav>
  )
}

export default Header