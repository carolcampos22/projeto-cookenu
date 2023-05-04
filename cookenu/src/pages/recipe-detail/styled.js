import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 50vw;
    max-width: 95vw;
    margin-top: 5vh;

    img{
        width: 30vw;
    }

    h1{
        color: orange;
        font-size: 4vh;
        font-weight: 700;
    }

    p{
        width: 35vw;
    }
`