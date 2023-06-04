import { createRoot } from 'react-dom/client' // Importar la función createRoot del paquete react-dom/client para renderizar la aplicación en el DOM.
import { StrictMode } from 'react' // Importar el componente StrictMode de React para mostrar advertencias adicionales y realizar comprobaciones adicionales en tiempo de desarrollo.
import { ThemeProvider } from '@emotion/react' // Importar el componente ThemeProvider de @emotion/react para proporcionar un tema a la aplicación.
import { CssBaseline } from '@mui/material' // Importar el componente CssBaseline de Material-UI para establecer estilos básicos de CSS.

import '@fontsource/roboto/300.css' // Importar el estilo de la fuente Roboto con peso 300.
import '@fontsource/roboto/400.css' // Importar el estilo de la fuente Roboto con peso 400.
import '@fontsource/roboto/500.css' // Importar el estilo de la fuente Roboto con peso 500.
import '@fontsource/roboto/700.css' // Importar el estilo de la fuente Roboto con peso 700.

import App from './App.jsx' // Importar el componente principal de la aplicación desde el archivo App.jsx.
import theme from './theme/theme.js' // Importar el tema personalizado de la aplicación desde el archivo theme.js.

// Utilizar la función createRoot para renderizar la aplicación en el elemento con id 'root'.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Usar StrictMode para realizar comprobaciones adicionales en tiempo de desarrollo. */}
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Establecer estilos básicos de CSS con CssBaseline de Material-UI. */}
      <App /> {/* Renderizar el componente principal de la aplicación. */}
    </ThemeProvider>
  </StrictMode>,
)
