import styled from 'styled-components'
import KikiImage from '@/assets/Images/Kiki.png'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const Image = styled.img`
    @media (max-width: 1440px) {
        max-width: 30vh;
    }
`

export const Illustration = () => {
    const illustrationRef = useRef(null)

    const distance = 0
    const angle = 45

    const radian = angle * (Math.PI / 180)

    const xChange = distance * Math.cos(radian)
    const yChange = distance * Math.sin(radian)

    useEffect(() => {
        if (illustrationRef.current) {
            const animation = gsap.fromTo(illustrationRef.current, {
                x: 150,
                y: 50
            }, {
                x: xChange,
                y: yChange,
                duration: 2,
                ease: 'circ.out',
                scrollTrigger: {
                    trigger: illustrationRef.current,
                    onEnter: () => animation.play(),
                    onEnterBack: () => animation.restart()
                }
            })
        }
    }, [])

    return (
        <Image src={KikiImage} alt='Ilustração da personagem Kiki' ref={illustrationRef} />
    )
}