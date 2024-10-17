'use client';
import { useState } from 'react';
import { ChakraProvider, extendTheme, Box, Button, Input, Flex, Stack, Image, Text, Heading, HStack, useDisclosure, useColorMode, useColorModeValue } from '@chakra-ui/react';
import LoginPanel from './_components/LoginPanel';
// Chakra UI Dark Mode Configuration
const theme = extendTheme({
  config: {
    initialColorMode: 'dark', // Varsayılan dark mode
    useSystemColorMode: false, // Sistem renk modunu kullanmamak
  },
});

const games = [
  { id: 1, name: 'The Elder Scrolls V: Skyrim', price: '$9.59', image: 'https://upload.wikimedia.org/wikipedia/tr/7/79/The_Elder_Scrolls_V_Skyrim_kapak.png' },
  { id: 2, name: 'Cyberpunk 2077', price: '$59.99', image: 'https://upload.wikimedia.org/wikipedia/tr/2/2b/Cyberpunk_2077_kutu_foto.jpg' },
  { id: 3, name: 'The Witcher 3: Wild Hunt', price: '$29.99', image: 'https://upload.wikimedia.org/wikipedia/tr/5/53/TheWitcher3-WildHunt.KapakResmi.png' }
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [filteredGames, setFilteredGames] = useState(games);
  const bgColor = useColorModeValue('gray.900', 'gray.700');
  const textColor = useColorModeValue('gray.100', 'gray.200');

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredGames(games.filter(game => game.name.toLowerCase().includes(value)));
  };


  return (
    <ChakraProvider theme={theme}>
      <Box bg={bgColor} minH="100vh" color={textColor} p={5}>
        {/* Navbar */}
        <Flex as="nav" bg="gray.800" p="4" justifyContent="space-between" alignItems="center">
          <Heading size="md" color="white">Game Store</Heading>
          <Button onClick={handleLoginClick} colorScheme="teal">
            Login
          </Button>
        </Flex>

        <Flex direction="column" alignItems="center" mt="10">
          <HStack> spacing={0} {/* Wrap input and button in HStack */}
            <Input
              value={search}
              onChange={handleSearch}
              placeholder="Search for a game..."
              size="lg"
              width="50%"
              mb="5"
              bg="gray.600"
              color="white"
            />
            <Button colorScheme="teal" size="lg" mb="5">
              Search
            </Button>
          </HStack>
        </Flex>

        <Flex justifyContent="center" mb="10">
          <HStack spacing={8}>
            {filteredGames.map(game => (
              <Box key={game.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="300px" bg="gray.800">
                <Image src={game.image} alt={game.name} />
                <Box p="6">
                  <Text fontWeight="bold" as="h4" lineHeight="tight" isTruncated color="white">
                    {game.name}
                  </Text>
                  <Text color="gray.300">{game.price}</Text>
                </Box>
              </Box>
            ))}
          </HStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
