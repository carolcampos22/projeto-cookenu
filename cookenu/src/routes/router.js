import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
    LoginPage,
    SignUpPage,
    FeedPage,
    RecipeDetailPage,
    AddRecipePage,
    ErrorPage
} from '../pages'
import { Header } from '../components'
import { useState } from 'react'

const Router = ({loading}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <BrowserRouter>
            <Header
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            />
            <Routes>
                <Route path='/' element={<LoginPage loading={loading} setIsLoggedIn={setIsLoggedIn}/>} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/feed' element={<FeedPage />} />
                <Route path='/add-recipe' element={<AddRecipePage />} />
                <Route path='/recipe/:id' element={<RecipeDetailPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Router;