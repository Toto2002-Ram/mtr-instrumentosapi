import MTRArticle from "../molecules/MTRArticle";
//import mtrparts from "../../data/MTR";
import useFetch from "../../hooks/useFetch";


const MainProductos = () => {
  const { data, error, loading } = useFetch("/?format=json") //
  if (data) console.log("Datos obtenidos:", data);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error de petición</p>;

  const mtrparts = Array.isArray(data) ? data : [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {mtrparts.map((mtrpart) => (
        <div key={mtrpart.id} className="h-full">
          <MTRArticle {...mtrpart} />
        </div>
      ))}
    </div>
  );
}

/*
const MainProductos = () => {
  const { data, error, loading } = useFetch("/?format=json") //
      if (data) console.log("Datos recibidos:", data) // para depurar 
      if (loading) return <p>Cargando...</p>
      if (error) return <p>Error de petición</p>

  const autoparts = Array.isArray(data) ? data : []

   return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {autoparts.map((autopart) => (
        <div key={autopart.id} className="h-full">
          <AutopartArticle {...autopart} />
        </div>
      ))}
    </div>
  )
}
*/

export default MainProductos;
/*
Key:
- Le dice a React cuál elemento es cuál dentro de la lista.
- Evita re-renderizados innecesarios.
- Evita errores cuando React actualiza, agrega o elimina elementos.git 
- Mejora el rendimiento.
autopart.name:

-usa name como elemento de indice pero, seria mejor usar el id

{...autopart}

el Spread operator sirve para pasar todas las props
de forma basica Tomá todas las propiedades del objeto autopart y las pasa
como props al componente
*/
