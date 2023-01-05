import { Box, Container } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({ children }: {
  children: JSX.Element | JSX.Element[]
}) => {
  const formContainer = {
    background: '#ffffff',
    boxShadow: '0 0 5px 5px #ffffff',
    py: 2,
    borderRadius: '6px'
  };

  return (<Box color='info.main' width={2560} height={1440}>
    <Container className='dashboard-font' maxWidth='md' sx={formContainer}>
      <Box textAlign='center' py={2}>
        <Link href={'/'}>
          <Image width={72} height={80} src='vercel.svg'
            style={{ cursor: 'pointer' }} alt={''} />
        </Link>
      </Box>
      {children}
    </Container>
  </Box>);
};

export default Layout;