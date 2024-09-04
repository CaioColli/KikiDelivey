import styled from 'styled-components'
import ImageBg from '/Images/CityBackground.png'

const Container = styled.section`
    align-items: center;
    background-image: url(${ImageBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    padding: 180px 48px;
    gap: 48px;
    flex-wrap: wrap;
    
    height: 100vh;
    @media (max-width: 1440px) {
        padding: 140px 48px;
    }
`

export const InitialSection = () => {
    return (
        <Container>
            
        </Container>
    )
}