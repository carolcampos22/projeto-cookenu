import { FeedContainerStyled, Re, RecipeCardStyled } from "./styled"
import { ListRecipes } from "../../constants"
import { useEffect, useState } from 'react'
import { goToRecipeDetailPage, goToAddRecipePage, goToLoginPage } from '../../routes'
import { useNavigate } from "react-router-dom"
import { Button } from "@chakra-ui/react"
import { useProtectedPage } from "../../hooks"
import { Filter } from "../../components"

export const FeedPage = () => {
    const navigate = useNavigate()
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState("")

    useProtectedPage(navigate)

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

    const onClickAddButton = () => {
        goToAddRecipePage(navigate)
    }
    return (
        <div>
            <Filter
                query={query}
                setQuery={setQuery}
            />
            <FeedContainerStyled>
                {recipes
                    .filter((recipe) => {
                        return recipe.title.toLowerCase().includes(query)
                    })
                    .map((recipe, i) => (
                        <RecipeCardStyled key={i} onClick={() => onClickCard(recipe.id)}>
                            <img src={recipe.imageUrl
                            } alt="Imagem indisponível" />
                            <h2>{recipe.title}</h2>
                        </RecipeCardStyled>
                    ))}
                <Button onClick={() => onClickAddButton()} variant="add-recipe">+</Button>
            </FeedContainerStyled>
        </div>
    )
}

