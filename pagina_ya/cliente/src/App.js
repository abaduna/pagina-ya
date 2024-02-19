import { AuthProvider } from "./contexts/Auth";
import Home from "./pages/home/Home";
import RoutesPrincial from "./router/PrinipalRouter";
function App() {
  return (
    <div>
      <AuthProvider>
        <RoutesPrincial />
      </AuthProvider>
    </div>
  );
}

export default App;
