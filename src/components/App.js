import React, {useEffect} from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import SortSelect from "./SortSelect";
import Pagination from "./Pagination";
import { Container } from "@mui/material";
import { useDispatch} from "react-redux";
import { fetchTags } from "../reducers/tagsSlice";
import ErrorModal from "./ErrorModal";

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
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchTags());
  }, [dispatch]);
  
  return (
    <Container maxWidth='md'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorModal/>
        <SortSelect />
        <Pagination />
      </ThemeProvider>
    </Container>
  );
};

export default App;
