import React from 'react'

// Styles
import './App.sass'

// Components
import Input from '../components/basic/input'
import Button from '../components/basic/button'
import Select from '../components/basic/select'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)

    this.state = {
      exampleError: '',
      exampleValid: false
    }
  }

  handleInputChange(e) {
    if (e.name === 'error') {
      if (e.value.length > 2)
        this.setState({
          exampleError: 'Ahhh too much characters aaaaaaaaaaaaaaaaaa'
        })
      else this.setState({ exampleError: '' })
    }

    if (e.name === 'valid') {
      if (e.value.length > 2) this.setState({ exampleValid: true })
      else this.setState({ exampleValid: false })
    }

    this.setState({ [e.name]: e.value })
  }

  handleSelectChange(e) {
    this.setState({
      [e.name]: e.value
    })
  }

  render() {
    return (
      <div className='app'>
        <div className='title'>Buttons</div>
        <div className='buttons'>
          <div className='example example-buttons'>
            <div className='example_text'>Primary</div>
            <Button text='Log in' />
          </div>
          <div className='example example-buttons'>
            <div className='example_text'>Clean</div>
            <Button text='Log in' clean />
          </div>
          <div className='example example-buttons'>
            <div className='example_text'>Raise</div>
            <Button text='Log in' raise />
          </div>
          <div className='example example-buttons'>
            <div className='example_text'>Error</div>
            <Button text='Log in' error />
          </div>
          <div className='example example-buttons'>
            <div className='example_text'>Dark</div>
            <Button text='Log in' dark />
          </div>
          <div className='example example-buttons'>
            <div className='example_text'>Blue</div>
            <Button text='Log in' blue />
          </div>
          <div className='example example-buttons'>
            <div className='example_text'>Round</div>
            <Button text='Log in' round />
          </div>
        </div>

        <div className='title'>Inputs</div>

        <div className='inputs'>
          <div className='example'>
            <div className='example_text'>Basic</div>
            <Input
              name='basic'
              placeholder='Name'
              onChange={this.handleInputChange}
            />
          </div>

          <div className='example'>
            <div className='example_text'>Basic with border</div>
            <Input
              name='basic_border'
              placeholder='Basic with border'
              onChange={this.handleInputChange}
              border
            />
          </div>

          <div className='example'>
            <div className='example_text'>Raise</div>
            <Input
              name='raise'
              placeholder='Raise'
              onChange={this.handleInputChange}
              raise
            />
          </div>

          <div className='example'>
            <div className='example_text'>Error</div>
            <Input
              name='error'
              placeholder='Error'
              onChange={this.handleInputChange}
              error={this.state.exampleError}
            />
          </div>

          <div className='example'>
            <div className='example_text'>Valid</div>
            <Input
              name='valid'
              placeholder='Valid'
              onChange={this.handleInputChange}
              valid={this.state.exampleValid}
            />
          </div>

          <div className='example'>
            <div className='example_text'>Round</div>
            <Input
              name='round'
              placeholder='Round'
              onChange={this.handleInputChange}
              round
            />
          </div>
        </div>

        <div className='title'>Selects</div>

        <div className='selects'>
          <div className='example example-select'>
            <div className='example_text'>Basic</div>

            <Select
              name='test-select'
              onChange={this.handleSelectChange}
              options={[
                { id: 1, name: 'ddd' },
                { id: 2, name: 'test' }
              ]}
            />
          </div>

          <div className='example example-select'>
            <div className='example_text'>Raise</div>

            <Select
              name='test-select-2'
              onChange={this.handleSelectChange}
              options={[
                { id: 1, name: 'ddd' },
                { id: 2, name: 'test' }
              ]}
              raise
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
