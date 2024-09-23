import React from "react";
import PlayMarketImage from '../image/footer-1.png'
import AppStoreImage from '../image/footer-2.png'

const Footer = () =>{
  return(
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__item"><img src={PlayMarketImage} alt="PlayMarketImage" className="footer__item--image" /></div>
        <div className="footer__item"><img src={AppStoreImage} alt="AppStoreImage" className="footer__item--image" /></div>
      </div>
    </footer>
  )
}

export default Footer;