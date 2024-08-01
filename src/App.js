import React, { useState, useEffect } from "react";

import './style/style.css'
import ListTitle from "./components/postTitle";
import Header from "./components/header";
import Footer from "./components/footer";
import MainMenu from "./components/mainMenu";
import SideBar from "./components/sidebar";
import PostList from "./components/postList";
import EmptyBlock from "./components/emptyBlock";
import BackgroundVideo from "./components/bgcVideo";
import Pagination from "./components/pagination";

import ImageOne from './image/post-image-1.jpg';
import ImageTwo from './image/post-image-2.jpg';
import ImageThree from './image/post-image-3.jpg';
import ImageFour from './image/post-image-4.jpg';

import './image/study.png';
import './image/sport.png';
import './image/news.png';
import './image/planet.png';

export const AddPost = (posts, setPosts, title, body, imageSrc, category) => {
  const newPost = {
    id: Date.now(),
    title,
    body,
    imageSrc,
    category,
    add: 1,
  };
  setPosts([...posts, newPost]);
};

function App() {
 
  const  [posts, setPosts] = useState([
          { id: 1, 
            imageSrc: ImageOne, 
            category: "Planets in Space", 
            title: 'Space and Technology', 
            body:"Science is the underpinning theme of ESA. It drives innovation and leads to progress and economic development. It inspires future generations of scientists and engineers, and it drives global information exchange and communication.It inspires future generations of scientists and engineers, and it drives global information exchange and communication."},
    

          { id: 2, 
            category: "Global News", 
            imageSrc:ImageTwo,
            title: 'Moon and Stars', 
            body:"By studying the other planets in our own Solar System, we can try to place Earth in context. ESA has already sent spacecraft to Earth’s nearest planetary neighbours – Mars and Venus – to understand why they evolved so differently, and in the next decade we’ll be unlocking the secrets of the innermost planet, Mercury, too!"},


          { id: 3, 
            category: "Sport and hobby", 
            imageSrc:ImageThree,
            title: 'Neptun and Jupiter', 
            body:"The gas giants, and in particular Jupiter with its four large moons – some of which may harbour underground oceans – is also key to piece together the Solar System evolution.Unravelling the behaviour of our parent star, the Sun, is another crucial element to decipher our cosmic origins."},


          { id: 4, 
            category: "Sport and hobby", 
            imageSrc:ImageFour,
            title: 'Car and Rockets', 
            body:"The gas giants, and in particular Jupiter with its four large moons – some of which may harbour underground oceans – is also key to piece together the Solar System evolution.Unravelling the behaviour of our parent star, the Sun, is another crucial element to decipher our cosmic origins."},

          { id: 5,
            category: "Global News", 
            imageSrc:ImageOne,
            title: 'Earth and Upiter', 
            body:"The gas giants, and in particular Jupiter with its four large moons – some of which may harbour underground oceans – is also key to piece together the Solar System evolution.Unravelling the behaviour of our parent star, the Sun, is another crucial element to decipher our cosmic origins."},

          
          { id: 6, 
            category: "Study and learn", 
            imageSrc:ImageTwo,
            title: 'Moon and Stars', 
            body:"By studying the other planets in our own Solar System, we can try to place Earth in context. ESA has already sent spacecraft to Earth’s nearest planetary neighbours – Mars and Venus – to understand why they evolved so differently, and in the next decade we’ll be unlocking the secrets of the innermost planet, Mercury, too!"},

          { id: 7, 
            category: "Planets in Space", 
            imageSrc:ImageFour,
            title: 'Car and Rockets', 
            body:"The gas giants, and in particular Jupiter with its four large moons – some of which may harbour underground oceans – is also key to piece together the Solar System evolution.Unravelling the behaviour of our parent star, the Sun, is another crucial element to decipher our cosmic origins."},
  
          { id: 8,
            category: "Global News", 
            imageSrc:ImageOne,
            title: 'Earth and Upiter', 
            body:"The gas giants, and in particular Jupiter with its four large moons – some of which may harbour underground oceans – is also key to piece together the Solar System evolution.Unravelling the behaviour of our parent star, the Sun, is another crucial element to decipher our cosmic origins."},
  
            
          { id: 9, 
            category: "Sport and hobby", 
            imageSrc:ImageTwo,
            title: 'Moon and Stars', 
            body:"By studying the other planets in our own Solar System, we can try to place Earth in context. ESA has already sent spacecraft to Earth’s nearest planetary neighbours – Mars and Venus – to understand why they evolved so differently, and in the next decade we’ll be unlocking the secrets of the innermost planet, Mercury, too!"},

  ])
 
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [likedPosts, setLikedPosts] = useState(new Set());
  const [showOnlyLiked, setShowOnlyLiked] = useState(false);

  const [titleName, setTitleName] = useState('New Posts')
  const [isMenuActive, setIsMenuActive] = useState('true');
  const [showOnlyCreated, setShowOnlyCreated] = useState(false);
  const [showAll, setShowAll] = useState(true)
  const [isPaginationActive, setIsPaginationActive] = useState('true')
  
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const [isEditing, setIsEditing] = useState(false);
  const [postToEdit, setPostToEdit] = useState(null);

  const handleEdit = (post) => {
    setPostToEdit(post);
    setIsEditing(true);
  };

  const handleSave = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
    setIsEditing(false);
    setPostToEdit(null);
  };

  // const handleCancelEdit = () => {
  //   setIsEditing(false);
  //   setPostToEdit(null);
  // };


  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    setFilteredPosts(currentPosts);
  }, [currentPage, posts]);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const nextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

