import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <a className="menu" href="#" id="menu-icon">
        MENU
      </a>

      <a className="logo" href="/projects/residential-property-in-taloja/lodha-crown-taloja/about">
        <img
          src="https://s3.ap-south-1.amazonaws.com/lodhagroup.in-tfz/Codename-Goldendream/Crown_Taloja_Logo_without_tagline.svg"
          alt="Logo"
        />
        <p className='font'>Marketing Partners</p>
      </a>

      <div className="right-side">
        <ul className="right-side-list">
          <li>
            <a className="menu-search" href="#">
              <img src="https://www.lodhagroup.in/themes/basic/images/svg/search.svg" alt="Search" />
            </a>
            <p><a className="menu-search" href="#">Search</a></p>
          </li>
          <li>
            <a href="http://myaccount.lodhagroup.in" target="_blank" rel="noopener noreferrer">
              <img src="https://www.lodhagroup.in/themes/basic/images/svg/Login.svg" alt="Login" />
            </a>
            <p><a href="http://myaccount.lodhagroup.in" target="_blank" rel="noopener noreferrer">Login</a></p>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header