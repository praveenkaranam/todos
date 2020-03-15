import React from "react"

const Button = (props) => {
    let { name, id, onClick, className, value } = props;
    return (
        <div>
            <input
                type="button"
                key={id}
                value={value}
                name={name}
                id={id}
                className={"form-control " + className}
                onChange={() => { }}
                onClick={(event) => onClick(event)}
            />
        </div>
    )
}
export default Button;