import { Box } from '@mui/material';
import { Header } from './Header/Header';

export const MainWrapper = ({ children }) => {
  return (
    <Box pt={9} minHeight="100vh">
      <Header />
      <main>{children}</main>
    </Box>
  );
};
