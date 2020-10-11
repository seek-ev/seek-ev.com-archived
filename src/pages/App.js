import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

// Components
import Home from '../pages/Home'
import Login from '../pages/Login'

class App extends React.Component {
  render() {
    return (
      <main >
         <Switch>
          <Route exact path="/" component={Home} />
   
          <Route path="/login" component={Login} />
        </Switch>
      </main>
    )
  }
}

export default App
