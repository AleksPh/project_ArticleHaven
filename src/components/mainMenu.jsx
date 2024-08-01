import React, {useState, useEffect} from "react";

import AddImage from '../image/add.png';
import FilterImage from '../image/filter.png';
import SearchImage from '../image/search.png'
import PlusImage from '../image/plus.png'
import EditImage from '../image/pen.png'
import DateImage from '../image/date.png'
import TitleImage from '../image/title.png'

import { AddPost } from "../App";


const MainMenu = ({ posts, setPosts, setSelectedCategory, selectedCategory, setFilteredPost, isMenuActive}) =>{
  const [isHidden, setIsHidden] = useState(false);
  const [isActive, setIsActive] = useState(true)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState()
  const [error, setError] = useState('');
  const [localSelectedCategory, setLocalSelectedCategory] = useState(selectedCategory || ''); 
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = () => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPost(filtered);
  };

  useEffect(() => {
    handleSearch(); 
  }, [posts, searchQuery]);

  const OpenMenu = () => {
    setIsHidden(true);
  }
  const CloseMenu = () => {
    setIsHidden(false);
  };
  const PopUpActive = () =>{
    setIsActive(false)
  }
  const PopUpClosed = () =>{
    setIsActive(true)
  }

  const handleAddPost = () => {
    if (title.trim().length < 5) {
      setError('Title should be at least 5 characters long.');
      return;
    }
    if (body.trim().length < 350) {
      setError('Body should be at least 350 characters long.');
      return;
    }
    if (!title || !body || !image || !category) {
      setError('Please fill in all fields.');
      return;
    }
    AddPost(posts, setPosts, title, body, image, category);
    CloseMenu();
    setTitle('');
    setBody('');
    setImage('');
    setCategory('');
  };

  const handleCategoryChange = (e) => {
    setLocalSelectedCategory(e.target.value); 
  };

  const handleSave = () => {
    setSelectedCategory(localSelectedCategory); 
    PopUpClosed(); 
  };
  
  return(
    <div className={`main__menu ${isMenuActive? 'active-flex' : 'hidden'}`}>
      <div className="main__menu--item">
        <div className="main__search">
          <div className="main__search--logo"><img className="main__search--img" src={SearchImage} alt="SearchImage" /></div>
          <input className="main__search--input" 
                 type="text" 
                 placeholder="Enter Title"
                 value={searchQuery}
                 onChange={e => setSearchQuery(e.target.value)}
                 />
        </div>
      </div>

      <div className="main__menu--item">
        <button className='main__menu--button' onClick={PopUpActive}>
          <img className="main__menu--image" src={FilterImage} alt="FilterButtonImage" />
          <div className="main__menu--text">Filter</div>
        </button>

        <div className={`main__popup main__popup-filter ${isActive ? '' : 'active'}`}>
          <div className="main__popup-filter--content">
            <div className="main__popup_block">
              <div className="main__popup-text"><img className="main__popup-text--img" src={TitleImage} alt="TitleImage" />Choose category</div>

              <select className="main__popup--input main__popup--list " onChange={handleCategoryChange} value={localSelectedCategory} >
                <option value="">All Categories</option>
                <option value="Global News">Global News</option>
                <option value="Planets in Space">Planets in Space</option>
                <option value="Study and learn">Study and learn</option>
                <option value="Sport and hobby">Sport and hobby</option>
              </select>

            </div>
            <div className="main_popup_block">
              <div className="main__popup-text"><img className="main__popup-text--img" src={DateImage} alt='DateImage' />Choose create date</div>
              <input type="date"/>
           </div>

           <div className="main__popup--buttons">
              <button className="main__popup--button main__popup--button-cancel" onClick={PopUpClosed}>Cancel</button>
              <button className="main__popup--button main__popup--button-save" onClick={handleSave}>Save</button>
           </div>

          </div>
        </div>
      </div>

      <div className="main__menu--item">
        <button className="main__menu--button" onClick={OpenMenu}>
          <img className="main__menu--image" src={AddImage} alt="AddButtonImage" />
          <div className="main__menu--text">Add Post</div>
        </button>
      </div>

      <div className={`main__popup main__popup-create ${isHidden ? '' : 'hidden'}`}>
        <div className="main__popup--title"><img src={EditImage} alt="EditImage" />Creating New Post</div>
        <div className="main__popup--line"></div>
        <div className="main__popup--content">
        {error && <div className="error-message">{error}</div>}
          
          <div className="main__popup--text "> <img src={PlusImage} alt="AddImage" /><p>Enter Title for your Post</p></div>

          <input type="text" 
                 value={title} 
                 className="main__popup--input main__popup--input--title" 
                 placeholder="Enter title"
                 onChange={ev => setTitle(ev.target.value)}
                 />

          <div className="main__popup--line"></div>
          <div className="main__popup--text "><img src={PlusImage} alt="AddImage" /> <p>Enter main information for your Post</p></div>

          <textarea className="main__popup--input main__popup--input--text" 
                    name="message" 
                    rows="10" 
                    cols="30" 
                    placeholder="Enter your information"
                    value={body} 
                    onChange={ev => setBody(ev.target.value)}
                    ></textarea>

          <div className="main__popup--line"></div>
          <div className="main__popup--text "><img src={PlusImage} alt="AddImage" /> <p>Enter link for Image for your Post</p></div>

          <input type="text" 
                 value={image} 
                 className="main__popup--input main__popup--input--image" 
                 placeholder="Enter image link"
                 onChange={ev => setImage(ev.target.value)}
                 />

          <div className="main__popup--line"></div>
          <div className="main__popup--text"><img src={PlusImage} alt="AddImage" /> <p>Сhoose the most suitable category for your Post</p> </div>
          <select className="main__popup--input main__popup--list" value={category} onChange={ev => setCategory(ev.target.value)}>
              <option value="Global News">Global News</option>
              <option value="Planets in Space">Planets in Space</option>
              <option value="Study and learn">Study and learn</option>
              <option value="Sport and hobby">Sport and hobby</option>

          </select>
          <button className="main__popup--addpost" onClick={handleAddPost}>Add Post</button>
          <button className="main__popup--close" onClick={CloseMenu}></button>


        </div>

      </div>

    </div>
  )
}

export default MainMenu