import React from "react";

import logoImage from '../image/book-logo.png'
import PenImage from '../image/pen.png'
import FavImage from '../image/dislike.png'
import ArticleImg from '../image/book.png'

const Header = ({ onShowOnlyLiked, showNewPosts, showCreatedPosts}) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-content">
          <div className="header__logo"><a href="#main"><img className="header__logo-image" src={logoImage} alt="logo-image" /></a>ArticleHaven</div>
          <div className="header__menu">
            <button className="header__button" onClick={showNewPosts} >
              <div className="header__item">  
                <div className="header__item--text">New Posts</div>
                <img src={ArticleImg} alt="CreatedPostImage" className="header__item--image" />
              </div>
            </button>

            <button className="header__button" onClick={onShowOnlyLiked} >
              <div className="header__item">
                <div className="header__item--text">Favourite</div>
                <img src={FavImage} alt="FavouritePostImage" className="header__item--image" />
              </div>
            </button>

            <button className="header__button" onClick={showCreatedPosts} >
              <div className="header__item">
                <div className="header__item--text">Created</div>
                <img src={PenImage} alt="DeletedPostImage" className="header__item--image" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
