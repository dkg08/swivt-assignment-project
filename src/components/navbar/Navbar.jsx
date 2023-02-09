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

    {/* navbar wrapper */ }

        <div className="navbarWrapper">

        {/* container for logo */ }
            <div className="logoBox">
                <img src={logo} alt="logo" className='logo'/>
            </div>

            {/* container for phone and location  */ }
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

            {/* container for search Box  */ }
            <div className="searchBox">
                <img src={search} alt="search-icon" className='searchIcon'/>
                <input type="text" className='searchInput' placeholder='Search your food'/>
            </div>

            {/* rightmost section of navbar containing login and bag icon */ }
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
