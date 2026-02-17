// renderiza sobre el caracter raíz del html
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
    <RouterProvider router={router} />
  </div>    
    
)