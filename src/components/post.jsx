import React, { useState } from "react";

import LikeImg from "../image/like.png";
import DislikeImg from "../image/dislike.png";
import EditImage from "../image/pen.png";
import DeleteImage from "../image/bin.png";
import HelpImage from "../image/help.png";
import arrowImage from "../image/arrow.png";
import altImage from '../image/altImg.png';
import EditForm from "./editForm";

const PostItem = ({ post, onLikeToggle, isLiked, remove, onEdit, onSave}) => {
  const { category } = post;

  let categoryClass;
  switch (category) {
    case 'Planets in Space':
      categoryClass = 'post__content--planet';
      break;
    case 'Global News':
      categoryClass = 'post__content--news';
      break;
    case 'Sport and hobby':
      categoryClass = 'post__content--sport';
      break;
    case 'Study and learn':
      categoryClass = 'post__content--study';
      break;
    default:
      categoryClass = 'post__content--news';
      break;
  }

  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)
  const [imgSrc, setImgSrc] = useState(post.imageSrc);


  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isPostBlured, setIsPostBlured] = useState(false);
  const [isDisplayVisible, setIsDisplayVisible] = useState(false);
  const [isDisplayVisibleHelp, setIsDisplayVisibleHelp] = useState(false);
  const [IsEditFormActive, setIsEditFormActive] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedPost = {
      ...post,
      title,
      body,
      category,
      imgSrc,
    };
   
    onSave(updatedPost);
    closeEditForm()
  };


  const closeEditForm = ()=>{
    setIsMenuVisible(false)
    setIsEditFormActive(false)
  }

  const handleError = () => {
    setImgSrc(altImage);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    setIsPostBlured(!isPostBlured);
    setIsDisplayVisible(false);
  };

  const toggleLike = () => {
    if (typeof onLikeToggle === 'function') {
      onLikeToggle(post);
    }
  };
  const showEditForm = ()=>{
    setIsEditFormActive(true)
    onEdit(post);
  }
  const HideDisplay = () => {
    setIsDisplayVisible(false);
  };

  const ShowDisplay = () => {
    setIsDisplayVisible(true);
    setIsDisplayVisibleHelp(false);
  };

  const HideDisplayHelp = () => {
    setIsDisplayVisibleHelp(false);
  };

  const ShowDisplayHelp = () => {
    setIsDisplayVisibleHelp(true);
    setIsDisplayVisible(false);
  };

  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  let formattedDate = `${day}.${month}.${year}`;

  return (
    <div className='post'>
      <div className={`post__content ${categoryClass}`}>
        <div className={`post__menu ${isMenuVisible ? 'visible' : 'hidden'}`}>
          <div className="menu__content-items">
            <button className="menu__item" onClick={showEditForm}>
              <img className="menu__item-image" src={EditImage} alt="EditImage" />Edit
            </button>
            <button className="menu__item menu__item-delete" onClick={ShowDisplay}>
              <div className="menu__item--content">
                <img className="menu__item-image" src={DeleteImage} alt="DeleteImage" />Delete
              </div>
            </button>
            <div style={{ display: isDisplayVisible ? 'flex' : 'none' }} className="menu__item--buttons">
              <div className="menu__item--button-text">Are you sure you want to delete this post?</div>
              <button className="menu__item--button menu__item--button-cancel" onClick={HideDisplay}>
                Cancel
              </button>
              <button className="menu__item--button menu__item--button-delete" onClick={() => remove(post)}>
                Delete
              </button>
            </div>
            <button className="menu__item" onClick={ShowDisplayHelp}>
              <img className="menu__item-image" src={HelpImage} alt="HelpImage" />Help
            </button>
            <div style={{ display: isDisplayVisibleHelp ? 'flex' : 'none' }} className="menu__item--buttons-help">
              <div className="menu__item--button-text">Contact Us on a right sidebar anytime!</div>
              <button className="menu__item--button menu__item--button-cancel" onClick={HideDisplayHelp}>
                Got It!
              </button>
            </div>
          </div>
        </div>
        <button className={`post__burger ${isMenuVisible ? 'post__burger--open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`post-context ${isMenuVisible ? 'post-context--blured' : ''}`}>
          <div className="post__title"> <img src={arrowImage} alt="ArrowImage" className="post__title--image" /> <p>{post.title}</p></div>
          <div className="post__line"></div>
          <div className="post__wrapper">
            <div className="post__text">{post.body}</div>
            <div className="post__image">
              <img src={imgSrc} alt="PostImage" onError={handleError} />
            </div>
          </div>
          <div className="post__line"></div>
          <div className="post__buttons">
            <div className="post__created">Post created {formattedDate}</div>
            <button className="post__like" onClick={toggleLike}>
              <img className="post__like-image" src={isLiked ? DislikeImg : LikeImg} alt={isLiked ? "dislike" : "like"} />
            </button>
          </div>
        </div>
        <EditForm  closeEditForm={closeEditForm} 
                   IsEditFormActive={IsEditFormActive} 
                   handleSubmit={handleSubmit} 
                   title={title} 
                   body={body} 
                   imgSrc={imgSrc}
                   setTitle={setTitle}
                   setBody={setBody}
                   setImgSrc={setImgSrc}
                   />
      </div>
    </div>
  );
};

export default PostItem;
