import { ButtonToTop } from '@/Components/ButtonToTop'
import { Header } from '@/Components/Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.section`
    margin: 0 auto;
    max-width: 100%;
    width: 1920px;
    position: relative;
    overflow: hidden;
`

export const PagePattern = () => {
    return (
        <Container>
            <Header />
            <Outlet />
            <ButtonToTop />
        </Container>
    )
}