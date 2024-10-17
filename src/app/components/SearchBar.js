import React, { useState, useEffect } from 'react';
import { Flex, Input, HStack, Stack, Box, Text, Button } from '@chakra-ui/react';
import { games } from '../data/games'; // Oyunları bir başka dosyadan alalım (opsiyonel)

// SearchBar bileşeni
const SearchBar = ({ search, setSearch, filteredGames, setFilteredGames }) => {
  const [showAll, setShowAll] = useState(false); // Oyunların tümünü göster

  useEffect(() => {
    if (search === '') {
      setFilteredGames(games); // Boşsa tüm oyunları göster
    } else {
      setFilteredGames(games.filter(game => game.name.toLowerCase().includes(search.toLowerCase())));
    }
  }, [search, setFilteredGames]);

  const handleFocus = () => {
    setShowAll(true); // Focus olduğunda tüm oyunları göster
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowAll(false); // Focus kaybolduğunda listeyi gizle (timeout ile hemen kapanmasını önleyelim)
    }, 200);
  };

  return (
    <Flex direction="column" alignItems="center" mt="10">
      <HStack spacing={0}>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
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

      {/* Arama yapıldığında önerilen oyunlar listesi */}
      {showAll && (
        <Stack spacing={3} width="50%" mt="4" bg="gray.700" p="4" borderRadius="md" boxShadow="md">
          {filteredGames.map((game) => (
            <Box key={game.id} p="2" bg="gray.800" borderRadius="md">
              <Text color="white">{game.name}</Text>
            </Box>
          ))}
        </Stack>
      )}
    </Flex>
  );
};

export default SearchBar;
