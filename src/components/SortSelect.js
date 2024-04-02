import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { sortTagsNameAlfa, sortTagsByCountAsc, sortTagsByCountDesc } from '../reducers/tagsSlice';
import { useState } from 'react';




const SortSelect = () => {
    const [option, setOption] = useState(''); 
    const dispatch = useDispatch();
    
    const handleChange = e => {
        const selectedOption = e.target.value;
        switch(selectedOption) {
          case 'asc':
              dispatch(sortTagsByCountAsc());
              break;
          case 'desc':
              dispatch(sortTagsByCountDesc());
              break;
          case 'alf':
              dispatch(sortTagsNameAlfa());
              break;
          default:
              break;
      }
      setOption(selectedOption);
    }
    return (
        <Box mt={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={option}
              label="Sort"
              onChange={handleChange}
            
            >
              <MenuItem value='asc'>Ascending</MenuItem>
              <MenuItem value='desc'>Descending</MenuItem>
              <MenuItem value='alf'>Alphabetically</MenuItem>
            </Select>
          </FormControl>
        </Box>
      );
};

export default SortSelect;