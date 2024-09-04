import styled from 'styled-components'
import { InitialSection } from './InitialSection'
import { ServicesSection } from './ServicesSection'

const Container = styled.section`
    
`
export const Home = () => {
    return (
        <Container>
            <InitialSection />
            <ServicesSection />
        </Container>
    )
}