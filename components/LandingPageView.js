import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Box, Heading, Text, VStack, Image, HStack, Center , Stack , Link  , Button} from '@chakra-ui/react';
import { getLandingPage } from '../utils/state';

export default function LandingPageView() {
  const router = useRouter();
  const { id } = router.query;
  const [page, setPage] = useState(null);

  useEffect(() => {
    if (id) {
      const page = getLandingPage(id);
      setPage(page);
    }
  }, [id]);

  if (!page) return <Box>Loading...</Box>;

  return (
    
    <Box p={4} style={{background: 'linear-gradient(to right,#9A52C7, #E5AAC3, #9A52C7 ,#E5AAC3)'}}>
  <div className="container">

    <Box display="flex" alignItems="center" justifyContent="space-between" mb={4}>
      {page.logo && <Image src={page.logo} alt="Logo" boxSize="50px" />}
      <Box color={'white'} fontWeight={'bold'} fontSize={'20'}>
        {page.header}
      </Box>
    </Box>
    <Stack
      direction={["column", "row"]}
      height="100%"
      justifyContent={["center", "space-between"]}
      alignItems="center"
      spacing={['16', '56']}
      padding={['4', '8']}
    >

      <VStack width={"full"} alignItems={['center', 'flex-start']} spacing={'6'}>
        <Heading size={['xl', '2xl', '3xl']} fontWeight="bold" textAlign="center" color={'white'}>
          {page.title}
        </Heading>
        <Text fontSize={['md', 'lg']} textAlign="center" color={'white'}>
          {page.description}
        </Text>

      </VStack>

      <Image className="vector" boxSize={['md', 'lg']} src={page.image} alt={page.title} objectFit="contain" margin={['4', '0']} />


    </Stack>
  </div>

  <Box mt={4} p={4} bg="#9A52C7" textAlign={'center'} color={'white'}  fontWeight={'bold'}>
    {page.footer}
  </Box>

</Box>

  );
}
