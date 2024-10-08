//components\EditProductForm.jsx
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import Image from "next/image";
import styles from "../app/products/Productos.module.scss";

const getProducts = async () => {
  try {
    // const res = await fetch("http://localhost:3000/api/products");
    const res = await fetch("http://localhost:3000/api/products", {
      // permite renderizado de accesorios
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
    return { products: [] }; // Devuelve un arreglo vacío en caso de error
  }
};

// export async function getStaticProps() {
//   const url = "http://localhost:3000/api/products";
//   const res = await fetch(url);
//   const entradas = await res.json();

//   return {
//     props: {
//       entradas,
//     },
//   };
// }

export default async function ProductssList() {
  const { products } = await getProducts();

  return (
    <>
      <div className={`${styles.products}`}>
        <div className="flex justify-between items-center">
          <h1 className="font-bold py-10 text-2xl">Lista de productos</h1>
        </div>

        <div className={`${styles.accesorio}`}>
          <Link className="btn btn-primary" href={"/addProduct"}>
            Agregar accesorio
          </Link>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoria</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {products.map((rs) => (
              <tr className="hover" key={rs._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          src={rs.image}
                          alt={rs.name}
                          width={80}
                          height={80}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{rs.name}</div>
                    </div>
                  </div>
                </td>
                <td>${rs.price}</td>
                <td>{rs.category}</td>
                <th>
                  <Link href={`/editProduct/${rs._id}`}>
                    <button className="btn btn-primary">Editar</button>
                  </Link>
                  <RemoveBtn id={rs._id} />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
