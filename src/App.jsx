import { Suspense, lazy } from 'react' // Importar los componentes Suspense y lazy de React para el enrutamiento con carga diferida.
import { Route } from 'wouter' // Importar el componente Route de la biblioteca wouter para definir rutas en la aplicación.

const Home = lazy(() => import('./views/Home.jsx')) // Importar el componente Home de forma diferida utilizando lazy y import().
const FormPage = lazy(() => import('./views/FormPage.jsx')) // Importar el componente FormPage de forma diferida utilizando lazy y import().

function App() {
  return (
    <Suspense fallback="loading...">
      {/* Suspense muestra un fallback mientras los componentes se cargan de forma diferida. */}
      <Route component={Home} path="/" />{' '}
      {/* Definir una ruta para el componente Home en la ruta "/" */}
      <Route component={FormPage} path="/form" />{' '}
      {/* Definir una ruta para el componente FormPage en la ruta "/form" */}
    </Suspense>
  )
}

export default App // Exportar el componente App como componente principal de la aplicación.
