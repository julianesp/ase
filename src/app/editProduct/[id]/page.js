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
  }
};

export default async function EditProduct({ params }) {
  const { id } = params;
  const { product } = await getProductById(id);
  const { name, image, price, category } = product;

  return (
    <EditProductForm
      id={id}
      name={name}
      image={image}
      price={price}
      category={category}
    />
  );
}
