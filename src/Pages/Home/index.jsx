import styled from 'styled-components'
import { InitialSection } from './InitialSection'
import { ServicesSection } from './ServicesSection'
import { SimulationSection } from './SimulationSection'

const Container = styled.section``
export const Home = () => {
    return (
        <Container>
            <InitialSection />
            <ServicesSection />
            <SimulationSection />
        </Container>
    )
}