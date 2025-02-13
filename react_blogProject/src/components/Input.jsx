import React, { useId } from "react";

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
    }, ref) {
    
    return (
        <div className="w-full">
            {label && <label htmlFor={id}
            className="inline-block text-sm mb-1 pl-1">{label}</label>}
            <input
                ref={ref}
                type={type}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
                {...props}
                id={id}
            />
        </div>
    )});

    export default Input;