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
    <div className='flex flex-col h-screen gap-10'>
      <div>

      </div>
      <div className='flex justify-center '>
        <h2 className='text-[150px]'>Explore Blogs</h2>
      </div>
      <div>
        
      </div>
      <Router>
      <div className="max-container2 flex gap-5 overflow-hidden">
        <div className='w-[1000px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
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
        </div>
        <div className='w-[2000px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
        <Routes >
          <Route 
          path="/blog/:id" 
          element={<BlogPost blogPosts={blogPosts} />} 
          />
        </Routes>
        </div>
      </div>
    </Router>
    </div>
   
  );
};

export default FifthPage;

