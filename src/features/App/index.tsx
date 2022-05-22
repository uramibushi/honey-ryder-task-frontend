import React from 'react';
import { CreateTaskForm } from 'features/Tasks/components/CreateTaskForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colors, CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: colors.yellow[600],
    },
    mode: 'dark',
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <CreateTaskForm />
  </ThemeProvider>
);

export default App;
