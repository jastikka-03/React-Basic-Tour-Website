import { AppBar, Box, Container, createTheme, ThemeProvider } from "@mui/material";
import NavBar from "./components/NavBar";
import Menu from './components/Menu';
import Content from './components/Content';
import RightBar from './components/RightBar';
import Stack from '@mui/material/Stack';
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState('dark')

  const darkTheme = createTheme({
    palette:{
      mode:theme
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={'background.default'} color={'text.primary'}>
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
  </ThemeProvider>
  );
}

export default App;
