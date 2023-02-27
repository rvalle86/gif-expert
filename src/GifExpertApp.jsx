// import React from 'react'
// No se ocupa importar React desde la v17
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Overwatch 2"]);

  const onAddCategory = (newCategory) => {
    // categories.push(newCategory)

    if (categories.includes(newCategory)) return;
    // Spread copia del objeto
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, 'Fortnite'])
  };

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      {/* <AddCategory setCategories={setCategories} /> */}
      <AddCategory
        onNewCategory={onAddCategory} //onNewCategory es una propiedad o props
        // va a emitir el evento al padre
      />

      {/* Listado de Gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {/* Map permite recorre cada uno de los elementos del arreglo y regresar algo nuevo */}
      {/* {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })} */}

      {categories.map((category) => (
        //   <div key={category}>
        //     <h3>{category}</h3>
        //     <li>{category}</li>
        //   </div>
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif Item */}
    </>
  );
};
