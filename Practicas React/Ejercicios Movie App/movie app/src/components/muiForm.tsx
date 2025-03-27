import { Button, TextField, Box } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
// import { data } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
}
export const MuiForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("datos del formulario:", data);
  };
//   data es el parámetro de la función onSubmit, esta obtiene la info en forma de objeto
//   luego que onSubmit la recibe de handleSubmit

  return (
    
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "300px" }}
      onSubmit={handleSubmit(onSubmit)}
    //   se pasa la función onSubmit como argumento a handleSubmit
    >
      <TextField
        label="Nombre"
        variant="outlined"
        {...register("name", { required: "El nombre es Obligatorio" })}
        error={!!errors.name?.message}
        helperText={errors.name?.message}
      />

      <TextField
        label="Email"
        variant="outlined"
        {...register("email", {
          required: "El Email es Obligatorio",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Formato de correo inválido",
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </Box>
  );
};
