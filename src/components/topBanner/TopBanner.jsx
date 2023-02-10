import React from 'react'
import './topBanner.scss'
import search from '../../assets/navbarIcons/search.svg'

export const TopBanner = () => {
  return (
    <div className='topBanner'>
        <div className="searchBox">
                <img src={search} alt="search-icon" className='searchIcon'/>
                <input type="text" className='searchInput' placeholder='Search your food'/>
            </div>
        <div className="bannerImageContainer">

        </div>
    </div>
  )
}
