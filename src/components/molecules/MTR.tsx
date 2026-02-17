import type { MTRInterface } from "../../interfaces/MTRinterface";

// Los componentes React siempre en PascalCase y con nombres claros.
const MTRArticle = ({ name, price, stock, imagen, categoria }: MTRInterface) => {
  return (
    <article className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto hover:shadow-xl transition-shadow duration-300">
      <div className="w-full h-56 flex items-center justify-center bg-gray-100 rounded-md mb-4">
       <img
         src={imagen}
         alt={`Imagen de ${name}`}
         className="max-h-full object-contain"
         />
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Precio:</span> ${price}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Stock:</span> {stock}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Categoria:</span> {categoria}
      </p>
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
        Comprar
      </button>
    </article>
  );
};

export default MTRArticle;
// la interface no instacia al objeto, solo indica los tipos, cuando se crea el recorrido map
// es donde se les pasa las props para instaciar el objeto 