import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Box, Button, Heading, Input, Textarea, VStack, HStack, Image } from '@chakra-ui/react';
import { getLandingPage, saveLandingPage, publishLandingPage, unpublishLandingPage } from '../../../utils/state';

export default function EditLandingPage() {
  const router = useRouter();
  const { id } = router.query;
  const [page, setPage] = useState({ title: '', description: '', image: '', header: '', footer: '', components: [], status: 'Draft' });
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (id) {
      const fetchedPage = getLandingPage(id);
      setPage(fetchedPage || { title: '', description: '', image: '', header: '', footer: '', components: [], status: 'Draft' });
      setImagePreview(fetchedPage?.image || '');
    }
  }, [id]);

  const handleSave = () => {
    saveLandingPage(page);
    router.push('/dashboard');
  };

  const handlePublish = () => {
    publishLandingPage(id);
    setPage({ ...page, status: 'Live' });
  };

  const handleUnpublish = () => {
    unpublishLandingPage(id);
    setPage({ ...page, status: 'Draft' });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPage({ ...page, image: reader.result });
      setImagePreview(reader.result);
    };
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Edit Landing Page</Heading>
      <VStack spacing={4}>
        <Input
          placeholder="Title"
          value={page.title}
          onChange={(e) => setPage({ ...page, title: e.target.value })}
        />
        <Textarea
          placeholder="Description"
          value={page.description}
          onChange={(e) => setPage({ ...page, description: e.target.value })}
        />
        <Input
          placeholder="Header"
          value={page.header}
          onChange={(e) => setPage({ ...page, header: e.target.value })}
        />
        <Input
          placeholder="Footer"
          value={page.footer}
          onChange={(e) => setPage({ ...page, footer: e.target.value })}
        />
        <Box>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <Image src={imagePreview} alt="Preview" boxSize="200px" />
          )}
        </Box>
        <HStack spacing={4}>
          <Button onClick={handleSave} colorScheme="green">Save</Button>
          {page.status === 'Draft' ? (
            <Button onClick={handlePublish} colorScheme="blue">Publish</Button>
          ) : (
            <Button onClick={handleUnpublish} colorScheme="yellow">Unpublish</Button>
          )}
        </HStack>
      </VStack>
    </Box>
  );
}