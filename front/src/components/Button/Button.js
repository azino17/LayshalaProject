import React from 'react';

const Button = ({ 
  type = "button", 
  className = "", 
  style = {}, 
  onClick, 
  onMouseEnter, 
  onMouseLeave, 
  children 
}) => {
  return (
    <div>
      <button
        type={type}
        className={`btn ${className}`}
        style={{ color:"white",border: "none", backgroundColor: "#FFA800", ...style }}
        onClick={onClick}
        onMouseEnter={onMouseEnter || ((e) => (e.target.style.color = "#800000"))}
        onMouseLeave={onMouseLeave || ((e) => (e.target.style.color = "white"))}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
