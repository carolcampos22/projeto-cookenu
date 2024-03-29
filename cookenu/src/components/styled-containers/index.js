import styled from 'styled-components'

export const CenteredPageContainer = styled.div`
    height: 88vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
    
`

export const FormContainer = styled.div`
   width: 40vw;
   max-width: 95vw;
   display: flex;
   flex-direction: column;
   background-color: white;
   border-radius: 10px;
   padding: 10px;

   input, p, button{
    margin-bottom: 10px;
   }
`