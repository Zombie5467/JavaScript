import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        {/* Logo de la Movie App */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>

        {/* Menu de navegación */}
        <Box>
            <Button color="inherit">Inicio</Button>
            <Button color="inherit">Favoritos</Button>
            <Button color="inherit">Buscar</Button>
        </Box>

        {/* Botón de log in */}
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
