// import { BlogPosts } from "../constants"

// const FifthPage = () => {
//   return (
//     <div className="max-container2 flex mt-40">
//       <ul className="flex flex-col gap-10">
//           {BlogPosts.map((item) => (
//             <li key={item.label} className="">
//               <a href="">
//               <div className="flex gap-10">
//                 <div className="flex flex-col gap-2">
//                   <p className="text-gray-400 text-lg">{item.date}</p>
//                   <h3 className="text-3xl font-bold">{item.heading}</h3>
//                   <p>{item.content}</p>
//                 </div>
//                 <img src={item.src} alt="blog-image" className="w-72" />
//               </div>
//               </a>
//               <img src="" alt="" />
//             </li>
//           ))}
//         </ul>
//         <div>
            
//         </div>       
//     </div>
    
//   )
// }

// export default FifthPage

import React, { useState, useEffect } from 'react';

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
            src: post.images?.thumbnail?.url || '', // Use the thumbnail URL if available
          }))
        );
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <div className="max-container2 flex mt-40">
      <ul className="flex flex-col gap-10">
        {blogPosts.map((item, index) => (
          <li key={index} className="">
            <a href={`/blog/${index}`}>
              <div className="flex gap-10">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 text-lg">{item.date}</p>
                  <h3 className="text-3xl font-bold">{item.heading}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
                </div>
                {item.src && <img src={item.src} alt="blog-image" className="w-72" />}
              </div>
            </a>
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
};

export default FifthPage;
