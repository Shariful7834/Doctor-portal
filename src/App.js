import logo from "./logo.svg";
import "./App.css";
import { router } from "./Routes/Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
