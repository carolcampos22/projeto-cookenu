import { useForm } from "../../hooks"
import { useState } from 'react'
import {
    CenteredPageContainer as LoginPageContainer,
    FormContainer,
    EmailInput,
    PasswordInput
} from '../../components'
import {Button} from '@chakra-ui/react'
import { validateEmail, validatePassword } from "../../constants"


import logo from '../../assets/cookenu.png'

export const LoginPage = () => {

    const { form, onChangeInputs, clearInputs } = useForm({
        name: "",
        password: ""
    })

    const [isEmailValid, setIsEmailValid] = useState(true)
    
    const [isPasswordValid, setIsPasswordValid] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password));

    }

    

    return (
        <LoginPageContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <img src={logo} />
                    <EmailInput
                        value={form.email}
                        onChange={onChangeInputs}
                        isValid={isEmailValid}
                    />

                    <PasswordInput 
                        value={form.password}
                        onChange={onChangeInputs}
                        isValid={isPasswordValid}

                    />
                    
                    <Button type="submit" variant="form">Entrar</Button>
                    <Button type="button" variant="formSignUp">Não possui conta? Cadastre-se!</Button>
                </form>
            </FormContainer>
        </LoginPageContainer>
    )
}