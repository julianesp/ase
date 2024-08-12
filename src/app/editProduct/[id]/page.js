// import RootLayout from "@/app/layout";
// import EditProductForm from "@/components/EditProductForm";

// // La función que obtendrá todos los productos
// const getAllProducts = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/products", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("No se pudo recuperar los productos");
//     }

//     const data = await res.json();

//     if (!Array.isArray(data)) {
//       throw new Error("La respuesta de productos no es un array");
//     }

//     return data;
//   } catch (error) {
//     console.error("Error al obtener los productos:", error);
//     return []; // Devuelve un array vacío en caso de error
//   }
// };

// // La función que obtendrá un producto por su ID
// const getProductById = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/products/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("No se pudo recuperar el producto");
//     }

//     return res.json();
//   } catch (error) {
//     console.error("Error al obtener el producto:", error);
//     return null;
//   }
// };

// // Nueva implementación de getServerSideProps
// export const getServerSideProps = async (context) => {
//   const { id } = context.params;

//   try {
//     const product = await getProductById(id);

//     if (!product) {
//       return {
//         notFound: true, // Devuelve una página 404 si el producto no se encuentra
//       };
//     }

//     return {
//       props: {
//         product,
//       },
//     };
//   } catch (error) {
//     console.error("Error en getServerSideProps:", error);
//     return {
//       notFound: true,
//     };
//   }
// };

// export default function EditProduct({ product }) {
//   if (!product) {
//     return <div>El accesorio no se ha encontrado</div>;
//   }

//   const { name, image, price, category } = product;

//   return (
//     <RootLayout>
//       <EditProductForm
//         id={product._id}
//         name={name}
//         image={image}
//         price={price}
//         category={category}
//       />
//     </RootLayout>
//   );
// }

import RootLayout from "@/app/layout";
import EditProductForm from "@/components/EditProductForm";

// La función que obtendrá un producto por su ID
const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("No se pudo recuperar el producto");
    }

    return res.json();
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    return null;
  }
};

// Esta es la página dinámica de edición de productos
export default async function EditProduct({ params }) {
  const { id } = params;

  // Obtén el producto por ID
  const product = await getProductById(id);

  if (!product) {
    return <div>El producto no se ha encontrado</div>;
  }

  const { name, image, price, category } = product;

  return (
    <RootLayout>
      <EditProductForm
        id={product._id}
        name={name}
        image={image}
        price={price}
        category={category}
      />
    </RootLayout>
  );
}
