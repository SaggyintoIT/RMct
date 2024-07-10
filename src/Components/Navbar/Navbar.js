import React from 'react'
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
  
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
    <div className="navbar">
      
      </div>
      <div className="navigators">
        <button className="navigator-btn" onClick={() => navigate("/")}>
          Add New Informations
        </button>
        <button className="navigator-btn" onClick={() => navigate("/retrieve")}>
       AAo Informations
        </button>
      </div>
      </>
  )
}

export default Navbar
