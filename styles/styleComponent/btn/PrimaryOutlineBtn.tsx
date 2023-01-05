import { Button, styled } from '@mui/material';

const PrimaryOutlineBtn = styled(Button)({
  background: 'transparent',
  color: '#9C25FF',
  border: '1px solid #9C25FF',
  fontSize: '1rem',
  fontWeight: '500',
  borderRadius: '6px',
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
  paddingLeft: '1.25rem',
  paddingRight: '1.25rem',
  whiteSpace: 'nowrap',
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

export default PrimaryOutlineBtn;