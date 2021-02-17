import React, { useState } from 'react'

// Styles
import { Wrapper, Step } from './styles'

// Components
import { CarStep } from './steps/car'

const NewTest = () => {
    const [step, setStep] = useState(0)

    const changeStep = (next) => {
        setStep(next)
    }

    return (
        <Wrapper>
            <Step>Step <span>{step + 1}/5</span></Step>
            {step === 0 ? <CarStep nextStep={changeStep} /> : ''}
        </Wrapper>
    )
}

export { NewTest }