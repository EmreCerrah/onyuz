import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function Searchbar() {
  return (
      <Autocomplete
        sx={{ width: 300 }}
        freeSolo
        id="game-search"
        disableClearable
        options={Games.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            slotProps={{
              input: {
                ...params.InputProps,
                type: 'search',
              },
            }}
          />
        )}
      />
  );
}
const Games = [
  { id: 1, name: 'The Elder Scrolls V: Skyrim', price: '$9.59', image: 'https://upload.wikimedia.org/wikipedia/tr/7/79/The_Elder_Scrolls_V_Skyrim_kapak.png' },
  { id: 2, name: 'Cyberpunk 2077', price: '$59.99', image: 'https://upload.wikimedia.org/wikipedia/tr/2/2b/Cyberpunk_2077_kutu_foto.jpg' },
  { id: 3, name: 'The Witcher 3: Wild Hunt', price: '$29.99', image: 'https://upload.wikimedia.org/wikipedia/tr/5/53/TheWitcher3-WildHunt.KapakResmi.png' }
];