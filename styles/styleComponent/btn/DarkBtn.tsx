import { Button, styled } from '@mui/material';

const DarkBtn = styled(Button)({
  background: '#333333',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '1.5rem',
  borderRadius: '6px',
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
  paddingLeft: '1.25rem',
  paddingRight: '1.25rem',
  whiteSpace: 'nowrap',
  '&:hover': {
    background: '#3d3d3d',
    color: '#ffffff',
  },
  '&:active': {
    background: '#3d3d3d',
    color: '#ffffff',
  },
  '&.MuiButton-sizeSmall': {
    fontSize: '0.75rem',
    minHeight: '36px'
  }
});

export default DarkBtn;