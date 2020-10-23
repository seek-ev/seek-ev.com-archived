import React from 'react'
import { connect } from 'react-redux'

// Styles
import './home.sass'

// Components
import { Navbar } from '../../components/navbar'

// Actions
import { showSnackbar } from '../../actions/snackbar'

class Home extends React.Component {
  render() {
    return (
      <div className='landing'>
        <Navbar />
      </div>
    )
  }
}

export default connect(
  null,
  { showSnackbar }
)(Home)

