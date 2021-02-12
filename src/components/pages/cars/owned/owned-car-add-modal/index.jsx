import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// Styles
import { Wrapper, ModalContent, Header, HeaderClose, LoadingWrapper } from './styles'
import { Loading } from './owned-car-add-modal-timeline/styles'

// Icons
import { MdClose } from 'react-icons/md'

// Components
import { OwnedCarAddModalSearch } from './owned-car-add-modal-search'
import { OwnedCarAddModalVersion } from './owned-car-add-modal-version'
import { OwnedCarAddModalTimeline } from './owned-car-add-modal-timeline'

// Actions
import { showSnackbar } from 'actions/snackbar'

const OwnedCarAddModal = ({ show, close, add }) => {
    const [loading, setLoading] = useState(false)
    const [timeline, setTimeline] = useState(null)
    const [versions, setVersions] = useState([])
    const [choseCar, setCar] = useState({})
    const [step, setStep] = useState(0)
    const dispatch = useDispatch()

    const chosePropCar = async (car) => {
        await setStep(1)
        await setCar(car)
    }

    const setPropsVersions = async (versions, timeline) => {
        await setStep(2)
        await setTimeline(timeline)
        await setVersions(versions)
    }

    const addCar = async (version) => {
        await setLoading(true)

        await axios.post('/users/@me/cars', {
            versionId: version, carId: choseCar.id, timelineId: timeline
        }).then(res => {
            add(res.data)
            setCar({})
            setTimeline(null)
            setVersions([])
            setStep(0)
        }).catch(err => {
            setStep(0)
            dispatch(showSnackbar(err, 'error'))
        })

        setLoading(false)
        close()
    }

    return (
        <Wrapper show={show}>
            {loading ? <LoadingWrapper>
                <Loading>
                    <div></div>
                    <div></div>
                    <div></div>
                </Loading>
            </LoadingWrapper> :
                <ModalContent>
                    <Header>
                        {step === 0 ? 'Find your car' : step === 1 ? 'Choose production year' : 'Choose version'}
                        <HeaderClose onClick={() => close()}>
                            <MdClose />
                        </HeaderClose>
                    </Header>
                    {step === 0 ?
                        <OwnedCarAddModalSearch setCar={chosePropCar} />
                        : step === 1 ? <OwnedCarAddModalTimeline car={choseCar} setVersions={setPropsVersions} setStep={setStep} />
                            : <OwnedCarAddModalVersion versions={versions} add={addCar} />}
                </ModalContent>
            }
        </Wrapper>
    )
}

export { OwnedCarAddModal }