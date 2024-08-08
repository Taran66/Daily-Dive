// BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = ({ blogPosts }) => {
  const { id } = useParams();
  const post = blogPosts[id]; // Get the post based on the index from the URL

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div className="blog-post">
      <h1>{post.heading}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      {post.src && <img src={post.src} alt="blog-image" />}
    </div>
  );
};

export default BlogPost;
