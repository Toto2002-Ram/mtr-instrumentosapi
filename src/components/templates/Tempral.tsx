import Header from "../organisms/Header/Header";  
import Footer from "../organisms/Footer/Footer";
import { Outlet } from "react-router-dom";

const Tempral = () => (
    <div className="ffifd">
        <Header />
        <Outlet />
        <Footer />
    </div>
)

export default Tempral; 