import React from "react";

import titleImg from '../image/title.png'
import MainImg from '../image/edit-main.png'



const EditForm = ({IsEditFormActive, closeEditForm, handleSubmit, title, body, setTitle, setBody})=>{



  return(
    <div className={`edit ${IsEditFormActive ? 'active-flex' : 'hidden'}`}>

    <div className="edit__container">
      <div className="edit__header">
        <div className="edit__header-text"><img className="edit__header-img" src={titleImg} alt="TitleImg" /> <p>Edit Title</p></div>
        <input type="text" className="edit__header-input" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className="edit__line"></div>
      <div className="edit__content">
        <div className="edit__content-text"><img className="edit__header-img" src={MainImg} alt="TitleImg" /><p>Edit Main Information</p></div>
        <textarea rows="5" cols="60" className="edit__content-input" value={body} onChange={(e) => setBody(e.target.value)}/>
      </div>
      <div className="edit__line"></div>
      <div className="edit__buttons">
        <button className="edit__button edit__button-cancel" onClick={closeEditForm}>Cancel</button>
        <button className="edit__button edit__button-save" onClick={handleSubmit}>Save</button>

      </div>
    </div>



    </div>
  )
}

export default EditForm