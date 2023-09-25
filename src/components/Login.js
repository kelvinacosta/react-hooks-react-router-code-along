import React from "react"

function Login(){
    return(
    <div>
        <h1>Login</h1>
        <form>
            <div>
                <input type="text" name="username" placeholder="Enter Username"/>
            </div>
            <div>
                <input type="password" name="password" placeholder="Enter Password"/>
            </div>
            <input type="submit" value="Submit"/>
        </form>
    </div>
    )
}

export default Login