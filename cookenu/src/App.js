import  Router  from "./routes/router";
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from './styles'


const App = () => {
  return (

    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>

  );
}

export default App;
