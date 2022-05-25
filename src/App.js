import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./pages/First";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Second from "./pages/Second";
import Third from "./pages/Third";
import ResponsiveNavBar from "./ResponsiveNavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResponsiveNavBar />}>
            <Route index element={<Home />} />
            <Route path="first" element={<First />} />
            <Route path="second" element={<Second />} />
            <Route path="third" element={<Third />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
