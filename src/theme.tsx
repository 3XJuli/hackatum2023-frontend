import { createTheme, Theme } from '@mui/material/styles';

// Define your custom theme type
interface CustomTheme extends Theme {
  // You can add custom properties here if needed
}

const ProjectTheme: CustomTheme = createTheme({
  palette: {
    primary: {
      main: '#8accdd',
    },
    secondary: {
      main: '#222631',
    },
    background: {
      default: '#f4f4f4', // Light background color
      paper: '#ffffff',   // Paper color
    },
    text: {
      primary: '#333333', // Primary text color
      secondary: '#555555', // Secondary text color
    },
  },
  // You can customize other theme properties like typography, spacing, etc. here.
});

export default ProjectTheme;