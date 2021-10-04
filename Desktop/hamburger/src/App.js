import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import "./Nav.css";

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <MobileNavigation/>
        <Navigation/>
      </div>
    </div>
  );
}

export default App;
