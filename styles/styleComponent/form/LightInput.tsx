import { styled, TextField } from '@mui/material';

const LightInput = styled(TextField)({
  fontSize: '1rem',
  '& .MuiInputBase-root': {
    border: '1px solid #f7f7f7',
    overflow: 'hidden',
    borderRadius: 6,
    backgroundColor: '#f7f7f7',
  },
  '& .MuiInputBase-root:hover': {
    backgroundColor: '#f7f7f7',
  },
  '& .MuiInputBase-root:before': {
    borderBottom: '1px solid #f7f7f7',
    '&:hover': {
      borderBottom: '1px solid #9c25ff4d',
    }
  },
  '& .MuiInputBase-root:hover:before': {
    borderBottom: '1px solid #9c25ff4d',
  },
  '& .MuiFormHelperText-root': {
    color: '#aeaeae'
  },
});

export default LightInput;