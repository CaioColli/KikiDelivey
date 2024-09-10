import styled from 'styled-components'
import { useContext } from 'react'
import { InputContext } from '../../Context'
import { getCep } from '@/Hooks/AddressFromCep'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
`

const InputContainer = styled.div`
  position: relative;
  height: fit-content;

  @media (min-width: 1440px) {
      min-width: 300px;
  }
`

const TextInput = styled.input`
  font-size: 18px;
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--White);
  padding: 8px 0;
  background-color: transparent;
  outline: none;
  caret-color: var(--White);
  color: var(--White);

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -20px;
    font-size: 16px;
    color: var(--Red);
  }

  &:focus + label + .underline,
  &:not(:placeholder-shown) + label + .underline {
    transform: scaleX(1);
  }
`

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: var(--White);
  transition: all 0.3s ease;
  pointer-events: none;
`

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: var(--Red);
  transform: scaleX(0);
  transition: all 0.3s ease;
`

const ErrorMessage = styled.span`
    max-width: 300px;
    color: var(--ErroRed);
`

export const Input = ({ cepLabel, type }) => {
    const { cepOrigem, setCepOrigem, cepDestino, setCepDestino } = useContext(InputContext)
    const { errorVisibility, setErrorVisibility, getAddressFromCep } = getCep()

    const handleChange = (e) => {
        const cepValue = e.target.value

        if (type === 'origem') {
            setCepOrigem(cepValue)
        } else {
            setCepDestino(cepValue)
        }

        if (cepValue.length === 8) {
            getAddressFromCep(cepValue)
        } else if (cepValue.length < 8) {
            setErrorVisibility(false)
        }
    }

    const handleTest = (e) => {
        const cepValue = e.target.value

        if (type === 'origem') {
            setCepOrigem(cepValue)
        } else {
            setCepDestino(cepValue)
        }

        if (cepValue.length === 8) {
            getAddressFromCep(cepValue)
        } else if (cepValue.length < 8) {
            setErrorVisibility(false)
        }
    }

    return (
        <Container>
            <InputContainer>
                <TextInput
                    value={type === 'origem' ? cepOrigem : cepDestino}
                    onChange={handleChange}
                    required
                    placeholder=""
                    type='text'
                    maxLength='8'
                />
                <Label>
                    {cepLabel}
                </Label>
                <Underline className="underline" />
            </InputContainer>

            {errorVisibility && (
                <ErrorMessage>
                    CEP não encontrado. Por favor, verifique o CEP e digite um número válido com 8 dígitos.
                </ErrorMessage>
            )}
        </Container>
    )
}
