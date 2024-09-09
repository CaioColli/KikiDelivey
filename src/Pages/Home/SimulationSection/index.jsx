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
`

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 48px;
`

const Image = styled.img``

export const SimulationSection = () => {
    return (
        <Container>
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