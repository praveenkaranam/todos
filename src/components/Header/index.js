
import React from "react";
import { useSelector } from "react-redux";

function Header() {
    const userName = useSelector(state => state.userName)
    return (
        <div style={{ height: 50, background: "gray" }} className="d-flex align-items-center justify-content-center text-white">
            <span>TODO Application</span>
            <span>{userName}</span>
        </div>
    )
}

export default Header;