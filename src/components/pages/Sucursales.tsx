const Sucursales = () => (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-900 mb-2 text-center">
                Nuestras Sucursales
            </h1>
            <p className="text-gray-600 text-center mb-12">
                Visítanos en cualquiera de nuestras ubicaciones
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { name: "Sucursal Bernal", address: "Chacabuco 200", phone: "(555) 100-3451" },
                    { name: "Sucursal Quilmes", address: "Avenida Hipolito Yrigoyen 522", phone: "(555) 234-5678" },
                    { name: "Sucursal Avellaneda", address: "General Lavalle 520", phone: "(555) 555-8904" },
                    { name: "Sucursal Ezpeleta", address: "Lavalle 321", phone: "(555) 123-1016" },
                    { name: "Sucursal Berazategui", address: "Calle 144", phone: "(555) 580-4579" },
                    { name: "Sucursal Capital Federal", address: "Avenida Rivadavia 654", phone: "(555) 120-4459" },
                ].map((sucursal, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-md border-l-4 border-blue-600 p-6 hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-semibold text-blue-900 mb-3">
                            {sucursal.name}
                        </h2>
                        <p className="text-gray-700 mb-2">
                            📍 {sucursal.address}
                        </p>
                        <p className="text-gray-600">
                            📞 {sucursal.phone}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

export default Sucursales;