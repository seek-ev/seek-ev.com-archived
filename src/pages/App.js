import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

// Components
import Home from '../pages/Home'
import Snackbar from '../components/notifications/snackbar'

class App extends React.Component {
  render() {
    return (
      <main>
         <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        
        <Snackbar />
      </main>
    )
  }
}

export default App
