import React from 'react'
import Layout from '../components/Layout'
import Publicaciones from '../components/Publicaciones'

const Blog = () => {

  const handleSubmit = (formData) => {
    // Lógica para enviar formData al backend
    console.log('Datos del formulario:', formData);
};

  return (
    <Layout>
      
      
  <Publicaciones onSubmit={handleSubmit} />

      

    </Layout>
  )
}

export default Blog