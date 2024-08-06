import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';

const FifthPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchRssFeed = async () => {
      const parser = new Parser();
      const feed = await parser.parseURL('https://medium.com/feed/topic/technology');

      setBlogPosts(
        feed.items.map((item) => ({
          date: item.pubDate,
          heading: item.title,
          content: item.contentSnippet,
          src: item.enclosure?.url || '',
        }))
      );
    };

    fetchRssFeed();
  }, []);

  return (
    <div className="max-container2 flex mt-40">
      <ul className="flex flex-col gap-10">
        {blogPosts.map((item, index) => (
          <li key={index} className="">
            <a href="">
              <div className="flex gap-10">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 text-lg">{item.date}</p>
                  <h3 className="text-3xl font-bold">{item.heading}</h3>
                  <p>{item.content}</p>
                </div>
                <img src={item.src} alt="blog-image" className="w-72" />
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
