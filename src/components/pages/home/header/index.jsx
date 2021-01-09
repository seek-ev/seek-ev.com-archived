import React from 'react'

// Styles
import { Wrapper, Filters, Filter, Searchbar, FiltersTitle } from './styles'


// Components
import { Input } from 'components/basic/input'
import { Select } from 'components/basic/select'

const Header = ({ brands, categories, loading, handleSearchChange, handleCategoryChange, handleBrandChange }) => {
    return (
        <Wrapper>
            <Searchbar>
                <FiltersTitle>Browse cars</FiltersTitle>
                <Input placeholder="Search cars" disabled={loading} noError={true} onChange={handleSearchChange} />
            </Searchbar>
            <Filters>
                <Filter>
                    <FiltersTitle>Category</FiltersTitle>
                    <Select name='category' value="name" disabled={loading} onChange={handleCategoryChange} options={categories} />
                </Filter>
                <Filter>
                    <FiltersTitle>Brands</FiltersTitle>
                    <Select name="brand" value="name" display="shortName" disabled={loading} onChange={handleBrandChange} options={brands} />
                </Filter>
            </Filters>
        </Wrapper>
    )
}

export { Header }