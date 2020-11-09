import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

// Styles
import './brand.sass'

// Components
import { Navbar } from '../../components/navbar'
import { BrandHeader } from '../../components/brand/header'

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
            .catch(err => this.props.showSnackbar(err, 'error'))

        if (this.state.brand) document.title = this.state.brand.name

        this._ismounted = true

        this.setState({ loading: false })
    }

    async componentDidUpdate() {
        if ((this._ismounted && !this.state.loading) && (this.props.match.params.name.toLowerCase() !== this.state.currentBrand.toLowerCase())) {
            this.setState({ loading: true, currentBrand: this.props.match.params.name })

            await axios.get(`/brands/name/${this.props.match.params.name}`).then(res => this.setState({ brand: res.data }))
                .catch(err => this.props.showSnackbar(err, 'error'))

            if (this.state.brand) document.title = this.state.brand.name

            this.setState({ loading: false })
        }
    }

    render() {
        return (
            <div className="landing">
                <Navbar />
                <div className="brand-landing">
                    <BrandHeader
                        avatar={this.state.brand.avatar}
                        name={this.state.brand.name}
                        description={this.state.brand.description}
                        founded={this.state.brand.founded}
                        website={this.state.brand.website}
                        areaServed={this.state.brand.areaServed}
                        headquarters={this.state.brand.headquarters} />
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { showSnackbar }
)(Brand)