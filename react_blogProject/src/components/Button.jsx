import React from "react";

function Button({ children, type = "button", bgColor = "bg-blue-500", className = "", ...props }) {
    return (
        <button
        className = {`px-4 py-2 rounded-lg, $(bgColor), ${className} ${bgColor}`}
        type = {type}
        {...props}
        >
        {children}
        </button>
    );
}

export default Button;