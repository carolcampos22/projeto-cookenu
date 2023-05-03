import { useForm } from "../../hooks"
import { useState } from 'react'
import {
    CenteredPageContainer as SignUpPageContainer,
    FormContainer,
    EmailInput,
    PasswordInput,
    NameInput
} from '../../components'
import { Button } from '@chakra-ui/react'
import { validateName, validateEmail, validatePassword } from "../../constants"
import { SignUp } from "../../constants"
import logo from '../../assets/cookenu.png'
import { goToFeedPage } from '../../routes/coordinator'
import { useNavigate } from "react-router-dom"


export const SignUpPage = () => {
    const navigate = useNavigate()

    const { form, onChangeInputs, clearInputs } = useForm({
        email: "",
        password: "",
        name: ""
    })

    const [isEmailValid, setIsEmailValid] = useState(true)

    const [isPasswordValid, setIsPasswordValid] = useState(true)

    const [isNameValid, setIsNameValid] = useState(true)

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password));
        setIsNameValid(validateName(form.name))
        
        try {
            const {token} = isNameValid && isEmailValid && isPasswordValid && await SignUp({
                email: form.email,
                password: form.password,
                name: form.name

            })
            localStorage.getItem("cookenu.token", token)
            goToFeedPage(navigate)
        } catch (e) {
            alert(e.response.data.message)
        }

    }



    return (
        <SignUpPageContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <img src={logo} />

                    <NameInput
                        value={form.name}
                        onChange={onChangeInputs}
                        isValid={isNameValid}

                    />

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

                    <Button type="submit" variant="form">Cadastrar</Button>

                </form>
            </FormContainer>
        </SignUpPageContainer>
    )
}

