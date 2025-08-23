import React, { useEffect, useState } from "react";
import Product from "../card/Product";
import Modal from "../ui/Modal";
import axios from "axios";

const ProductSection = ({ products }) => {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const ProductClick = (product) => {
        setSelectedProduct(product);
        setIsOpen(true);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    return (
        <div className="relative flex flex-col items-center justify-center w-full gap-4 p-4 bg-beige-200 text-beige-950 dark:text-beige-200 dark:bg-neutral-900">
            <h1 className="font-mono font-bold text-2xl md:text-4xl text-center max-w-[70rem]">
                Productos de COOKTOPIA
            </h1>

            <div className="flex flex-col md:flex-row gap-4 justify-between mx-auto max-w-[70rem]">

                <h3 className="font-mono text-lg font-bold text-center md:text-4xl">
                    Producto
                </h3>

                <div className="">
                    <label className="block p-2 text-lg rounded-t-lg text-stone-950 bg-beige-300">
                        Categoría
                    </label>
                    <select className="w-full p-2 rounded-b-2xl text-beige-200 bg-stone-950">
                        <option value="">Selecciona una categoría</option>
                        <option value="1">Sartenes</option>
                        <option value="2">Cuchillos</option>
                        <option value="3">Accesorios</option>
                    </select>
                </div>
            </div>

            <Product
                products={products}
                onProductClick={ProductClick} />

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                product={selectedProduct}
            />

        </div>
    );
};

export default ProductSection;