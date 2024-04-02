import React, {useEffect} from "react";
import SortSelect from "./SortSelect";
import Pagination from "./Pagination";
import { Container, ThemeProvider } from "@mui/material";
import { useDispatch} from "react-redux";
import { fetchTags } from "../reducers/tagsSlice";
import ErrorModal from "./ErrorModal";
import theme from "../theme";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchTags());
  }, [dispatch]);
  
  return (
    <ThemeProvider theme={theme}>
       <Container maxWidth="sm">
        <ErrorModal />
        <SortSelect />
        <Pagination />
      </Container >
    </ThemeProvider>
     
  );
};

export default App;
