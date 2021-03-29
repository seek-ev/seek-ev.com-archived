import React from 'react'

// Styles
import { Wrapper, Cars, LoadingWrapper, Loading, NotFound } from './styles'

// Components
import { Header } from 'components/pages/home/header'
import { CarCard } from 'components/pages/home/car-card'

// Icons
import { MdBatteryCharging60 } from 'react-icons/md'

const HomeWrapper = ({ cars, brands, categories, loading, handleSearchChange, handleCategoryChange, handleBrandChange }) => {
    return (
        <Wrapper>
            <Header
                brands={brands}
                categories={categories}
                loading={loading}
                handleSearchChange={handleSearchChange}
                handleCategoryChange={handleCategoryChange}
                handleBrandChange={handleBrandChange}
            />

            {cars.length > 0 ? <Cars>
                {cars.map((car) => {
                    return <CarCard car={car} key={car.id} />
                })}
            </Cars> : ''}

            {cars.length === 0 && !loading ? <NotFound>
                No cars found <MdBatteryCharging60 />
            </NotFound> : ''}

            {loading ? <LoadingWrapper>
                <Loading />
            </LoadingWrapper> : ''}
        </Wrapper>
    )
}

export { HomeWrapper }