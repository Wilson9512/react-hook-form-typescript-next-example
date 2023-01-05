import { Select, styled } from '@mui/material';
// transparent
const LightSelect = styled(Select)({
  borderRadius: '6px',
  width: '100%',
  background: '#f7f7f7',
  color: '#000000',
  '&:before': {
    borderBottom: '1px solid #f7f7f7',
  },
  '&:hover': {
    background: '#f7f7f7',
  },
  '& .MuiInputBase-input': {
    fontSize: '1rem',
    borderRadius: '6px',
    background: 'transparent',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'pre',
    paddingBottom: '16px',
    paddingTop: '16px',
    '&:focus': {
      background: 'transparent',
    }
  },
});

export default LightSelect;