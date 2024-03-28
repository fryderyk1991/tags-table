import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import TagsTable from "./TagsTable";
import SortSelect from "./SortSelect";

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
          <TagsTable />
    </ThemeProvider>
    </>
  ) 
};

export default App;
