import { useForm, useProtectedPage } from "../../hooks"
import { useState, useEffect } from 'react'
import {
    CenteredPageContainer as AddRecipePageContainer,
    FormContainer,
    DescriptionTextArea,
    TitleInput,
    ImageInput
} from '../../components'
import { Button, Textarea } from '@chakra-ui/react'
import { validateName } from "../../constants"
import { AddRecipes } from "../../constants"
import { PageTitleStyled } from "./styled"
import { useNavigate } from "react-router-dom"



export const AddRecipePage = () => {

    const { form, onChangeInputs, clearInputs } = useForm({
        description: "",
        title: "",
        imageUrl: ""
    })

    const navigate = useNavigate()

    const [isTitleValid, setIsTitleValid] = useState(true)

    const [isUrlValid, setIsUrlValid] = useState(true)

    const [isNameValid, setIsNameValid] = useState(true)

    useProtectedPage(navigate)

    useEffect(() => {
        setIsTitleValid(validateName(form.title, 4))
        setIsUrlValid(/http[s]?:\/\/[a-z]+\.com/.test(form.image))
    }, [form])

    const onSubmit = async (e) => {
        e.preventDefault()

            

        try {
            if (isUrlValid && isTitleValid) {
                await AddRecipes({
                    title: form.title,
                    description: form.description,
                    imageUrl: form.image

                })
                alert("Receita cadastrada com sucesso!")
                console.log(form, form.image)
            }
        } catch (e) {
            alert(e.response.data.message)
            console.log(form)
            
        }

    }



    return (
        <AddRecipePageContainer>
            {console.log(form.image)}
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <PageTitleStyled>Adicionar nova receita</PageTitleStyled>

                    <TitleInput
                        value={form.title}
                        onChange={onChangeInputs}
                        isValid={isTitleValid}

                    />

                    <DescriptionTextArea
                        value={form.description}
                        onChange={onChangeInputs}
                        isValid={true}

                    />

                    <ImageInput
                        value={form.image}
                        onChange={onChangeInputs}
                        isValid={isUrlValid}
                    />



                    <Button type="submit" variant="form">Cadastrar</Button>

                </form>
            </FormContainer>
        </AddRecipePageContainer>
    )
}