import styled from 'styled-components'

const Container = styled.aside`
    background-color: var(--Transparent);
    border-radius: 30px;
    max-width: 900px;
    width: fit-content;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Title = styled.h1`
    // Nunca sera menor que 2rem
    // O tamanho será ajustado de acordo com 3vw + 1rem
    // Nunca sera maior que 5rem
    font-size: clamp(1.5rem, 3vw + 1rem, 5rem);
    font-weight: 900;
    color: var(--White);
`

const Paragraph = styled.p`
    font-size: clamp(1rem, 3vw + 1rem, 1.5rem);
    color: var(--White);
`

export const Button = styled.button`
    all: unset;
    background-color: var(--Red);
    border-radius: 30px;
    color: var(--White);
    padding: 16px 32px;
    width: fit-content;
    transition: 0.2s ease;
    cursor: var(--Pointer);

    &:hover {
        transform: scale(1.05);
    }
`

export const Card = () => {
    return (
        <Container>
            <Title>
                Aproveite sua entrega com a entrega mais rápida do Ghibli
            </Title>
            <Paragraph>
                Despache sua encomenda que entregamos sem demora
            </Paragraph>
            <Button>
                Começar
            </Button>
        </Container>
    )
}