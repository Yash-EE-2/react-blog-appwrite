import React, {useId} from "react";

function Select({
    options,
    label,
    className,
    ...props } , ref) {

        const id = useId();

        return (
            <div className="w-full">
                {label && <label htmlFor={id}
                className="inline-block text-sm mb-1 pl-1">{label}</label>}
                <select
                    ref={ref}
                    className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
                    {...props}
                    id={id}
                >
                    {options?.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        );
}

export default React.forwardRef(Select);