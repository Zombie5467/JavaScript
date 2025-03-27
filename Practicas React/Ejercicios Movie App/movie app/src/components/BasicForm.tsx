// No es necesario importar React con el runtime automático habilitado

import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
}

export const BasicForm = () => {
  // Hook useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // Especifica el tipo genérico aquí

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("datos enviados:", data); // Maneja los datos del formulario aquí
  };

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Formulario con validaciones React Hook Form</h1>
      {/* input para el nombre */}
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          {...register("name", { required: "el nombre es obligatorio" })}
          placeholder="Ingresa tu Nombre"
        />

        {/* mensaje de error para el nombre */}
        {errors.name?.message && typeof errors.name.message === 'string' && (
          <p>{errors.name.message}</p>
        )}
      </div>

      {/* input para el email */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          {...register("email", {
            required: "El Email es Obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Formato de Email No valido",
            },
          })}
        />
        {/* mensaje de error para el email */}
        {errors.email?.message && typeof errors.email.message === 'string' && (
          <p>{errors.email.message}</p>
        )}
      </div>
      {/* botón para enviar */}
      <button type="submit">Enter</button>
    </form>
  );
};

export default BasicForm;
