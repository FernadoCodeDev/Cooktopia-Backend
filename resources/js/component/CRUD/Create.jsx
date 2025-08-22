import React from "react";

const AdminCreate = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto">
      <h1 className="mb-6 text-2xl font-bold text-center text-slate-800">
        Panel de Administración
      </h1>


      <details className="p-4 mb-6 bg-white border rounded-lg shadow">
        <summary className="text-lg font-semibold cursor-pointer text-slate-700">
          Crear Nueva Categoría
        </summary>

        <form className="flex flex-col gap-4 mt-4">

          <div>
            <label className="block text-sm font-medium text-slate-600">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Ej. Sartenes"
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-beige-300"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-slate-600">
              Imagen
            </label>
            <input
              type="file"
              className="w-full p-2 mt-1 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-white transition rounded-lg bg-slate-800 hover:bg-slate-900"
          >
            Guardar Categoría
          </button>
        </form>
      </details>

      <details className="p-4 bg-white border rounded-lg shadow">
        <summary className="text-lg font-semibold cursor-pointer text-slate-700">
          Crear Nuevo Producto
        </summary>

        <form className="flex flex-col gap-4 mt-4">

          <div>
            <label className="block text-sm font-medium text-slate-600">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Ej. Sartén Antiadherente"
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-beige-300"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-slate-600">
              Descripción
            </label>
            <textarea
              placeholder="Descripción del producto..."
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-beige-300"
              rows="3"
            ></textarea>
          </div>


          <div>
            <label className="block text-sm font-medium text-slate-600">
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
            <label className="block text-sm font-medium text-slate-600">
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
            <label className="block text-sm font-medium text-slate-600">
              Estado
            </label>
            <select className="w-full p-2 mt-1 border rounded-lg">
              <option value="normal">Normal</option>
              <option value="new">Nuevo</option>
              <option value="offer">Oferta</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600">
              Imagen
            </label>
            <input
              type="file"
              className="w-full p-2 mt-1 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-white transition rounded-lg bg-slate-800 hover:bg-slate-900"
          >
            Guardar Producto
          </button>
        </form>
      </details>
    </div>
  );
};

export default AdminCreate;
