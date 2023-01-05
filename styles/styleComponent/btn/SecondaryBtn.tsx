import { Button, styled } from '@mui/material';

const SecondaryBtn = styled(Button)({
  background: '#9c25ff1a',
  color: '#9c25ff',
  fontSize: '16px',
  fontWeight: '500',
  borderRadius:'4px',
  height: '36px',
  paddingLeft: '1.25rem',
  paddingRight: '1.25rem',
  '&:hover': {
    background: '#6400ca1a',
  },
  '&:active': {
    background: '#d35fff1a'
  },
});
export default SecondaryBtn;