import { useState, useCallback } from 'react'

export const getCep = () => {
    const [errorVisibility, setErrorVisibility] = useState(false)
    const [address, setAddress] = useState(null)

    const getAddressFromCep = useCallback(async (cep) => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json()

            console.log(data)

            if (data.erro) {
                setErrorVisibility(true)
                setAddress(null)
            } else {
                setAddress(data)
                setErrorVisibility(false)
            }
        } catch (error) {
            console.error('Erro ao buscar o Cep', error)
        }
    }, [])

    return { errorVisibility, address, getAddressFromCep, setErrorVisibility }
}
