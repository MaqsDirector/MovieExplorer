import React from "react";
import SikandarVideo from "../assets/Sikandar.mp4"; 

const VidoTrailer2: React.FC = () => {
    return (
    <div className="trailer">
        <video autoPlay muted loop>
            <source src="Sikarndar Trailer" type="vide/mp4"/>
        </video>
    </div>
    );
};

export default VidoTrailer2