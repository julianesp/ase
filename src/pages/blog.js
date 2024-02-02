import React, { useState } from 'react'
import Layout from '@/components/Layout.js'
import Publications from '@/components/Publications.js'

const Blog = () => {

  return (
    <Layout>
      <h1 className='justify-center text-center text-3xl text-white'>Blog</h1>
      <h1 className='justify-center text-center text-3xl text-white'>articulos</h1>

      <h1 className='justify-center text-center text-3xl text-white'>procedimientos</h1>

      <li className='w-60 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'>

        <button>
          Add Blog
        </button>
      </li>

      <Publications />
      <Publications />
      <Publications />

    </Layout>
  )
}

export default Blog