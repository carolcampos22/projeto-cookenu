import { useForm } from "../../hooks"
import { useState } from 'react'
import {
    CenteredPageContainer as SignUpPageContainer,
    FormContainer,
    EmailInput,
    PasswordInput,
    NameInput
} from '../../components'
import {Button} from '@chakra-ui/react'
import { validadeName, validateEmail, validatePassword } from "../../constants"


import logo from '../../assets/cookenu.png'

export const SignUpPage = () => {

    const { form, onChangeInputs, clearInputs } = useForm({
        name: "",
        password: "",
        name: ""
    })

    const [isEmailValid, setIsEmailValid] = useState(true)
    
    const [isPasswordValid, setIsPasswordValid] = useState(true)

    const [isNameValid, setIsNameValid] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password));
        setIsNameValid(validadeName(form.name))

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