import { useContext, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../InitialSection/Card'
import { SlArrowLeftCircle } from 'react-icons/sl'
import { Input } from './Input'
import { InputContext } from '../Context'
import { DeliveryData } from './DeliveryData'

const CardContainer = styled.div`
    perspective: 1000px;
    min-width: 600px;
    min-height: 600px;
`

const Card = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: 0.5s;
    transform: ${({ $isFliped }) => ($isFliped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`

const CardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    border-radius: 30px;
`

const Front = styled(CardFace)`
    background-color: var(--Transparent);
    display: flex;
    align-items: center;
    gap: 48px;
    flex-direction: column;
`

const Back = styled(CardFace)`
    background-color: var(--Transparent);
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

const Header = styled.header`
    width: 100%;
    position: absolute;
    top: 24px;
    left: 24px;
`

const BackIcon = styled(SlArrowLeftCircle)`
    font-size: clamp(24px, 3vw + 1rem, 2rem);
    color: var(--White);
    cursor: var(--Pointer);
`

export const SimulationCard = () => {
    const [isFliped, setIsFliped] = useState(false)
    const { isFormValid } = useContext(InputContext)

    const handleFlip = () => {
        setIsFliped(!isFliped)
    }

    return (
        <CardContainer>
            <Card $isFliped={isFliped}>
                <Front>
                    <Input cepLabel='CEP - Origem' type='origem' />
                    <Input cepLabel='CEP - Destino' type='destino' />

                    <Button onClick={handleFlip} disabled={!isFormValid()}>
                        Calcular
                    </Button>
                </Front>

                <Back>
                    <Header>
                        <BackIcon onClick={handleFlip} />
                    </Header>

                    <DeliveryData />
                </Back>
            </Card>
        </CardContainer>
    )
}