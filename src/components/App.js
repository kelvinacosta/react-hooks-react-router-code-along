import React from "react"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./NavBar"
import { Route ,Switch } from "react-router-dom";

function App(){
    return(
        <div>

        
        <NavBar />
        <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      </div>
    )
}

export default App