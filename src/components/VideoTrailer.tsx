import React from "react";
import SikandarVideo from "../assets/Sikandar.mp4";  // Adjust path as needed
//import Stree2Song from "../assets/Stree2Song.mp4";

const VideoTrailer: React.FC = () => {
  return (
    <div className="trailer" >
      <video 
        autoPlay 
        muted 
        loop 
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px"
        }} >
      
        <source src={SikandarVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoTrailer;
