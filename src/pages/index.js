
import { VStack,Text, Heading, Box, Image } from '@chakra-ui/react';

const Home = () => (
  <VStack>
    <Box boxSize='sm'>
  <Image src='https://avatars.githubusercontent.com/u/53700166?s=400&u=c9b38fb95d2efb56744a17fcec85184be2522841&v=4' alt='Dan Abramov' />
</Box>
    <Heading>MINIYAHIL kEBEDE</Heading>
    <Text fontSize='lg' noOfLines={[1, 2, 3]}>
   The quick brown fox jumps over the lazy dog is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
   The quick brown fox jumps over the lazy dog is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
</Text>
   </VStack>
 
);

export default Home;
