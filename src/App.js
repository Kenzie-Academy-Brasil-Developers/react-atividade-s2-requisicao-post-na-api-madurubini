import "./App.css";
import Display from "./components/Display";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      <div className="Container">
        <Login setIsAuth={setIsAuth}></Login>
        <Display isAuth={isAuth}></Display>
      </div>
    </div>
  );
}

export default App;
