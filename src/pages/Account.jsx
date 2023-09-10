import { Box, Container } from '@mui/material';
import { AccountContent } from '@features/account/components/AccountContent';

const Account = () => {
  return (
    <Container maxWidth="lg">
      <Box py={5}>
        <AccountContent />
      </Box>
    </Container>
  );
};

export default Account;
