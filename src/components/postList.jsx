import React from "react";
import PostItem from "./post";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, remove, onLikeToggle, likedPosts, onEdit, onSave}) => {
  return (
    <TransitionGroup>
      <div className="main__container-post">
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem
              remove={remove}
              number={index + 1}
              post={post}
              onLikeToggle={onLikeToggle} 
              isLiked={likedPosts.has ? likedPosts.has(post.id) : false} 
              onEdit={onEdit}
              onSave={onSave}
            />
          </CSSTransition>
        ))}
      </div>
    </TransitionGroup>
  );
};

export default PostList;
