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
    Button,

} from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export const LoginPage = () => {

    const { form, onChangeInputs, clearInputs } = useForm({
        name: "",
        password: ""
    })

    const [isEmailValid, setIsEmailValid] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        setIsEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email))
        setIsPasswordValid(/.{6,}/.test(form.password));

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
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {!isPasswordValid ? (
                            <FormErrorMessage as="p">
                                Senha deve conter no mínimo 6 caracteres
                            </FormErrorMessage>
                        ) : undefined}
                    </FormControl>
                    <Button type="submit" variant="form">Entrar</Button>
                    <Button type="button" variant="formSignUp">Não possui conta? Cadastre-se!</Button>
                </form>
            </FormContainer>
        </LoginPageContainer>
    )
}