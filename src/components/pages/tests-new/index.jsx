import React, { useState } from 'react'

// Styles
import { Wrapper, Step } from './styles'

// Components
import { CarStep } from './steps/car'
import { TestStep } from './steps/test'
import { VersionStep } from './steps/version'

const NewTest = () => {
    const [car, setCar] = useState(null)
    const [step, setStep] = useState(1)

    const nextCar = (car) => {
        setCar(car)
        setStep(2)
    }

    const thirdStep = (car) => {
        setCar(car)
        setStep(3)
    }

    const changeStep = (step) => {
        setStep(step)
    }

    return (
        <Wrapper>
            <Step>Step <span>{step}/3</span></Step>
            {step === 1 ? <CarStep nextCar={nextCar} nextOwned={thirdStep} /> : ''}
            {step === 2 ? <VersionStep previousStep={changeStep} car={car} next={thirdStep} /> : ''}
            {step === 3 ? <TestStep previousStep={changeStep} car={car} /> : ''}
        </Wrapper>
    )
}

export { NewTest }