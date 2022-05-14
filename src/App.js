import { useState } from "react";
import "./App.css";
import MyComp from "./components/MyComp";
import MyUser from "./components/MyUser";
const hobbies = [
  {
    id: 1,
    name: "Football",
  },
  {
    id: 2,
    name: "tennis",
  },
  {
    id: 3,
    name: "sahmat",
  },
  {
    id: 4,
    name: "valeybal",
  },
];
function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState("");

  return (
    // useState,useEffect,useRef,useCallback,useMemo
    <div className="App">
      {isVisible ? <MyComp /> : <p>men getdim </p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        Is Visible Toggle
      </button>
      <input type="message" onChange={(a) => setText(a.target.value)} />
      <p>{text}</p>
      
      <span>-------------------------</span>
      <MyUser name="Orxan" surname="Allahyarov" hobbies={hobbies} />
    </div>
  );
}

export default App;
