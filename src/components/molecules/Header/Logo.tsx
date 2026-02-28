import { Link } from "react-router-dom";
import mtrlogo from "../../../../assets/logo-mtr.png";


const Logo = () => (
  <Link  to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
    <div className="w-10 h-10  from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
      <img src={mtrlogo} alt="MTR Logo" className="w-6 h-6" />
    </div>
    <span className="text-xl font-bold text-gray-800">MTR</span>
  </Link>
);

export default Logo;
