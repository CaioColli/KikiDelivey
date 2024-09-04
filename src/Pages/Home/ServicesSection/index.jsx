import { useRef } from 'react'
import styled from 'styled-components'
import { Cards } from './Cards'

const Container = styled.section`
    align-items: center;
    background-color: var(--Orange);
    display: flex;
    flex-direction: column;
    padding: 48px 48px 120px 48px;
    gap: 120px;

    @media (max-width: 425px) {
        gap: 64px;
    }
`

const Title = styled.h1`
    font-size: 48px;
    font-size: clamp(1.5rem, 3vw + 1rem, 48px);
    color: var(--White);
`

export const ServicesSection = () => {
    const containerRef = useRef(null)

    return (
        <Container ref={containerRef} id='ServicesSection'>
            <Title>
                Nosso serviços
            </Title>

            <Cards containerRef={containerRef} />
        </Container>
    )
}