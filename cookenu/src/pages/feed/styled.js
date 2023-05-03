import styled from 'styled-components'

export const FeedContainerStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100vw;
    justify-items: center;
    grid-gap: 1vw 0;
    padding-top: 2vw;

`

export const RecipeCardStyled = styled.div`
    width: 20vw;
    border: 3px solid orange;
    border-radius: 1vw;
    transition: 0.5s;

    &:hover{
        transform: scale(1.1);
        cursor: pointer; 
    }
    img{
        padding: 1vw;
        width: 30vw;
        height: 30vh;
    }
    h2{
        text-align: center;
        font-weight: bold;
        font-size: 30px;
        color: orange;
    }
`