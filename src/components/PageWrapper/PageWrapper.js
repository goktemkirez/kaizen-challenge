import { Box } from '@mui/material';
import { styled } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

// const StyledBox = styled('div')(({ theme }) => ({
//   minWidth: '414px',
//   width: '414px',
//   height: '100vh',
// }));

const PageWrapper = (props) => {
  const { children } = props;
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Box>
      {children}
    </Box>
  );
};

export default PageWrapper;