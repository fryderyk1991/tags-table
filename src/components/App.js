import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import SortSelect from "./SortSelect";
import Pagination from "./Pagination";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SortSelect />
        <Pagination />
     
      </ThemeProvider>
    </>
  );
};

export default App;
