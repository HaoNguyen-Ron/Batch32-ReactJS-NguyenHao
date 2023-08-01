import { useState } from "react";
import "./inputGroup.css";
const InputGroup2 = ({
    icon,
    id,
    label,
    type = 'text',
    name,
    validation,
    placeholder = "Please type in here",
    formix
}) => {
    return (
        <div className="input-warp">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                {label}
            </label>
            <input
                className="input-field"
                id={`exampleFormControlInput1 ${id}`}
                type={type}
                placeholder={placeholder}
                name={name}
                value={validation.values[name]} 
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                // onBlur={validation.handleBlur}
                // className={`form-control ${isValid ? "" : "is-invalid"}`}
            />
            <span>
                {icon}
            </span>
        </div>
    );
};

export default InputGroup2;
