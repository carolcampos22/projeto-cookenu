import { useForm } from "../../hooks"
import { useState } from 'react'
import {
    CenteredPageContainer as LoginPageContainer,
    FormContainer,
    EmailInput,
    PasswordInput
} from '../../components'
import { Button } from '@chakra-ui/react'
import { validateEmail, validatePassword } from "../../constants"
import { goToSignUpPage, goToFeedPage } from '../../routes/coordinator'


import logo from '../../assets/cookenu.png'
import { useNavigate } from "react-router-dom"
import { Login } from "../../constants"
import { ImageLogo } from "./styled"

export const LoginPage = ({ setIsLoggedIn }) => {
    const navigate = useNavigate()

    const { form, onChangeInputs, clearInputs } = useForm({
        email: "",
        password: ""
    })

    const [isEmailValid, setIsEmailValid] = useState(true)

    const [isPasswordValid, setIsPasswordValid] = useState(true)

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password));
        let response;
        try {
            const { token } = isEmailValid && isPasswordValid && await Login({
                email: form.email,
                password: form.password,

            })
            localStorage.setItem("cookenu.token", token)
            goToFeedPage(navigate)
            setIsLoggedIn(true)
        } catch (e) {
            alert(e.response.data.message)
        }

    }



    return (
        <LoginPageContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <ImageLogo class="image-logo-cookenu">
                        <img src={logo} />
                    </ImageLogo>
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
                    <Button type="button" onClick={() => goToSignUpPage(navigate)} variant="formSignUp">Não possui conta? Cadastre-se!</Button>
                </form>
            </FormContainer>
        </LoginPageContainer>
    )
}