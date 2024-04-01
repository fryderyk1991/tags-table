import React from "react";
import { Box, CircularProgress } from "@mui/material";

const LoadingCircle = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: '200px', position: 'relative'}}>
          <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
        </Box>
      );
}

export default LoadingCircle;