import "./inputGroup.css";
const InputGroup = ({
    label,
    type = 'text',
    name,
    value,
    placeholder = "Please type in here",
    onChange
}) => {
    
    return (
        <div>
            <label htmlFor="exampleFormControlInput1" className="form-label">
                {label}:
            </label>
            <input
                id="exampleFormControlInput1"
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onchange}
                // onBlur={validation.handleBlur}
                // className={`form-control ${isValid ? "" : "is-invalid"}`}
            />
        </div>
    );
};

export default InputGroup;
