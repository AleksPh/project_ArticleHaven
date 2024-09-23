import React from "react";
import emptyImage from '../image/empty.png'

const EmptyBlock = ()=>{
  return(
    <div className="empty-block">
      <div className="empty-img"><img src={emptyImage} alt="EmptyIMage" /></div>
      <div className="empty-text">
        <h2>No posts found</h2>
        <p>Please refresh the page and try again</p>
      </div>
    </div>
  )
}

export default EmptyBlock