import { HeaderStyled } from "./styled"
import { Button } from '@chakra-ui/react'

export const Header = () => {
    return (
        <HeaderStyled>
            <Button variant="ghost">Cookenu</Button>
            <Button variant="ghost">Login</Button>
            
        </HeaderStyled>
    )
}
