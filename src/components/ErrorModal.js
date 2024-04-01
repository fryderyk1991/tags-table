import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Button, Box } from "@mui/material";

const ErrorModal = () => {
    const [isOpen, setIsOpen] = useState(true)
    const error = useSelector((state) => state.tags.error);


    const handleClose = () => {
        setIsOpen(false)
    };

    return (
        <Modal
        open={!!error && isOpen}
        onClose={handleClose}
        aria-labelledby="error-modal-title"
        aria-describedby="error-modal-description"
    >
        <Box>
            <h2>Error</h2>
            <p>{error}</p>
            <Button onClick={handleClose}>Close</Button>
        </Box>
    </Modal>
);
};

export default ErrorModal;