import Totoro from '/Images/Totoro.png'
import Kiki from '/Images/MiniKiki.png'
import Ponyo from '/Images/Ponyo.png'
import styled from 'styled-components'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 120px;
    justify-content: center;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    width: fit-content;
    max-width: 200px;
`

const Card = styled.div`
    align-items: flex-end;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    max-height: 200px;
    max-width: 200px;
`

const Illustration = styled.img``

const Description = styled.p`
    text-align: center;
    color: var(--White);
    font-weight: 700;
    font-size: 24px;
`

export const Cards = ({ containerRef }) => {
    const cardRef = useRef([])

    const data = [
        {
            id: 1,
            background: '#F5F5DC',
            illustration: `${Totoro}`,
            description: 'O melhor sistema de rastreamento'
        },
        {
            id: 2,
            background: '#E05043',
            illustration: `${Kiki}`,
            description: 'Entregas de forma rápida e segura'
        }, {
            id: 1,
            background: '#DE97FF',
            illustration: `${Ponyo}`,
            description: 'Garantia de entrega '
        }
    ]

    useEffect(() => {
        cardRef.current.forEach((card, index) => {
            if (card) {
                const animation = gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: -50
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: index * 0.5,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top center',
                            end: 'bottom center',
                            onEnter: () => animation.play(),
                            onEnterBack: () => animation.restart(),
                        },
                    }
                )
            }
        })
    }, [])

    return (
        <Container>
            {data && data.map((item, index) => (
                <CardContainer key={`${item.id}-${index}`} ref={(el) => (cardRef.current[index] = el)}>
                    <Card style={{ backgroundColor: item.background }}>
                        <Illustration src={item.illustration} />
                    </Card>
                    <Description>
                        {item.description}
                    </Description>
                </CardContainer>
            ))}
        </Container>
    )
}