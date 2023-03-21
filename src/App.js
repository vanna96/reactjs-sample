import { QueryClient, QueryClientProvider } from "react-query";
import RouteFile from "./Route/Route";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouteFile/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
