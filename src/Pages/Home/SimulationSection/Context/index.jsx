import { createContext, useState } from 'react'

export const InputContext = createContext()

export const InputProvider = ({ children }) => {
    const [cepOrigem, setCepOrigem] = useState('')
    const [cepDestino, setCepDestino] = useState('')

    const isFormValid = () => {
        return cepOrigem.length === 8 && cepDestino.length === 8
    }

    return (
        <InputContext.Provider value={{ cepOrigem, setCepOrigem, cepDestino, setCepDestino, isFormValid }}>
            {children}
        </InputContext.Provider>
    )
}