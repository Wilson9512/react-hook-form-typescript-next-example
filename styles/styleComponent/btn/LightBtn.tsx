import { Button, styled } from '@mui/material';

const LightBtn = styled(Button)({
  background: '#ffffff',
  color: '#000000',
  fontSize: '16px',
  fontWeight: '500',
  borderRadius: '6px',
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
  paddingLeft: '1.25rem',
  paddingRight: '1.25rem',
  whiteSpace: 'nowrap',
  '&:hover': {
    background: '#cccccc80',
    color: '#000000'
  },
  '&:active': {
    background: '#ffffff',
    color: '#000000'
  },
  '&.MuiButton-sizeSmall': {
    fontSize: '0.75rem',
  }
});

export default LightBtn;