import { Box, Flex, VStack, Text, Heading, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import AuthForm from '../components/AuthForm';

export default function Login() {
  return (
    <Flex 
      height="100vh" 
      direction={{ base: 'column', md: 'row' }} 
    >
      <Box 
        flex="1" 
        p={10} 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        order={{ base: 2, md: 1 }} 
      >
        <VStack spacing={4} maxW="md" w="100%">
          <Heading fontFamily={'optima'}>Login</Heading>
          <AuthForm />
          <Box mt={4}>
            Don&apos;t have an account?{' '}
            <NextLink href="/signup" passHref>
              <Button variant="link" colorScheme="teal">Sign Up</Button>
            </NextLink>
          </Box>
        </VStack>
      </Box>

      <Box 
        flex="1" 
        position="relative" 
        bgImage="url('https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp')" 
        bgSize="cover" 
        bgPosition="center" 
        order={{ base: 1, md: 2 }} 
        height={{ base: '50vh', md: '100vh' }} 
      >
        <Box 
          position="absolute" 
          top="0" 
          left="0" 
          width="100%" 
          height="100%" 
          bg="rgba(0, 0, 0, 0.5)" 
          color="white" 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
        >
          <Text fontSize={{ base: 'lg', md: '2xl' }} textAlign="center">
            <Heading fontWeight={'900'} fontSize={{ base: '30px', md: '50px' }}>Welcome! Good to see You again.</Heading>  
            <br /> Please log in to continue.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}