"use client";
import { useState } from "react";

export default function CommentSection() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment }),
      });

      if (response.ok) {
        const newComment = await response.json();
        setComments([...comments, newComment]);
        setComment("");
        setStatusMessage("Comment submitted successfully!");
      } else {
        setStatusMessage("Submission failed: " + response.statusText);
      }
    } catch (error) {
      setStatusMessage("Error submitting comment: " + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleChange}
          required
          placeholder="Leave a comment"
        />
        <button type="submit">Submit</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
      <div>
        {comments.map((c, index) => (
          <p key={index}>{c.comment}</p>
        ))}
      </div>
    </div>
  );
}