useEffect(() => {
  let filtered = posts;

  if (selectedCategory) {
    filtered = filtered.filter(post => post.category === selectedCategory);
  }
  if(showAll){
    filtered = filtered.filter(post => post);
  }
  if (searchQuery) {
    filtered = filtered.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }
  if (showOnlyCreated) {
    filtered = filtered.filter(post => post.add===1);
  }
  if (showOnlyLiked) {
    filtered = filtered.filter(post => likedPosts.has(post.id));
  }

  setFilteredPosts(filtered.slice(0, postsPerPage));
}, [posts, selectedCategory, searchQuery, showOnlyLiked, likedPosts, showOnlyCreated, showAll]);


const handleLikeToggle = (post) => {
  setLikedPosts((prev) => {
    const updated = new Set(prev);
    if (updated.has(post.id)) {
      updated.delete(post.id);
    } else {
      updated.add(post.id);
    }
    console.log("Liked Posts:", Array.from(updated));
    return updated;
  });
};

const handleShowOnlyLiked = () => {
  setShowOnlyLiked(true);
  setTitleName("Favourite Posts")
  setIsMenuActive(false)
  setShowOnlyCreated(false);
  setIsPaginationActive(false)
};

const showNewPosts = ()=>{
  setShowOnlyLiked(false);
  setShowAll(true)
  setTitleName("New Posts")
  setIsMenuActive(true)
  setShowOnlyCreated(false);
  setIsPaginationActive(true)
}
const showCreatedPosts = ()=>{
  setTitleName("Created Posts")
  setShowOnlyLiked(false);
  setShowOnlyCreated(true);
  setIsPaginationActive(false)
}

  return (
    <div className="App">  
      <BackgroundVideo  playbackRate={0.3}/>
      <Header onShowOnlyLiked={handleShowOnlyLiked} showNewPosts={showNewPosts} showCreatedPosts={showCreatedPosts} />
      <SideBar/>
      <main id="main" className="main">
        <div className="main__container">
          <ListTitle titleName={titleName}/>
          <MainMenu posts={posts} setPosts={setPosts} setSelectedCategory={setSelectedCategory} selectedCategory = {selectedCategory} setFilteredPost={setFilteredPosts}  setSearchQuery={setSearchQuery} isMenuActive={isMenuActive}/>
          {filteredPosts.length > 0
            ? <PostList
            posts={filteredPosts}
            remove={(post) => setPosts(posts.filter(p => p.id !== post.id))}
            onLikeToggle={handleLikeToggle}
            likedPosts={likedPosts} 
            onEdit={handleEdit} 
            onSave={handleSave}
          />
            : <EmptyBlock />
          }
          <Pagination currentPage={currentPage} prevPage={prevPage} totalPages={totalPages} nextPage={nextPage} goToPage={goToPage} isPaginationActive={isPaginationActive}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;


