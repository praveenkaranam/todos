import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import updateUserName from "../../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    return (
        <div>
            Enter User Name <br />
            <Input
                value={userName}
                className="col-md-4"
                onChange={(value) => setUserName(value)}/>
            Enter Password
            <Input type={"password"}
                value={password}
                className="col-md-4"
                onChange={(value) => setPassword(value)} />
            <Button value="Login"
                className="btn btn-success"
                onClick={() => {
                    dispatch(updateUserName(userName))
                    history.push("/dashboard")
                }} />
        </div>
    )
}

export default Login;