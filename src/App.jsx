import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Restarunts/Card";
import Restartunts from "./Components/Restarunts/Restartunts";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="text-center">Hello World!</h1> */}
      <Header/>
     <Restartunts/>
     <Footer />
    </>
  );
}

export default App;
