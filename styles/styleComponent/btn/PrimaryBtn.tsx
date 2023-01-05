import { Button, styled } from '@mui/material';

const PrimaryBtn = styled(Button)({
  background: '#9c25ff',
  color: '#ffffff',
  fontSize: '1rem',
  fontWeight: '500',
  lineHeight: '1.5rem',
  borderRadius: '6px',
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
  paddingLeft: '1.25rem',
  paddingRight: '1.25rem',
  whiteSpace: 'nowrap',
  '&:hover': {
    background: '#6400ca',
    color: '#ffffff'
  },
  '&:active': {
    background: '#d35fff',
    color: '#ffffff'
  },
  '&.MuiButton-sizeSmall': {
    fontSize: '0.75rem',
  }
});
export default PrimaryBtn;