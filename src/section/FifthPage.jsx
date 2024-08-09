import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogPost from './BlogPost'; // Import the BlogPost component

const FifthPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      const API_KEY = 'AIzaSyA_01sR6Ckw8Y37yec-sJbDjAlNb-iNNso';
      const BLOG_ID = '2399953';

      try {
        const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`);
        const data = await response.json();

        setBlogPosts(
          data.items.map((post) => ({
            date: post.published,
            heading: post.title,
            content: post.content,
            src: post.images?.thumbnail?.url || '',
          }))
        );
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <Router>
      <div className="max-container2 flex mt-40">
        <ul className="flex flex-col gap-10">
          {blogPosts.map((item, index) => (
            <li key={index} className="">
              <Link to={`/blog/${index}`}>
                <div className="flex gap-10">
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-400 text-lg">{item.date}</p>
                    <h3 className="text-3xl font-bold">{item.heading}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.content.substring(0, 100) + '...' }}></p>
                  </div>
                  {item.src && <img src={item.src} alt="blog-image" className="w-72" />}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        
        <Routes >
          <Route path="/blog/:id" element={<BlogPost blogPosts={blogPosts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default FifthPage;

