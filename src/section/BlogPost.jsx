// BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Comment from './Comment';

const BlogPost = ({ blogPosts }) => {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div className="blog-post flex flex-col gap-5">
      <h1 className='text-[50px]'>{post.heading}</h1>
      <p className='text-gray-400'>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      {post.src && <img src={post.src} alt="blog-image" />}
      <Comment postId={id} /> {/* Pass the post ID as a prop to the Comment component */}
    </div>
  );
};

export default BlogPost;