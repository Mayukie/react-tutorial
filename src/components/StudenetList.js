import { useState } from "react";
import "./StudentList.css";

const Student = () => {
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

  // style
  const myStyle = {
    color:"orange"
  }

  const btnShowStyle = {
    background: show ? "red" :  "green"
  }

  return (
    <>
      {/* state */}
      <h1>useState</h1>
      <h1>{countState}</h1>
      <button onClick={addCountState}>add</button>
      <button onClick={minusCountState}>minus</button>
      <button onClick={() => setCountState(0)}>reset</button>

      <ul>
        <div className="header">
          <h1 style={{color:"purple", fontSize:"25px"}}>Student info ({students.length})</h1>
          <button onClick={() => setShow(!show)} style={btnShowStyle}>{show ? "hide" : "show"}</button>
        </div>

        {show == true &&
          students.map((item) => (
            <li key={item.id}>
              <p>
                {item.id} - {item.name}
              </p>
              <button onClick={() => deleteStudent(item.id)} className="delete">
                delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Student;
