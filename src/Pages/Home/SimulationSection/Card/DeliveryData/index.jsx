import styled from 'styled-components'

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Title = styled.h1`
    font-size: clamp(24px, 3vw + 1rem, 2rem);
    color: var(--White);
`

const Paragraph = styled.p`
    font-size: clamp(1.125rem, 3vw + 1rem, 1.5rem);
    color: var(--White);
`

export const DeliveryData = () => {
    return (
        <Container>
            <Title>
                Função em Desenvolvimento!
            </Title>
            <Paragraph>
                Volte em breve
            </Paragraph>
        </Container>
    )
}