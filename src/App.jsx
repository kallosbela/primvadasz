import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )
}

export default App
