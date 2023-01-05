import { Button, styled } from '@mui/material';

const ShadowBtn = styled(Button)({
  background: '#ffffff',
  boxShadow: '0px 0px 10px #0000001a',
  color: '#5d5d5d',
  fontSize: '1rem',
  fontWeight: '500',
  lineHeight: '1.75rem',
  borderRadius:'6px',
  paddingTop:'0.25rem',
  paddingBottom: '0.25rem',
  paddingLeft: '1.25rem',
  paddingRight: '1.25rem',
  whiteSpace:'nowrap',
  '&:hover': {
    background: '#fafafa',
    color: '#5d5d5d',
    boxShadow: '0px 0px 4px #00000080',
  },
  '&:active': {
    background: '#fafafa',
    color: '#5d5d5d',
  },
  '&.MuiButton-sizeSmall': {
    fontSize: '0.75rem'
  }
});

export default ShadowBtn;