import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Searchpage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/' element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="search/:query" element={<Search />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);