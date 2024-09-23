import React from "react";
import InstImage from '../image/inst.png'
import GitImage from '../image/git.png'
import TgImage from '../image/tg.png'
import LinkedINImage from '../image/linkedIn.png'

const SideBar = ()=>{
  return(
    <sidebar className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__text">Contact <div>Us</div> </div>
        <div className="sidebar__item">
          <a target="blank" href="https://www.instagram.com/_allesanndro_?igsh=MTM3YnFjODdlenNyMQ=="><img className="sidebar__item--image" src={InstImage} alt="InstagramIMG" /></a>
          <div className="sidebar__item--hint">@Allesandro</div>
        </div>
        <div className="sidebar__item">
          <a target="blank" href="https://www.linkedin.com/in/oleksandr-pelykh-9a4b08293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img className="sidebar__item--image" src={LinkedINImage} alt="LinkedInIMG" /></a>
          <div className="sidebar__item--hint">@Allesanddro</div>
        </div>
        <div className="sidebar__item">
          <img className="sidebar__item--image" src={GitImage} alt="GithubIMG" />
          <div className="sidebar__item--hint">@AleksPh</div>
        </div>
        <div className="sidebar__item">
          <img className="sidebar__item--image" src={TgImage} alt="TelegramIMG" />
          <div className="sidebar__item--hint">@Allesanddro</div>
        </div>
      </div>
    </sidebar>
  )
}

export default SideBar