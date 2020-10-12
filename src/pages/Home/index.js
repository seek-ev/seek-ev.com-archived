import React from 'react'

// Styles
import './home.sass'

// Components
import Input from '../../components/basic/input'
import Button from '../../components/basic/button'
import Select from '../../components/basic/select'
import Snackbar from '../../components/notifications/snackbar'

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.showSnack = this.showSnack.bind(this)

    this.state = {
      snackType: '',
      showSnack: false,
      exampleError: '',
      exampleValid: false
    }
  }

  async handleInputChange(e) {
    if (e.name === 'error') {
      if (e.value.length > 2)
        await this.setState({
          exampleError: 'Ahhh too much characters aaaaaaaaaaaaaaaaaa'
        })
      else await this.setState({ exampleError: '' })
    }

    if (e.name === 'valid') {
      if (e.value.length > 2) await this.setState({ exampleValid: true })
      else await this.setState({ exampleValid: false })
    }

    await this.setState({ [e.name]: e.value })
  }

  async handleSelectChange(e) {
    await this.setState({
      [e.name]: e.value
    })
  }

  async showSnack(type) {
    await this.setState({ snackType: type })
    await this.setState({ showSnack: true })
    setTimeout(() => this.setState({ showSnack: false }), 4000)
  }

  render() {
    return (
      <div className='landing'>
        <div className='title'>Buttons</div>
        <div className='buttons'>
          <div className='example example-buttons'>
            <div className='example-text'>Primary</div>
            <Button text='Log in' />
          </div>
          <div className='example example-buttons'>
            <div className='example-text'>Clean</div>
            <Button text='Log in' clean />
          </div>
          <div className='example example-buttons'>
            <div className='example-text'>Raise</div>
            <Button text='Log in' raise />
          </div>
          <div className='example example-buttons'>
            <div className='example-text'>Error</div>
            <Button text='Log in' error />
          </div>
          <div className='example example-buttons'>
            <div className='example-text'>Dark</div>
            <Button text='Log in' dark />
          </div>
          <div className='example example-buttons'>
            <div className='example-text'>Blue</div>
            <Button text='Log in' blue />
          </div>
          <div className='example example-buttons'>
            <div className='example-text'>Round</div>
            <Button text='Log in' round />
          </div>
        </div>

        <div className='title'>Inputs</div>

        <div className='inputs'>
          <div className='example'>
            <div className='example-text'>Basic</div>
            <Input
              name='basic'
              placeholder='Name'
              onChange={this.handleInputChange}
            />
          </div>

          <div className='example'>
            <div className='example-text'>Basic with border</div>
            <Input
              name='basic_border'
              placeholder='Basic with border'
              onChange={this.handleInputChange}
              border
            />
          </div>

          <div className='example'>
            <div className='example-text'>Raise</div>
            <Input
              name='raise'
              placeholder='Raise'
              onChange={this.handleInputChange}
              raise
            />
          </div>

          <div className='example'>
            <div className='example-text'>Error</div>
            <Input
              name='error'
              placeholder='Error'
              onChange={this.handleInputChange}
              error={this.state.exampleError}
            />
          </div>

          <div className='example'>
            <div className='example-text'>Valid</div>
            <Input
              name='valid'
              placeholder='Valid'
              onChange={this.handleInputChange}
              valid={this.state.exampleValid}
            />
          </div>

          <div className='example'>
            <div className='example-text'>Round</div>
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
            <div className='example-text'>Basic</div>

            <Select
              name='test-select'
              onChange={this.handleSelectChange}
              value="name"
              options={[
                { id: 1, name: 'ddd' },
                { id: 2, name: 'test' }
              ]}
            />
          </div>

          <div className='example example-select'>
            <div className='example-text'>Raise</div>

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

        <div className="title">Snackbars</div>

        <div className='buttons'>
          <div className='example example-buttons'>
            <div className='example-text'>Basic</div>
            <Button text='Show' onClick={this.showSnack} />
          </div>

          <div className='example example-buttons'>
            <div className='example-text'>Success</div>
            <Button text='Show' onClick={() => this.showSnack('success')} />
          </div>

          <div className='example example-buttons'>
            <div className='example-text'>Error</div>
            <Button text='Show' onClick={() => this.showSnack('error')} />
          </div>
        </div>

           <Snackbar text="Incorret password/email" type={this.state.snackType} show={this.state.showSnack}  />
      </div>
    )
  }
}


