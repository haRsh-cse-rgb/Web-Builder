import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Input, VStack, Text } from '@chakra-ui/react';
import { register } from '../utils/auth';

export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = register(username, password);
    if (success) {
      router.push('/login');
    } else {
      setError('Username is already taken');
    }
  };

  return (
    
        <Box p={4} maxWidth="md" borderWidth={1} borderRadius="lg" overflow="hidden" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              {error && <Text color="red.500">{error}</Text>}
              <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                focusBorderColor="orange.500"
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                focusBorderColor="orange.500"
              />
              <Button type="submit" colorScheme="orange" w="100%">Sign Up</Button>
            </VStack>
          </form>
        </Box>
      );
}