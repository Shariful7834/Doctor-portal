import logo from "./logo.svg";
import "./App.css";
import { router } from "./Routes/Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
