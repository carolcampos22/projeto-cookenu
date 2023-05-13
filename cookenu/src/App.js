import Router from "./routes/router";
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles'
import { useState } from 'react'
import { Mode } from "./components/mode";


const App = () => {
  const [mode, setMode] = useState('light')

  return (

    <ChakraProvider theme={theme}>
      <Mode mode={mode} setMode={setMode}/>
      <Router />
    </ChakraProvider>

  );
}

export default App;
