import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Searchpage";
import Magazines from "./pages/Magazines";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path='/' element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="search/:query" element={<Search />} />          
          <Route path="magazines" element={<Magazines/>} />
          <Route path="magazines/:query" element={<Magazines/>} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);