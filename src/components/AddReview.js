import React, { useState } from "react";
import "../styles/AddReview.css";

function AddReview() {
  const [formData, setFormData] = useState({
    game: "", // assuming game is identified by an ID or name
    user: "",
    rating: "",
    comment: "",
  });

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
        // Handle successful form submission here
        console.log("Review added successfully");
        // Optionally, clear the form
        setFormData({ game: "", user: "", rating: "", comment: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="add-review-container">
      <h2 className="add-review-title">Write a Review</h2>
      <form className="add-review-form">
        <input
          type="text"
          className="add-review-input"
          placeholder="Review Title"
        />
        <textarea
          className="add-review-textarea"
          placeholder="Enter Review"
        ></textarea>
        <button type="submit" className="add-review-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddReview;
