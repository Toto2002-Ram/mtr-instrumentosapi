const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-8">
                {/* Sección Nombre de la Página */}
                <div>
                    <h3 className="text-xl font-bold mb-4">© 2026 MTR</h3>
                    <p className="text-gray-400">&copy; Todos los derechos reservados</p>
                </div>

                {/* Sección Contactos */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Contactos</h3>
                    <p className="text-gray-400 mb-2">Email: music@mtr.com</p>
                    <p className="text-gray-400">Teléfono: +54 9 11 5679 4410</p>
                </div>

                {/* Sección Síguenos */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Síguenos</h3>
                    <ul className="text-gray-400 space-y-2">
                        <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                        <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                        <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;