import { useState } from "react";

function App() {
  const name = "yuki";

  let count = 0;
  function addCount() {
    count++;
    console.log(count);
  }

  // useState
  const [countState, setCountState] = useState(0);
  function addCountState() {
    setCountState(countState + 1);
  }
  function minusCountState() {
    setCountState(countState - 1);
  }

  // array state
  // [{id, name},{},{},...]
  const initialStudents = [
    { id: 1, name: "Emi" },
    { id: 2, name: "Bonnie" },
  ];
  const [students, setStudent] = useState(initialStudents);
  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id != id));
  }
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Hello world: {name}</h1>
      <button onClick={() => alert("Hello React")}>click</button>

      {/* button */}
      <h1>{count}</h1>
      <button onClick={addCount}>add+1</button>

      {/* state */}
      <h1>useState</h1>
      <h1>{countState}</h1>
      <button onClick={addCountState}>add</button>
      <button onClick={minusCountState}>minus</button>
      <button onClick={() => setCountState(0)}>reset</button>

      <h1>Student info = {students.length}</h1>
      <button onClick={() => setShow(!show)}>show</button>
      <ul>
        {show == true && students.map((item) => (
          <li key={item.id}>
            <p>
              {item.id} - {item.name}
            </p>
            <button onClick={() => deleteStudent(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
