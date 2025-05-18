import Header from "./components/Header";
import Student from "./components/StudenetList";
import "./App.css"

function App() {
  const name = "yuki";

  let count = 0;
  function addCount() {
    count++;
    console.log(count);
  }

  return (
    <div className="container">
      <h1>Hello world: {name}</h1>
      <button onClick={() => alert("Hello React")}>click</button>

      {/* button */}
      <h1>{count}</h1>
      <button onClick={addCount}>add+1</button>

      {/* merge state & components */}
      <h1>Merge State & Component</h1>
      <Header/>
      <main>
        <Student/>
      </main>
    
    </div>
  );
}

export default App;
