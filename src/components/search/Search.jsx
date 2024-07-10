import { IconButton, InputBase, Paper } from '@mui/material'
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <Paper
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 , bgcolor:"#F5F5F5", maxWidth:"243px"}}
    elevation={0}
  >
    <InputBase
      sx={{ ml: 1, flex: 1,fontSize:"14px" }}
      placeholder="What are you looking for?"
      inputProps={{ 'aria-label': 'What are you looking for?' }}
    />
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <FiSearch />
    </IconButton>

  </Paper>

  )
}

export default Search