import { Button, styled } from '@mui/material';

const DarkOutlineBtn = styled(Button)({
  background: 'transparent',
  color: '#363636',
  border: '1px solid #8e8e8e',
  fontSize: '1rem',
  fontWeight: '500',
  lineHeight: '1.5rem',
  borderRadius:'6px',
  paddingTop:'0.25rem',
  paddingBottom: '0.25rem',
  paddingLeft: '1.25rem',
  paddingRight: '1.25rem',
  whiteSpace:'nowrap',
  '&:hover': {
    background: '#8e8e8e1a',
  },
  '&:active': {
    background: '#8e8e8e1a',
  },
  '&.MuiButton-sizeSmall': {
    fontSize: '0.75rem'
  }
});

export default DarkOutlineBtn;