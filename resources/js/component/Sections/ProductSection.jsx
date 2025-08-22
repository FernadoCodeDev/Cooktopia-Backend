import React from "react";
import Product from "../card/Product";

const ProductSection = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full gap-4 p-4 bg-stone-300 text-stone-700 dark:text-slate-200 bg-bg-stone-300 dark:bg-neutral-800">
            <h1 className="font-mono font-bold text-2xl md:text-4xl text-center max-w-[70rem]">
                Productos de COOKTOPIA
            </h1>

            <div className="flex flex-col md:flex-row gap-4 justify-between mx-auto max-w-[70rem]">


                <h3 className="font-mono text-lg font-bold text-center md:text-4xl">
                    Producto
                </h3>

                <div className="">
                    <label className="block p-2 text-lg rounded-t-lg text-beige-950 bg-beige-100">
                        Categoría
                    </label>
                    <select className="w-full p-2 rounded-b-2xl text-beige-100 bg-beige-950">
                        <option value="">Selecciona una categoría</option>
                        <option value="1">Sartenes</option>
                        <option value="2">Cuchillos</option>
                        <option value="3">Accesorios</option>
                    </select>
                </div>
            </div>

            <Product />
        </div>
    );
};

export default ProductSection;