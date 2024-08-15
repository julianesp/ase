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

// Implementación de `generateStaticParams`
export async function generateStaticParams() {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("No se pudo recuperar la lista de productos");
    }

    const products = await res.json();

    return products.map((product) => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    console.error("Error al generar los parámetros estáticos:", error);
    return [];
  }
}

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
