import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const GameCard = ({ game }) => {
  return (
    <Box key={game.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="300px" bg="gray.800">
      <Image src={game.image} alt={game.name} />
      <Box p="6">
        <Text fontWeight="bold" as="h4" lineHeight="tight" isTruncated color="white">
          {game.name}
        </Text>
        <Text color="gray.300">{game.price}</Text>
      </Box>
    </Box>
  );
};

export default GameCard;
