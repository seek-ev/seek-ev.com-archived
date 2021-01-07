import React from 'react'

// Styles
import {
    Wrapper,
    HeaderRow,
    HeaderInput,
    HeaderSelect,
    HeaderInputSpan,
    HeaderSelectSpan,
    HeaderInputCheckbox,
    HeaderInputCheckboxSpan
} from './styles'

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

    const onConceptChange = (e) => {
        props.conceptChange(e)
    }

    return (
        <Wrapper>
            <HeaderRow>
                <HeaderInput className="new-header-basic-input">
                    <HeaderInputSpan>Car model (ex. Kona, X, Leaf)</HeaderInputSpan>
                    <Input placeholder="Model" onChange={onModelChange} />
                </HeaderInput>

                <HeaderInput className="new-header-basic-input">
                    <HeaderInputSpan>Production years (ex. 2016 - present)</HeaderInputSpan>
                    <Input placeholder="Production years" onChange={onYearsChange} />
                </HeaderInput>
            </HeaderRow>

            <HeaderRow>
                <HeaderSelect className="new-header-basic-select">
                    <HeaderSelectSpan>Car category (ex. Sedan, SUV)</HeaderSelectSpan>
                    <Select name="category" onChange={onCategoryChange} options={props.categories} />
                </HeaderSelect>

                <HeaderSelect className="new-header-basic-select">
                    <HeaderSelectSpan>Car brand (ex. Tesla, Mercedes)</HeaderSelectSpan>
                    <Select name="brand" onChange={onBrandChange} options={props.brands} />
                </HeaderSelect>
            </HeaderRow>

            <HeaderRow>
                <HeaderInputCheckbox className="new-header-basic-input-checkbox">
                    <HeaderInputCheckboxSpan>Is it a concept car?</HeaderInputCheckboxSpan>
                    <Input type="checkbox" name="category" onChange={onConceptChange} options={props.categories} />
                </HeaderInputCheckbox>
            </HeaderRow>
        </Wrapper>
    )
}

export { NewBasic }