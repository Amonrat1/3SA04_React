import React from 'react';
import { Text } from 'react-native'
import Forecast from './Forecast';
import { useState } from 'react';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
        })
    return (
        <Forecast {...forecastInfo}/>
    )
   } 