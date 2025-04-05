import React, {useState, useEffect} from "react";

const ThemeToggle: React.FC= ()=> {

    const [darkMode, setDarkMode ] = useState(true);

 
useEffect(() => {
    if (darkMode) {
        document.body.style.background = "#1e1e1e";  // Dark Mode Background
        document.body.style.color = "white";  // Dark Mode Text Color
    } else {
        document.body.style.background = "#ffffff";  // Light Mode Background
        document.body.style.color = "black";  // Light Mode Text Color
    }

    const header = document.getElementById("app-header");
    const filtersContainer = document.querySelector(".filters"); // Entire filters div
    const filters = document.querySelectorAll(".filters label"); // Individual labels

    if (header) {
        header.style.color = darkMode ? "white" : "black"; 
    }

    if (filtersContainer) {
        (filtersContainer as HTMLElement).style.background = darkMode ? "#292929" : "#ddd"; 
    }

    filters.forEach((filter) => {
        (filter as HTMLElement).style.color = darkMode ? "white" : "#333"; 
    });

}, [darkMode]);


    return(

        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>

       {darkMode ? "Light Mode": "Dark Mode"}

        </button>
    );

};

export default ThemeToggle; 