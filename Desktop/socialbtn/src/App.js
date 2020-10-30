import fb from "./Components/SOCIALLOGOS/facebook-square.svg";
import ml from "./Components/SOCIALLOGOS/mail-square.svg";
import ph from "./Components/SOCIALLOGOS/phone-square.svg";
import yt from "./Components/SOCIALLOGOS/youtube-square.svg";
import lc from "./Components/SOCIALLOGOS/loc-square.svg";
import "./App.css";

// const openHandler = () => {
//   if (!sidebarOpen) {
//     setSidebarOpen(true);
//   } else {
//     setSidebarOpen(false);
//   }
// };

function App() {
  return (
    <div className="App">
      <div className="socbtn__btncont">
        <div id="fb" className="socbtn__btnwrapper">
          <div className="socbtn__btn">
            <img className="socbtn__img" src={fb} alt="fb" />
          </div>
        </div>

        <div>
          <div id="uit1" className="socbtn__btnuit">
            <a className="socbtn__linka" href="www.google.com">
              <h4 className="socbtn__linkh4">click-me! </h4>
            </a>
          </div>
        </div>

        <div id="yt" className="socbtn__btnwrapper">
          <div className="socbtn__btn">
            <img className="socbtn__img" src={yt} alt="yt" />
          </div>
        </div>

        <div>
          <div id="uit2" className="socbtn__btnuit">
            <a className="socbtn__linka" href="www.google.com">
              <h4 className="socbtn__linkh4">click-me! </h4>
            </a>
          </div>
        </div>

        <div id="ph" className="socbtn__btnwrapper">
          <div className="socbtn__btn">
            <img className="socbtn__img" src={ph} alt="ph" />
          </div>
        </div>

        <div>
          <div id="uit3" className="socbtn__btnuit">
            <a className="socbtn__linka" href="www.google.com">
              <h4 className="socbtn__linkh4">+32 (0)499 388 227 </h4>
            </a>
          </div>
        </div>

        <div id="ml" className="socbtn__btnwrapper">
          <div className="socbtn__btn">
            <img className="socbtn__img" src={ml} alt="ml" />
          </div>
        </div>

        <div>
          <div id="uit4" className="socbtn__btnuit ">
            <a className="socbtn__linka" href="www.google.com">
              <h4 className="socbtn__linkh4">b.lantsoght@gmail.com </h4>
            </a>
          </div>
        </div>

        <div id="lc" className="socbtn__btnwrapper">
          <div className="socbtn__btn">
            <img className="socbtn__img" src={lc} alt="lc" />
          </div>
        </div>

          <div id="uit5" className="socbtn__btnuit, socbtn__btnuitclose ">
            <a className="socbtn__linka" href="www.google.com">              
              <h4 className="socbtn__linkh4">map </h4>

            </a>
          </div>
      </div>
    </div>
  );
  // socbtn__btnuit;
}

export default App;
