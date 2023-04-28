import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
    LoginPage,
    SignUpPage,
    FeedPage,
    RecipeDetailPage,
    AddRecipePage,
    ErrorPage
} from '../pages'

export const Router = () => {
    return (
        <BrowserRouter>
        
            <Routes>
                <Route path='/login' element={<LoginPage />}/>
                <Route path='/signup' element={<SignUpPage />}/>
                <Route path='/feed' element={<FeedPage />}/>
                <Route path='/add-recipe' element={<AddRecipePage />}/>
                <Route path='/recipe/:id' element={<RecipeDetailPage />}/>
                <Route path='*' element={<ErrorPage />}/>
            </Routes>
        
        </BrowserRouter>
    )
}