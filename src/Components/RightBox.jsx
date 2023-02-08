import { Box, Flex, Img } from '@chakra-ui/react'
import React from 'react'
import dummy from "../assets/dummy.svg"
const RightBox = () => {
  return (
    <Box w='50%'  p='21px 22px 20px 0px'>
     <Box  h='100%' bg='#000842' borderRadius='15px' >
      <Flex justify='center' align='center'>
      <Img h='521px' w='521px' src={dummy}  />
      </Flex>
     </Box>   
    </Box>
  )
}

export default RightBox