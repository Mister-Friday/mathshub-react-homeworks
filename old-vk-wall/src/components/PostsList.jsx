import React from 'react';
import Post from './Post';
import './PostsList.css';

function PostsList({ posts }) {
  return (
    <ul className="posts-list">
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          comment={post.comment}
          avatar={post.avatar}
          date={post.date}
        />
      ))}
    </ul>
  );
}

export default PostsList;
