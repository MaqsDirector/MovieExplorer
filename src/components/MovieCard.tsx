import React from "react";

type CardProps = {
    title: string;
    image: string;
    description: string;
}

const MovieCard: React.FC<CardProps> = ({title, image, description}) => {
    return(
        <div className="movie-card"
        style={{
            border: "1px solid #ddd", 
            borderRadius: "8px",
            padding: "15px",
            textAlign: "center",
            width: "220px",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
            margin: "10px auto"
        }}
        >
            <img src={image} alt={title} style={{ width: "200px", height: "auto", borderRadius: "5px" }} />
            <h3>{title}</h3>
            <p>{description}</p>

            <button className="fav-button"
             style={{
                padding: "5px 10px", 
                backgroundColor: "#ff5a5f", 
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            }}
            >{"\u2764"}Like</button>
            
        </div>
    );
};

export default MovieCard;