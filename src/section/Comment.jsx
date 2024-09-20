// Comment.js
import React, { useState } from 'react';

const Comment = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      const comment = {
        id: Date.now(),
        text: newComment,
        // Add more properties as needed (e.g., author, timestamp)
      };
      setComments([...comments, comment]);
      setNewComment('');
      // Save the comment to a database or external API
    }
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className='text-black'
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="comments">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            {/* Add more comment details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;