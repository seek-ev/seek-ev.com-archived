import React from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

// Styles
import './brand.sass'

// Components
import { Navbar } from 'components/navbar'
import { BrandContainer } from 'components/pages/brand'

// Actions
import { showSnackbar } from 'actions/snackbar'

class Brand extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            brand: {},
            currentBrand: '',
            loading: true
        }
    }

    async componentDidMount() {
        this.setState({ currentBrand: this.props.match.params.name })

        await axios.get(`/brands/name/${this.props.match.params.name}`).then(res => this.setState({ brand: res.data }))
            .catch(err => {
                if (err.response && err.response.status === 404) return
                this.props.showSnackbar(err, 'error')
            })

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

            this.setState({ loading: false })
        }
    }

    render() {
        return (
            <div className="container container-brand">
                <Helmet>
                    <title>{this.state.brand && this.state.brand.name ? this.state.brand.name : 'Brand not found'}</title>
                    <meta name="description" content={this.state.brand && this.state.brand.description ? this.state.brand.description : ''} />

                    {this.state.brand && this.state.brand.name ? <meta property="og:title" content={this.state.brand.name} /> : ''}
                    {this.state.brand && this.state.brand.description ? <meta property="og:description" content={this.state.brand.description} /> : ''}
                    {this.state.brand && this.state.brand.avatar ? <meta property="og:image" content={this.state.brand.avatar.url} /> : ''}
                </Helmet>

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