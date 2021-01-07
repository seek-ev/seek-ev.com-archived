import React from 'react'

// Styles
import { Wrapper, List, UserCar, Spacer, UserCarLeft, Number, Model, Verified, Created, NoCars } from './styles'

const Cars = ({ cars }) => {
    return (
        <Wrapper>
            {cars.length > 0 ? <List>
                {cars.map((car) => {
                    return <UserCar to={`/cars/${car.id}`} key={car.id}>
                        <UserCarLeft>
                            <Number>{car.id}</Number>
                            <Spacer>|</Spacer>
                            <Model>
                                {car.model}
                                <Verified verified={car.verified}>
                                    {car.verified ? 'Verified' : 'Unverified'}
                                </Verified>
                            </Model>
                        </UserCarLeft>
                        <Created>{new Date(car.createdAt).toLocaleDateString()}</Created>
                    </UserCar>
                })}
            </List>
                : <NoCars>
                    You haven't added any cars yet
         </NoCars>}
        </Wrapper>
    )
}

export { Cars }