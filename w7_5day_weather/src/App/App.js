import { useEffect } from 'react';
import { useState } from 'react';
import { WeatherDay } from '../WeatherDay/WeatherDay';


function App() {

    const zipCodeKey = '94117,US';
    const apiKey = '677637788ed31989191ee9a632d30134';

    // useEffect(() =>{
    //     fetch(
    //         'api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&zip=${zipCodeKey}&units=imperial'
    //     )
    //     .then(res => res.json())
    //     .then(res => console.log());
    // }, []);

    return (
        <div>
            <h2>WeatherApp</h2>
        </div>
        
        );
}



export default App;