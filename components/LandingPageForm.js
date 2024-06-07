import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Input, Textarea, VStack, Image } from '@chakra-ui/react';
import { saveLandingPage } from '../utils/state';

export default function LandingPageForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [header, setHeader] = useState('');
  const [footer, setFooter] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [logo, setLogo] = useState('');
  const [logoPrev, setLogoPrev] = useState('');
  const router = useRouter();

  const handleSave = () => {
    saveLandingPage({ title, description, header, footer, image, logo, components: [] });
    router.push('/dashboard');
  };

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(reader.result); 
    };
  };

  const changeLogoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setLogoPrev(reader.result);
      setLogo(reader.result); 
    };
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Textarea
          placeholder="Header Content"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
        <Textarea
          placeholder="Footer Content"
          value={footer}
          onChange={(e) => setFooter(e.target.value)}
        />
        <label htmlFor="image-input">Image:</label>
        <Input
          id="image-input"
          required
          accept="image/*"
          type="file"
          focusBorderColor="purple.600"
          onChange={changeImageHandler}
          css={{
            "&::file-selector-button": {
              cursor: "pointer",
              marginLeft: "-5%",
              width: "110%",
              border: "none",
              height: "100%",
              color: "#805AD5",
              background: "transparent",
            },
          }}
        />
        {imagePrev && (
          <Image src={imagePrev} boxSize="64" objectFit="contain" alt="ImgagePreview"/>
        )}
        <label htmlFor="logo-input">Logo:</label>
        <Input
          id="logo-input"
          required
          accept="image/*"
          type="file"
          focusBorderColor="purple.600"
          onChange={changeLogoHandler}
          css={{
            "&::file-selector-button": {
              cursor: "pointer",
              marginLeft: "-5%",
              width: "110%",
              border: "none",
              height: "100%",
              color: "#805AD5",
              background: "transparent",
            },
          }}
        />
        {logoPrev && (
          <Image src={logoPrev} boxSize="64" objectFit="contain" alt='logoPreview'/>
        )}
        <Button onClick={handleSave} colorScheme="teal">Save</Button>
      </VStack>
    </Box>
  );
}
