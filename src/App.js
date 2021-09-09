import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import Info from './Components/Info';

function App() {
    const [meals, setMeals] = useState([]);

    const HandleClick = (e) => {
        e.preventDefault();
        // get random meal
        axios
            .get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then((res) => {
                setMeals(res.data.meals);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <Header onClick={HandleClick} />
            <Info info={meals} />
        </div>
    );
}

export default App;
