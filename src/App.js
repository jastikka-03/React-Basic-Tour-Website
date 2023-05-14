import { AppBar, Box, Container } from "@mui/material";
import NavBar from "./components/NavBar";
import Menu from './components/Menu';
import Content from './components/Content';
import RightBar from './components/RightBar';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <Box>
    <NavBar/>
    <Container maxWidth='xl'>
  <Stack direction="row" spacing={2} justifyContent='space-between'
  >
  <Menu/>
  <Content/>
  <RightBar/>
  </Stack>
  </Container>
  </Box>
  );
}

export default App;
