import { Button, styled } from '@mui/material';

const LightOutlineBtn = styled(Button)({
  background: 'transparent',
  color: '#ffffff',
  border: '1px solid #ffffff',
  fontSize: '1rem',
  fontWeight: '500',
  borderRadius:'6px',
  paddingTop:'0.25rem',
  paddingBottom: '0.25rem',
  paddingLeft: '1.25rem',
  paddingRight: '1.25rem',
  whiteSpace:'nowrap',
  '&:hover': {
    background: '#ffffff1a',
  },
  '&:active': {
    background: '#ffffff1a',
  },
  '&.MuiButton-sizeSmall': {
    fontSize: '0.75rem'
  }
});

export default LightOutlineBtn;