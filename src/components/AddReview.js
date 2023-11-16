import React, { useState } from 'react';


function AddReview() {
    const [formData, setFormData] = useState({
      game: '', // assuming game is identified by an ID or name
      user: '',
      rating: '',
      comment: ''
    });
  
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
      };
      
      const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          const response = await fetch('/api/reviews', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          } else {
            // Handle successful form submission here
            console.log("Review added successfully");
            // Optionally, clear the form
            setFormData({ game: '', user: '', rating: '', comment: '' });
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
      
  
      return (
        <div>
          <h2>Add a Review</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Game:
              <input
                type="text"
                name="game"
                value={formData.game}
                onChange={handleChange}
              />
            </label>
            <label>
              User:
              <input
                type="text"
                name="user"
                value={formData.user}
                onChange={handleChange}
              />
            </label>
            <label>
              Rating:
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
              />
            </label>
            <label>
              Comment:
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Submit Review</button>
          </form>
        </div>
      );
      
  }
  
  export default AddReview;
  