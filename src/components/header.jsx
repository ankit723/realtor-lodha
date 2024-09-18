import React from 'react'
import partner_logo from '../partners_logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="">
        <a className="logo" href="/projects/residential-property-in-taloja/lodha-crown-taloja/about">
          <img
            src="https://s3.ap-south-1.amazonaws.com/lodhagroup.in-tfz/Codename-Goldendream/Crown_Taloja_Logo_without_tagline.svg"
            alt="Logo"
          />
        </a>
      </div>

      <div className="right-side">
        <img src={partner_logo} alt="partner logo" className='w-48'/>
      </div>
    </header>
  )
}

export default Header