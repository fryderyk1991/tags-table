import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";


import TagsTable from "./TagsTable";

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
          <TagsTable />
    </ThemeProvider>
    </>
  ) 
};

export default App;
