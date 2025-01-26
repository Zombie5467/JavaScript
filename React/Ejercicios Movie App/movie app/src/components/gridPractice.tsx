import { Box, Typography, Grid2 } from "@mui/material";

export const GridExample = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid2 container spacing={2}>
        {/* columna izquierda */}
        <Grid2 columnSpacing={{ xs: 12, md: 8 }}>
          <Box sx={{ backgroundColor: "#f0f0f0", padding: 2 }}>
            <Typography variant="h6" color="blue">
              Artículos
            </Typography>
            <Typography variant="body1" color="blue">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              consequuntur, aliquam quisquam, maiores quia accusantium molestiae
              necessitatibus dolorem consequatur perferendis doloremque quae,
              culpa nostrum voluptates enim nam beatae velit. Inventore.
            </Typography>
          </Box>
        </Grid2>

        {/* columna derecha */}
        <Grid2 columnSpacing={{ xs: 12, md: 8 }}>
          <Box sx={{ backgroundColor: "#e0e0e0", padding: 2 }}>
            <Typography variant="h6" color="blue">
              Artículos
            </Typography>
            <Typography variant="body1" color="blue">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              consequuntur, aliquam quisquam, maiores quia accusantium molestiae
              necessitatibus dolorem consequatur perferendis doloremque quae,
              culpa nostrum voluptates enim nam beatae velit. Inventore.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};
