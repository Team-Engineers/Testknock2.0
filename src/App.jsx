import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const withLayout = (Component) => (
    <>
      <Component />
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={withLayout(Home)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;