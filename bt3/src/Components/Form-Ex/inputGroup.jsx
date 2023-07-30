import "./inputGroup.css";
const InputGroup = ({
    icon,
    error,
    id,
    label,
    type = 'text',
    name,
    value,
    placeholder = "Please type in here",
    onchange
}) => {
    
    return (
        <div>
            <label htmlFor="exampleFormControlInput1" className="form-label">
                {label}:
            </label>
            <input
                id={`exampleFormControlInput1 ${id}`}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onchange}
                required
                // onBlur={validation.handleBlur}
                // className={`form-control ${isValid ? "" : "is-invalid"}`}
            />
            <span>
                {icon}
            </span>
            <span className="d-error">{error}</span>
        </div>
    );
};

export default InputGroup;
