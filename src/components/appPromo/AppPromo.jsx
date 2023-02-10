import React from 'react'
import './appPromo.scss'
import qrScanner from '../../assets/appPromo/qr.png'
import googleplay from '../../assets/appPromo/googlePlay.png'
import appstore from '../../assets/appPromo/appstore.png'
import smartphone from '../../assets/appPromo/smartPhone.png'

export const AppPromo = () => {
  return (
    <div className='appPromo'
    >
        <div className="appPromoWrapper">
            <div className="appPromoLeft">
                <h2 className="appPromoTitle">Download Our App</h2>
                <p className="appPromoDetail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames egestas et aliquam, orci id eget nec. Urna ultricies orci lobortis neque, pretium rhoncus imperdiet faucibus commodo. Eu.</p>
                <div className="qrcode">
                <img src={qrScanner} alt="QR scanner" />
                </div>
                <div className="appcontainer">
                    <img src={googleplay} alt="google play" />
                    <img src={appstore} alt="appstore" />
                </div>
            </div>
            <div className="appPromoRight">
                <img src={smartphone} alt="smartphone" />
            </div>
        </div>
    </div>
  )
}
