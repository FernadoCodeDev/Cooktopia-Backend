import React from "react";
import UtensilSet from "../../assets/img/UtensilSet.webp";
import HalfMoonKnife from "../../assets/img/HalfMoonKnife.webp";
import KnifeSet from "../../assets/img/KnifeSet.webp";
import spatula from "../../assets/img/spatula.webp";
import ShoppingCart from "../../assets/svg/ShoppingCart";
import Close from "../../assets/svg/Close";

export const Articles = [
  {
    id: 1,
    Product: "Top Vendido",
    name: "Juego de utensilios",
    price: "19.99",
    image: UtensilSet,
    Description:
      "Set de utensilios de madera. Incluye dos espátulas, un cucharón, una cuchara tradicional, una cuchara colador ideal para servir pastas, y un práctico organizador para mantener todo en orden.",
  },
  {
    id: 2,
    Product: "Nuevo",
    name: "Cuchillo Media Luna",
    price: "29.99",
    image: HalfMoonKnife,
    Description:
      "Cuchillo media luna está diseñado para picar finamente hierbas, ajo, cebolla y más con facilidad y precisión. Su hoja curva de acero inoxidable permite un movimiento de balanceo suave.",
  },

  {
    id: 3,
    Product: "Top Vendido",
    name: "Set de Cuchillos",
    price: "24.99",
    image: KnifeSet,
    Description:
      "Siete cuchillos esenciales: cuchillo pelador, puntilla, cuchillo para salmón, espátula, cuchillo de chef, trinchar y panadero. Fabricados en acero inoxidable de alta calidad.",
  },

  {
    id: 4,
    Product: "Nuevo",
    name: "Espatula",
    price: "9.99",
    image: spatula,
    Description:
      "Ideal para dar vuelta, servir y manipular tus preparaciones con firmeza y precisión. Esta espátula de acero inoxidable combina durabilidad con un diseño elegante y práctico.",
  },
];

export default function Modal({ isOpen, onClose, Articles }) {
  if (!isOpen || !Articles) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 text-center text-black bg-black bg-opacity-60">
      <div className="relative w-full max-w-[60rem] p-2 bg-stone-800 rounded-xl">
        <button
          onClick={onClose}
          className="absolute z-40 w-20 h-auto cursor-pointer top-2 right-2 "
        >
          <Close />
        </button>

        <div className="absolute top-0 left-0 w-full h-[50%] md:w-[50%] md:h-full bg-stone-800"></div>

        <div className="relative z-10 grid items-center justify-center w-full grid-cols-1 gap-2 md:grid-cols-2">
          <div className="grid items-center justify-center grid-cols-1 gap-4">
            <h2 className="absolute mb-2 text-lg font-bold text-stone-200 md:text-stone-800 md:text-xl top-2 left-2 ">
              {Articles.Product}
            </h2>
            <img
              src={Articles.image}
              alt={Articles.name}
              className="h-auto m-auto w-60"
            />
          </div>

          <div className="grid items-center justify-center grid-cols-1 gap-4 md:mt-24 text-stone-800 md:text-stone-200 ">
            <div className="flex flex-row justify-center gap-4 ">
              <h1 className="mb-2 text-xl font-bold md:text-2xl ">
                {Articles.name}
              </h1>
              <p className="text-lg">${Articles.price}</p>
            </div>
            <p className="text-lg">{Articles.Description}</p>

            <botton className="flex flex-row justify-center gap-2 p-2 font-bold text-center text-black transition duration-700 ease-out cursor-pointer hover:text-white rounded-xl bg-stone-300 hover:bg-stone-500">
              <ShoppingCart width="32" height="32" /> Comprar
            </botton>
          </div>

          <div className="flex flex-col">

            <h1 className="">¿Algo mal? </h1>

            <div className="flex flex-row gap-1">

              <botton className="p-2 font-bold text-center text-black transition duration-700 ease-out cursor-pointer hover:text-white rounded-xl bg-stone-300 hover:bg-stone-500">
                Editar + Producto
              </botton>
              <botton className="p-2 font-bold text-center text-black transition duration-700 ease-out cursor-pointer hover:text-white rounded-xl bg-stone-300 hover:bg-stone-500">
                Eliminar + Producto
              </botton>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[50%] md:w-[50%] md:h-full bg-stone-200"></div>
      </div>
    </div>
  );
}