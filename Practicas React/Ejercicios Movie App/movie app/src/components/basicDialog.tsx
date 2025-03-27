import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useState } from "react";

export const BasicExample = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h1>Modal MUI</h1>
      <Button variant="outlined" onClick={handleOpen}>
        Abrir Modal
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modal de Ejemplo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Moda de ejemplo implementando MUI, puedes cerrarlo haciendo click al
            botón
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
