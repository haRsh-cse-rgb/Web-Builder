import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Input, VStack, Text } from '@chakra-ui/react';
import { login } from '../utils/auth';

export default function AuthForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      router.replace('/dashboard');
    } else {
      setError('Invalid username or password');
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
            focusBorderColor="teal.500"
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            focusBorderColor="teal.500"
          />
          <Button type="submit" colorScheme="teal" w="100%">Login</Button>
        </VStack>
      </form>
    </Box>
  );
}
