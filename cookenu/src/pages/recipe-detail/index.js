import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GetRecipes } from '../../constants'
import { PageContainer } from './styled'


export const RecipeDetailPage = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState([])
    
    useEffect(() => {
        GetRecipes(id)
        .then(recipe => {
            console.log(recipe)
            setRecipe(recipe)
        })
        .catch(e => alert(e.response.data.message))
    }, [])
    
    return (
        !recipe ? <h1>Não há receitas com este ID.</h1> : (
            <PageContainer>
                <img src={recipe.imageUrl} alt="Imagem indisponível" />
                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>
            </PageContainer>
        )
    )
}