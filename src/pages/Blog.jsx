import React from "react";
// import Publicaciones from "../components/Publicaciones";
import RootLayout from "../app/layout";

const Blog = () => {
  const handleSubmit = (formData) => {
    // Lógica para enviar formData al backend
    console.log("Datos del formulario:", formData);
  };

  return <h1>Este es el blog personal</h1>;
};

export default Blog;
