import { BrowserRouter } from "react-router-dom";
import { ListRoutes } from "./routes/index.routes";

function App() {
  return (
    <BrowserRouter>
      <ListRoutes />
    </BrowserRouter>
  );
}

export { App };
