import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='App'>
            <Navbar />
            <Home />
        </div>
    );
}

export default App;
