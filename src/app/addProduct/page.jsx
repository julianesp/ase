//app\addProduct\page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import listado from "../../../public/images/list_images.png";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import styles from "./Product.module.scss";

// import muestra from "../../../public/images/cirugias/colonoscopia.png";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image) {
      alert("Nombre e imagen son requeridos");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        // const res = await fetch(
        //   `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
        // {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, image, price, category }),
      });

      if (res.ok) {
        router.push("/products");
      } else {
        throw new Error("Failed to create a Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${styles.addProduct}`}>
      <form onSubmit={handleSubmit} className={`${styles.formulario}`}>
        <div className="flex justify-between items-center">
          <h1 className="font-bold py-10 text-2xl">Agregar nuevo accesorio</h1>
        </div>
        {/* <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Name"
        /> */}
        <TextField
          id="outlined-basic"
          label="Nombre de accesorio"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
        />

        {/* <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="/images/1.jpg"
          defaultValue="/images/1.jpg"
        /> */}

        <TextField
          id="outlined-basic"
          label="/images/1.jpg"
          variant="outlined"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          type="text"
        />

        {/* <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className="input input-bordered input-accent w-full max-w-xs"
          type="number"
          placeholder="1"
          defaultValue="1"
        /> */}

        <TextField
          id="outlined-basic"
          label="$1.000"
          variant="outlined"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="text"
        />

        {/* <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Category"
        /> */}

        <TextField
          id="outlined-basic"
          label="Nombre de grupo"
          variant="outlined"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          type="text"
        />

        {/* <button type="submit" className="btn btn-primary w-full max-w-xs">
          Agregar accesorio
        </button> */}
        <Button variant="contained" type="submit">
          Agregar
        </Button>

        <Link href={`/products/`}>
          <Button variant="contained" type="submit">
            Mostrar accesorios
          </Button>
        </Link>
      </form>
      <div className={`${styles.imagenes}`}>
        <div className="flex justify-center items-center gap-3">
          <Image
            alt="Listado de accesorios"
            src={listado}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
