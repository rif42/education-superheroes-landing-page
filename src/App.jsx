import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='App'>
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
