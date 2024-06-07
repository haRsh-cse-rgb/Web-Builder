import { Box, Flex, VStack, Text, Heading, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import SignUpForm from '../components/SignUpForm';

export default function SignUp() {
  return (
    <Flex height="100vh"
    direction={{base: 'column' ,  md: 'row'}}>
      
      <Box
        flex="1"
        position="relative"
        backgroundImage="url('https://miro.medium.com/v2/resize:fit:1400/1*YMJDp-kqus7i-ktWtksNjg.jpeg')"
        backgroundSize="cover"
        backgroundPosition="center"
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
          <Text fontSize="2xl" textAlign="center">
           <Heading fontWeight={'900'} fontSize={'50'}>Welcome to Our, Landing Page Builder.</Heading>  <br /> Please sign up to get started.
          </Text>
        </Box>
      </Box>

      
      <Box flex="1" p={10} display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4} maxW="md" w="100%">
          <Heading fontFamily={"optima"}>Sign Up</Heading>
          <SignUpForm />
          <Box mt={4}>
            Already have an account?{' '}
            <NextLink href="/login" passHref>
              <Button variant="link" colorScheme="orange">Login</Button>
            </NextLink>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}