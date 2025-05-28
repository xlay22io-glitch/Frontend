import type { ReactNode } from 'react';
import { Box } from '@mui/material';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box
        component='main'
        sx={{
          minHeight: 'calc(100vh - 90px)',
          paddingTop: '80px',
          color: 'white',
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
