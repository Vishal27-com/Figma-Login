import './App.css'
import LeftBox from './Components/LeftBox'
import RightBox from './Components/RightBox'
import {Box, Flex} from "@chakra-ui/react";
function App() {

  return (
    <Box className="App">
     <Flex h='120vh'>
     <LeftBox />
     <RightBox />
     </Flex> 
    </Box>
  )
}

export default App
