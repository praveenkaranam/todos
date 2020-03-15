import React from "react"

const Input = (props) => {
    let { type, name, id, onChange, className, value,placeholder } = props;
    return (
        <div>
            <input
                value={value}
                placeholder={placeholder}
                type={type?type:"text"}
                name={name} id={id}
                className={"form-control "+className}
                onChange={({ target: { value } }) => onChange(value)} />
        </div>
    )
}
export default Input;