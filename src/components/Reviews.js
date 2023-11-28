import React, { useState, useEffect } from 'react';

function Reviews() {
    const [reviews, setReviews] = useState([]);
  
    useEffect(() => {
        async function fetchReviews() {
          try {
            const response = await fetch('/api/reviews');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setReviews(data);
          } catch (error) {
            console.error('Error fetching reviews:', error);
          }
        }
      
        fetchReviews();
      }, []);
      
  
      return (
        <div>
          <h2>Game Reviews</h2>
          <ul>
            {reviews.map(review => (
              <li key={review._id}>
                <h3>Game: {review.game}</h3>
                <p>User: {review.user}</p>
                <p>Comment: {review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      );
      
  }
  
  export default Reviews;
  