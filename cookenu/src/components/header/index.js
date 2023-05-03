import { HeaderStyled } from "./styled"
import { Button } from '@chakra-ui/react'
import { goToFeedPage, goToLoginPage} from '../../routes'
import { useNavigate } from "react-router-dom"

export const Header = () => {
    const navigate = useNavigate()
    return (
        <HeaderStyled>
            <Button onClick={() => goToFeedPage(navigate)} variant="ghost">Cookenu</Button>
            <Button onClick={() => goToLoginPage(navigate)} variant="ghost">Login</Button>
            
        </HeaderStyled>
    )
}
