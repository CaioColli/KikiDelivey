import styled from 'styled-components'
import { Title } from '../ServicesSection'
import DidiImage from '@/assets/Images/Didi.png'
import { SimulationCard } from './Card'
import { InputProvider } from './Context'

const Container = styled.section`
    align-items: center;
    background: linear-gradient(to bottom, var(--Blue), var(--DarkBlue));
    display: flex;
    flex-direction: column;
    padding: 48px 0 120px 0;
    gap: 120px;

    @media (max-width: 425px) {
        gap: 64px;
    }
`

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 48px;
    padding: 0 96px;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    @media (max-width: 1024px) {
        max-width: 40vh;
    }
`

export const SimulationSection = () => {
    return (
        <Container id='SimulationSection'>
            <Title>
                Simule uma entrega
            </Title>
            <Content>
                <InputProvider>
                    <SimulationCard />
                </InputProvider>

                <Image src={DidiImage} alt='Ilustração do personagem Didi' />
            </Content>
        </Container>
    )
}