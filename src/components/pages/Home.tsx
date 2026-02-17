import MainProductos from "../organisms/MainProductos";

const Home = () => (
    <div className="min-h-screen bg-gray-100 p-8">
       <h2 className="text-4xl font-bold text-gray-800 mb-4">Bienvenido a MTR</h2>
       <h3 className="text-2xl font-semibold text-blue-600 mb-8">Aprovecha los siguientes instrumentos que tenemos en oferta</h3>
       <MainProductos/> 
    </div>
)

export default Home;