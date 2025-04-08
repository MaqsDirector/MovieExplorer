import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    
  <Provider store={store}>
         <App />
     </Provider>
    
  </React.StrictMode>
)

if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('/sw.js')
    .then(reg=> 
      console.log("Service worker Registered:", reg))
      .catch(err => 
        console.error("ServiceWorker Registration failed:", err))
      }
      )
      
    }


 
