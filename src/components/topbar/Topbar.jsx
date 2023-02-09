import React from 'react'
import './topbar.scss'

export const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">

            <div className="topbarLeftSection">
                <h3>24 Hrs Service | 365 Days</h3>
            </div>
            <div className="topbarRightSection">
                <ul className='topbarItemList'>
                    <li className='topbarItem'>Translate<span className="horizontalLine">|</span></li>
                    <li className='topbarItem'>Support<span className='horizontalLine'>|</span></li>
                    <li className='topbarItem'>Help<span className='horizontalLine'>|</span></li>
                    <li className='topbarItem'>FAQ</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
