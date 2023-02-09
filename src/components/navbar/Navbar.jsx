import React from 'react';
import './navbar.scss';
import bag from '../../assets/navbarIcons/bag.svg'
import logo from '../../assets/navbarIcons/logo.svg'
import call from '../../assets/navbarIcons/call.svg'
import location from '../../assets/navbarIcons/location.svg'
import arrowDown from '../../assets/navbarIcons/arrowDown.svg'
import search from '../../assets/navbarIcons/search.svg'




export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbarWrapper">
            <div className="logoBox">
                <img src={logo} alt="logo" className='logo'/>
            </div>
            <div className="contact">
                <div className="phone">
                    <img src={call} alt="call-icon" />
                    <span className='phoneNumber'>+977 9800000000</span>
                </div>
            <div className="location">
                <img src={location} alt="location-icon" />
                <span className='officeLocation'>Kathmandu, Nepal</span>
                <img src={arrowDown} alt="arrow-dowm" className='arrowDownIcon'/>
            </div>
            </div>
            <div className="searchBox">
                <img src={search} alt="search-icon" className='searchIcon'/>
                <input type="text" className='searchInput' placeholder='Search your food'/>
            </div>
            <div className="rightNavbarSection">
                <h3>Login</h3>
                <div className="bag">
                <img src={bag} alt="bag-icon" className="bagIcon"/>
                <span className='itemsInBag'>{26}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
