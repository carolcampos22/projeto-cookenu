import { FeedContainerStyled, Re, RecipeCardStyled } from "./styled"
import { ListRecipes } from "../../constants"
import {useEffect, useState} from 'react'
import {goToRecipeDetailPage} from '../../routes'
import { useNavigate } from "react-router-dom"
import { Button } from "@chakra-ui/react"

export const FeedPage = () => {
    const navigate = useNavigate()
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        ListRecipes()
        .then((data) => {
            console.log(data)
            setRecipes(data)
        })
        .catch((error) => console.log(error))
    }, [])

    const onClickCard = (id) => {
        goToRecipeDetailPage(navigate, id)
    }
    return (
        <FeedContainerStyled>
            {recipes.map((recipe, i) => ( 
                <RecipeCardStyled key={i} onClick={() => onClickCard(recipe.id)}>
                    <img src={recipe.imageUrl
} alt="Imagem indisponível"/>
                    <h2>{recipe.title}</h2>
                </RecipeCardStyled>
            ))}
            <Button variant="add-recipe">+</Button>
        </FeedContainerStyled>
    )
}

//TOKEN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRhZTk5NWJkLWIzZDItNGM1NS04ZTRlLTQzNDUxYWUyNTc0YiIsIm5hbWUiOiJMZXTDrWNpYSBDaGlqbyIsImlhdCI6MTY4MzA4MzkxMiwiZXhwIjoxNjgzMTcwMzEyfQ.uW6UBzIMcAf2BwX35JqJ40OK6PAr9huroZcrt3ryCoM