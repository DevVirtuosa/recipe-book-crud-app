// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2", // You can customize the primary color
    },
    secondary: {
      main: "#FF4081", // You can customize the secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // You can customize the font family
  },
});

export default theme;
