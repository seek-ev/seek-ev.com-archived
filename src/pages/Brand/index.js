import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

// Styles
import './brand.sass'

// Components
import { Navbar } from '../../components/navbar'
import { BrandContainer } from '../../components/brand'

// Actions
import { showSnackbar } from '../../actions/snackbar'

class Brand extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            brand: {},
            currentBrand: '',
            loading: false
        }
    }

    async componentDidMount() {
        this.setState({ currentBrand: this.props.match.params.name })

        await axios.get(`/brands/name/${this.props.match.params.name}`).then(res => this.setState({ brand: res.data }))
            .catch(err => {
                if (err.response && err.response.status === 404) return
                this.props.showSnackbar(err, 'error')
            })

        if (this.state.brand.name) document.title = this.state.brand.name

        this._ismounted = true

        this.setState({ loading: false })
    }

    async componentDidUpdate() {
        if ((this._ismounted && !this.state.loading) && (this.props.match.params.name.toLowerCase() !== this.state.currentBrand.toLowerCase())) {
            this.setState({ loading: true, currentBrand: this.props.match.params.name })

            await axios.get(`/brands/name/${this.props.match.params.name}`).then(res => this.setState({ brand: res.data }))
                .catch(err => {
                    if (err.response && err.response.status === 404) return
                    this.props.showSnackbar(err, 'error')
                })

            if (this.state.brand.name) document.title = this.state.brand.name

            this.setState({ loading: false })
        }
    }

    componentWillUnmount() {
        document.title = 'Seek EV'
    }

    render() {
        return (
            <div className="container container-brand">
                <Navbar />
                {Object.keys(this.state.brand).length > 0 && !this.state.loading ? <BrandContainer brand={this.state.brand} />
                    : !this.state.loading ?
                        <div className="brand-not-found">
                            <div className="brand-not-found-code">404</div>
                            <div>Oops!</div>
                            <div> <span>{this.props.match.params.name}</span> brand was not found</div>
                        </div>
                        : <div className={this.state.loading ? 'brand-loading' : 'brand-hidden'}></div>}
            </div>
        )
    }
}

export default connect(
    null,
    { showSnackbar }
)(Brand)