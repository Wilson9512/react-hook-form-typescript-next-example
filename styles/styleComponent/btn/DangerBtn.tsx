import { Button, styled } from '@mui/material';

const DangerBtn = styled(Button)({
  background: '#ff5454',
  color:'#ffffff',
  fontSize: '16px',
  fontWeight:'500',
  borderRadius:'6px',
  paddingTop:'0.25rem',
  paddingBottom: '0.25rem',
  paddingLeft: '1.25rem',
  paddingRight: '1.25rem',
  whiteSpace:'nowrap',
  '&:hover': {
    background: '#c5142b',
    color: '#ffffff'
  },
  '&:active': {
    background: '#ff8881',
    color: '#ffffff'
  },
});

export default DangerBtn;