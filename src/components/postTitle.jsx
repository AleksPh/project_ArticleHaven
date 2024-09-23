import React from "react";
import BookImg from "../image/book.png"
import FavImg from "../image/dislike.png"
import artImg from "../image/pen.png"

const ListTitle = ({titleName})=>{
  let srcImage
  switch (titleName) {
    case 'New Posts':
      srcImage = BookImg;
      break;
    case 'Favourite Posts':
      srcImage = FavImg;
      break;
    case 'Created Posts':
      srcImage = artImg;
      break;
    default:
      srcImage = BookImg;
      break;
  }
  return(
    <div id="title" className="list-title"><img className="list-title--image" src={srcImage} alt="bookimg" />{titleName}</div>
    
  )
}

export default ListTitle