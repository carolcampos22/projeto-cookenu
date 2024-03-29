export const goToLoginPage = (navigator) => {
    navigator('/')
}

export const goToSignUpPage = (navigator) => {
    navigator('/signup')
}

export const goToFeedPage = (navigator) => {
    navigator('/feed')
}

export const goToRecipeDetailPage = (navigator, id) => {
    navigator(`/recipe/${id}`)
}

export const goToAddRecipePage = (navigator) => {
    navigator('/add-recipe')
}

