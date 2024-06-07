import { Box, Button, Heading, VStack, Text, Flex, Image, Card, CardBody, CardFooter, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getLandingPages, deleteLandingPage } from '../utils/state';
import { logout } from '../utils/auth';

export default function Dashboard() {
  const [pages, setPages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const pages = getLandingPages();
    setPages(pages);
  }, []);

  const handleDelete = (id) => {
    deleteLandingPage(id);
    setPages(getLandingPages());
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <Box p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading flex="1" textAlign="center" fontSize={50} fontWeight={'700'}>Dashboard</Heading>
        <Button onClick={handleLogout} colorScheme="red">
          Logout
        </Button>
      </Flex>
      <Button onClick={() => router.push('/dashboard/new')} colorScheme="green" mb={4}>
        Create New Page
      </Button>
      <VStack spacing={4} width="100%">
        {pages.map(page => (
          <Card
            key={page.id}
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            width="100%"
          >
            {page.image && (
              <Image
                src={page.image}
                alt={page.title}
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                borderRadius="md"
              />
            )}
            <Stack flex="1">
              <CardBody>
                <Heading size="md">{page.title}</Heading>
                <Text py="2" color={page.status === 'Live' ? 'red.500' : 'black'}>
                  {page.status === 'Live' && (
                    <Box as="span" display="inline-block" mr="2" borderRadius="50%" bg="red.500" width="8px" height="8px" />
                  )}
                  Status: {page.status || 'Draft'}
                </Text>
              </CardBody>
              <CardFooter display="flex" flexWrap="wrap">
                <Button onClick={() => router.push(`/dashboard/edit/${page.id}`)} colorScheme="green" mt={2} mr={2}>
                  Edit
                </Button>
                <Button onClick={() => handleDelete(page.id)} colorScheme="red" mt={2} mr={2}>
                  Delete
                </Button>
                <Button onClick={() => router.push(`/page/${page.id}`)} colorScheme="blue" mt={2} mr={2}>
                  View
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </VStack>
    </Box>
  );
}
