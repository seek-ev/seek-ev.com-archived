import React from 'react'

// Styles
import './basic.sass'

// Components
import { Input } from 'components/basic/input'
import { Select } from 'components/basic/select'

const NewBasic = (props) => {

    const onModelChange = (e) => {
        props.modelChange(e)
    }

    const onYearsChange = (e) => {
        props.yearsChange(e)
    }

    const onCategoryChange = (e) => {
        props.categoryChange(e)
    }

    const onBrandChange = (e) => {
        props.brandChange(e)
    }

    return (
        <div className="new-header-basic">
            <div className="new-header-basic-row">
                <div className="new-header-basic-input">
                    <span>Car model (ex. Kona, X, Leaf)</span>
                    <Input placeholder="Model" onChange={onModelChange} />
                </div>

                <div className="new-header-basic-input">
                    <span>Production years (ex. 2016 - present)</span>
                    <Input placeholder="Production years" onChange={onYearsChange} />
                </div>
            </div>

            <div className="new-header-basic-row">
                <div className="new-header-basic-select">
                    <span>Car category (ex. Sedan, SUV)</span>
                    <Select name="category" onChange={onCategoryChange} options={props.categories} />
                </div>

                <div className="new-header-basic-select">
                    <span>Car brand (ex. Tesla, Mercedes)</span>
                    <Select name="brand" onChange={onBrandChange} options={props.brands} />
                </div>
            </div>
        </div>
    )
}

export { NewBasic }