// components/MovieCard2.tsx
import React from "react";

type Props = {
  title: string;
  image: string;
  desc: string;
};

const MovieCard2: React.FC<Props> = ({ title, image, desc }) => {
  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imgStyle} />
      <h3>{title}</h3>
      <p style={{ fontSize: "0.9em", color: "#555" }}>{desc}</p>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  border: "1px solid #ccc",
  padding: "10px",
  borderRadius: "10px",
  width: "200px",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "250px",
  objectFit: "cover",
  borderRadius: "5px",
};

export default MovieCard2;
