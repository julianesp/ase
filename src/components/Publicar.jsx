import React, { useContext, useState } from "react";
import { PublicacionesContext } from "../context/PublicacionesContext";

const AgregarPublicacion = () => {
  const { agregarPublicacion } = useContext(PublicacionesContext);
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarPublicacion({ titulo, contenido });
    setTitulo("");
    setContenido("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea
        placeholder="Contenido"
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
      ></textarea>
      <button type="submit">Agregar Publicación</button>
    </form>
  );
};

export default AgregarPublicacion;
