import React from "react";
import "./Post.css";

function Post({ img_path, header_text, text }) {
  return (
    <section className="post-div">
      <img src={img_path} alt="" className="post-image" />
      <h1 className="post-header silkscreen-regular">{header_text}</h1>
      <p
        className="post-text silkscreen-regular"
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    </section>
  );
}

export default Post;
