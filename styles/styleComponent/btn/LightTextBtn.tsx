import { Button, styled } from '@mui/material';

const LightTextBtn = styled(Button)({
  color: '#ffffff',
  background: 'transparent',
  fontSize: '16px',
  fontWeight: '500',
  borderRadius: '6px',
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
  paddingLeft: '1.25rem',
  paddingRight: '1.25rem',
  whiteSpace: 'nowrap',
  '&:hover': {
    background: '#ffffff1a',
    color: '#ffffff'
  },
  '&:active': {
    background: '#ffffff1a',
    color: '#ffffff'
  },
});

export default LightTextBtn;