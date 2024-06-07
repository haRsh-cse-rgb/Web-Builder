import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getLandingPages, deleteLandingPage } from '../../utils/state';

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

  return (
    <Box p={4}>
      <Heading mb={4}>Dashboard</Heading>
      <Button onClick={() => router.push('/dashboard/new')} colorScheme="teal" mb={4}>
        Create New Page
      </Button>
      <VStack spacing={4}>
        {pages.map(page => (
          <Box key={page.id} p={4} borderWidth={1} borderRadius="lg">
            <Heading size="md">{page.title}</Heading>
            <Button onClick={() => router.push(`/dashboard/edit/${page.id}`)} colorScheme="teal">
              Edit
            </Button>
            <Button onClick={() => handleDelete(page.id)} colorScheme="red">
              Delete
            </Button>
            <Button onClick={() => router.push(`/page/${page.id}`)} colorScheme="blue">
              View
            </Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}