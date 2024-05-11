import '@mantine/core/styles.css';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
    return (
        <MantineProvider theme={theme} defaultColorScheme='dark'>
            <RouterProvider router={router} />
        </MantineProvider>
    );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
