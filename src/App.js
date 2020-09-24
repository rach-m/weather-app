import React, { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm/SearchForm";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

function App() {
    let [zipCode, setZipCode] = useState(10036);
    const [input, setInput] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        setZipCode(input);
    }

    return (
        <div className='App'>
            <WeatherInfo zipCode={zipCode} />
            <SearchForm handleSubmit={handleSubmit} setInput={setInput} />
        </div>
    );
}

export default App;
