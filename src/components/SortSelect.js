import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';


const SortSelect = () => {
    const [option, setOption] = useState(''); 

    const handleChange = e => {
        setOption(e.target.value)
    }

    return (
        <Box sx={{ minWidth: 10 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={option}
              label="Sort"
              onChange={handleChange}
            >
              <MenuItem value='Rosnąco'>Rosnąco</MenuItem>
              <MenuItem value='Malejąco'>Malejąco</MenuItem>
              <MenuItem value='Alfabetycznie'>Alfabetycznie</MenuItem>
            </Select>
          </FormControl>
        </Box>
      );
};

export default SortSelect;