import styled from 'styled-components'
import IconLogo from '/Images/LogoIcon.svg'
import { scrollTo } from '@/Utils/scrollTo'

const Container = styled.header`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
`

const IconContainer = styled.div`
    align-items: center;
    cursor: var(--Pointer);
    display: flex;
    gap: 8px;
`

const Icon = styled.img`
    max-width: 37px;
`

const TitlePage = styled.span`
    color: var(--White);
    font-family: 'Irish Grover', system-ui;
    font-size: 24px;
`

const NavHeader = styled.nav``

const ListHeader = styled.ul`
    display: flex;
    gap: 48px;
`

const ItemHeader = styled.li`
    all: unset;
    font-family: 'Irish Grover', system-ui;
    color: var(--White);
    font-size: clamp(16px, 2vw + 1rem, 1.5rem);
    transition: 0.3s ease;
    cursor: var(--Pointer);

    &:hover {
        color: var(--Orange);
        transform: scale(1.05);
    }
`

export const Header = () => {
    return (
        <Container>

            <IconContainer>
                <Icon src={IconLogo} alt='Icone vassoura de bruxa' />
                <TitlePage>
                    KikiDelivery
                </TitlePage>
            </IconContainer>

            <NavHeader>
                <ListHeader>
                    <ItemHeader>
                        Home
                    </ItemHeader>

                    <ItemHeader onClick={() => scrollTo('#ServicesSection')}>
                        Sobre
                    </ItemHeader>

                    <ItemHeader>
                        Serviços
                    </ItemHeader>
                </ListHeader>
            </NavHeader>

        </Container>
    )
}