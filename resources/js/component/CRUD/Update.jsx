import React from "react";

const AdminUpdate = () => {
  return (
     <div className="flex flex-col items-center justify-center gap-4 p-4 m-auto bg-beige-200 text-beige-950 dark:text-beige-200 dark:bg-neutral-900">
      <h1 className="mb-6 text-2xl font-bold text-center ">
        Panel de Actualización
      </h1>

      <div className="flex flex-col gap-4 w-full m-auto  max-w-[60rem]">
        
      <details className="p-4 bg-white border rounded-lg shadow ">
        <summary className="text-lg font-semibold cursor-pointer text-neutral-800">
          Editar Categoría
        </summary>

        <form className="flex flex-col gap-4 mt-4">

          <div>
            <label className="block text-sm font-medium text-neutral-500">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Ej. Sartenes"
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-neutral-300"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-white transition rounded-lg bg-neutral-800 hover:bg-neutral-950"
          >
            Guardar Categoría
          </button>
        </form>
      </details>

      <details className="p-4 bg-white border rounded-lg shadow ">
        <summary className="text-lg font-semibold cursor-pointer text-neutral-800">
          Editar Producto
        </summary>

        <form className="flex flex-col gap-4 mt-4">

          <div>
            <label className="block text-sm font-medium text-neutral-500">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Ej. Sartén Antiadherente"
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-beige-300"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-neutral-500">
              Descripción
            </label>
            <textarea
              placeholder="Descripción del producto..."
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-beige-300"
              rows="3"
            ></textarea>
          </div>


          <div>
            <label className="block text-sm font-medium text-neutral-500">
              Precio
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="0.00"
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-beige-300"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-neutral-500">
              Categoría
            </label>
            <select className="w-full p-2 mt-1 border rounded-lg">
              <option value="">Selecciona una categoría</option>
              <option value="1">Sartenes</option>
              <option value="2">Cuchillos</option>
              <option value="3">Accesorios</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-500">
              Estado
            </label>
            <select className="w-full p-2 mt-1 border rounded-lg">
              <option value="normal">Normal</option>
              <option value="new">Nuevo</option>
              <option value="offer">Oferta</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-500">
              Imagen
            </label>
            <input
              type="file"
              className="w-full p-2 mt-1 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-white transition rounded-lg bg-neutral-800 hover:bg-neutral-950"
          >
            Guardar Producto
          </button>
        </form>
      </details>

       </div>
    </div>
  );
};

export default AdminUpdate;
