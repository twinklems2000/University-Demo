import "./App.css";
import AddForm from "./pages/add-form/AddForm";
import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  let route = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/form",
      element: <AddForm />,
      children: [],
    },
  ]);

  return route;
}

export default App;
