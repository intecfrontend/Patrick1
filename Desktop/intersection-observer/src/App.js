import React from "react";
import "./App.css";

function useOnScreen(options) {
  const ref = React.useRef();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);
  return [ref, visible];
}
function App() {
  const [ref, visible] = useOnScreen({ threshold: "0.2" });

  return (
    <div className="App">
      <div style={{ height: "100vh" }}>
        <h1>
          <span id="fword">scroll </span>down <span id="sword">to </span>to see
          next
          <div role="img" aria-label="pointing down">
            down
          </div>
        </h1>
      </div>
      <div
        ref={ref}
        style={{ height: "100vh", backgroundColor: visible ? "lime" : "red" }}
      >
        {visible ? (
          <div>
            {" "}
            <h1>Hey I am on the screen</h1>{" "}
          </div>
        ) : (
          <h1>I should become green, first</h1>
        )}
      </div>

      <div
        ref={ref}
        style={{ height: "100vh", backgroundColor: visible ? "blue" : "gold" }}
      >
        {visible ? (
          <div>
            {" "}
            <h1>and then I should become blue, later</h1>{" "}
          </div>
        ) : (
          <h1>Scroll down 300px from the top of this section</h1>
        )}
      </div>

      {/* <div
        id="itemgold"
        ref={ref}
        style={{ height: "100vh", backgroundColor: visible ? "blue" : "gold" }}
      >
        {visible ? (
          <div>
            {" "}
            <h1>Hey I am on the screen</h1>{" "}
          </div>
        ) : (
          <h1>Scroll down 300px from the top of this section</h1>
        )}
      </div> */}
      
    </div>
  );
}

export default App;
