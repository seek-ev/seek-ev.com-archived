import React from 'react'

// Styles
import './App.sass'

// Components
import Button from '../components/basic/button'

function App() {
  return (
    <div className='app'>
      <div class='example'>
        <div class='example_text'>Primary</div>
        <Button text='Log in' />
      </div>
      <div class='example'>
        <div class='example_text'>Clean</div>
        <Button text='Log in' clean />
      </div>
      <div class='example'>
        <div class='example_text'>Raise</div>
        <Button text='Log in' raise />
      </div>
      <div class='example'>
        <div class='example_text'>Error</div>
        <Button text='Log in' error />
      </div>
      <div class='example'>
        <div class='example_text'>Dark</div>
        <Button text='Log in' dark />
      </div>
      <div class='example'>
        <div class='example_text'>Blue</div>
        <Button text='Log in' blue />
      </div>
      <div class='example'>
        <div class='example_text'>Round</div>
        <Button text='Log in' round />
      </div>
    </div>
  )
}

export default App
