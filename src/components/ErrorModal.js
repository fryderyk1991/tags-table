import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Button, Box, Typography} from "@mui/material";


const ErrorModal = () => {
    const [isOpen, setIsOpen] = useState(true)
    const error = useSelector((state) => state.tags.error);


    const handleClose = () => {
        setIsOpen(false)
    };

    return (
        <Modal
        sx={{display: "flex", justifyContent: 'center', alignItems: 'center'}}
        open={!!error && isOpen}
        onClose={handleClose}
        aria-labelledby="error-modal-title"
        aria-describedby="error-modal-description"
    >
        <Box sx={{textAlign: 'center', minWidth: 350, padding: 4, borderRadius: '8px', borderColor: 'error', border: '1px solid black'}}>
            <Typography variant="h4">Error</Typography>
            <Typography sx={{mt: 1}} variant="body1">{error}</Typography>
            <Button variant="contained"  sx={{mt: 2, padding: 1, px: 3, border: '1px solid orange', color: '#fff'}} onClick={handleClose}>Close</Button>
        </Box>
    </Modal>
);
};

export default ErrorModal;