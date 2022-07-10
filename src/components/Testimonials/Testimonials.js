import React, { useContext, useEffect, useState } from "react";
import { testiContext } from "../../contexts/testiContext";
import CommentCard from "./CommentCard";

const Testimonials = () => {
  const { getComments, createComment, comments, deleteComment } =
    useContext(testiContext);

  const [comment, setComment] = useState("");

  const [email, setEmail] = useState("");

  function handleSave() {
    const newComment = {
      comment,
      email,
    };
    if (!comment.trim() || !email.trim()) {
      alert("Заполните поле!");
    } else {
      createComment(newComment);
    }
  }

  useEffect(() => {
    getComments();
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
        {comments.map(item => (
          <CommentCard
            key={item.id}
            item={item}
            deleteComment={deleteComment}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <input
          style={{ margin: "5px 0" }}
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Ваш email..."
          type="text"
        />
        <input
          style={{ margin: "5px 0" }}
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Оставьте комментарий..."
          type="text"
        />
        <button style={{ margin: "5px 0" }} onClick={handleSave}>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
