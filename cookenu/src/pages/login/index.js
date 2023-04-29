import { useForm } from "../../hooks"
import { useState } from 'react'
import {
    LoginPageContainer,
    FormContainer
} from './styled'
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    InputRightElement,
    InputGroup,
    FormHelperText,
    Button
} from '@chakra-ui/react'

export const LoginPage = () => {

    const { form, onChangeInputs, clearInputs } = useForm({
        name: "",
        password: ""
    })

    const [isEmailValid, setIsEmailValid] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        setIsEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email))

    }

    const onClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <LoginPageContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <FormControl isInvalid={!isEmailValid}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            name="email"
                            //  type='email'
                            value={form.email}
                            onChange={onChangeInputs}
                            placeholder="E-mail"
                        />
                        {!isEmailValid ? (
                            <FormErrorMessage as="p">
                                E-mail inválido.
                            </FormErrorMessage>
                        ) : undefined}
                    </FormControl>
                    <FormControl>
                    <FormLabel>Senha</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                name="password"
                                value={form.password}
                                onChange={onChangeInputs}
                                pr='4.5rem'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Senha'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={onClickShowPassword}>
                                    {showPassword ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Button type="submit" variant="form">Enviar</Button>
                </form>
            </FormContainer>
        </LoginPageContainer>
    )
}