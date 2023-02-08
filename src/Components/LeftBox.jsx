import { Box, Button, Checkbox, Flex, Img, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import email from "../assets/message.svg"
import padlock from "../assets/padlock.svg"
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
const LeftBox = () => {
  return (
    <Box w='50%' p='132px 117px 132.8px 135px'>
    <Box w='431px' h='635.12px'>
    <Text fontSize='30px' lineHeight='45px' fontWeight='500'>Sign in</Text>
    <Text mt='22px'>If you don’t have an account register</Text>
    <Text mt='6px'>You can   Register here !</Text>
    <Stack mt='52px' gap='49px'>
     <Box>
     <Text fontSize='13px' color='#999999'>Email</Text>
     <InputGroup>
     <InputLeftElement>
     <Img src={email} w='17px' h='17px' />
     </InputLeftElement>
     <Input type='text' placeholder='Enter your email address' borderBottom='1px solid #000842' borderRadius='0' />
     </InputGroup>
     </Box>
     <Box>
     <Text fontSize='13px' color='#999999'>Password</Text>
     <InputGroup>
     <InputLeftElement>
     <Img src={padlock} w='17px' h='17px' />
     </InputLeftElement>
     <Input type='text' placeholder='Enter your Password' borderBottom='1px solid #000842' borderRadius='0' />
     </InputGroup>
     </Box>   
    </Stack>
    <Flex mt='17px' justify='space-between'>
      <Checkbox><Text fontSize='12px' color='#4D4D4D'>Remember me</Text></Checkbox>  
      <Text fontSize='12px' color='#4D4D4D'>Forgot Password?</Text>
    </Flex>
    <Button mt='60px' variant='solid' w='429px' h='53px' bg='#0C21C1' fontSize='17px' p='14px 191px 13px 192px' color='#fff' borderRadius='30px'>Login</Button>
    <Text align='center' mt='39px' color='#B5B5B5'>or continue with</Text>
    <Box mt='31px' w='100%'>
        <Flex justify='center' gap='10px'>
            <Img h='38px' src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png' />
            <Img src={apple} />
            <Img src={google} />
        </Flex>
    </Box>
    </Box>
    </Box>
  )
}

export default LeftBox