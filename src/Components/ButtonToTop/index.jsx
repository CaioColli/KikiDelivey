import styled from 'styled-components'
import { HiArrowUp } from 'react-icons/hi'
import { useEffect, useState } from 'react'

const Button = styled.button`
    all: unset;
    position: fixed;
    bottom: 48px;
    right: 48px;
    background-color: var(--Red);
    padding: 16px;
    border-radius: 50%;
    cursor: var(--Pointer);
`

const Icon = styled(HiArrowUp)`
    font-size: 32px;
    color: var(--White);
`

export const ButtonToTop = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }

        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }

    }, [])

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        scrollPosition > 200 && (
            <Button onClick={handleClick}>
                <Icon />
            </Button>
        )
    )
}