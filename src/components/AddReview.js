import React, { useState, useEffect } from "react";
import "../styles/AddReview.css";

function AddReview({ gameId }) {
  const [formData, setFormData] = useState({
    game: gameId,
    user: "",
    comment: "",
  });

  // Update formData when gameId changes
  useEffect(() => {
    setFormData((formData) => ({ ...formData, game: gameId }));
  }, [gameId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        console.log("Review added successfully");
        setFormData({ game: gameId, user: "", comment: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="add-review-container">
      <h2 className="add-review-title">Write a Review</h2>
      <form className="add-review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          value={formData.user}
          onChange={handleChange}
          className="add-review-input"
          placeholder="Your Name"
        />
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          className="add-review-textarea"
          placeholder="Enter Review"
        />
        <button type="submit" className="add-review-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddReview;
