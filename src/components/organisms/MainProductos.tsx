import MTRArticle from "../molecules/MTR";
import mtrparts from "../../data/MTR";


const MainProductos = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {mtrparts.map((mtrparts) => (
      <div className="h-full">
        <MTRArticle 
          key={mtrparts.name}
          {...mtrparts}
        />
      </div>
    ))}
  </div>
)

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
