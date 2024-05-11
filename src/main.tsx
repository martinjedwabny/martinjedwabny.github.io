import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import "./globals.css";

function App() {
    return (
        <RouterProvider router={router} />
    );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
