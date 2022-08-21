import React,{ useEffect, useState } from 'react'
import { ImageBackground, Text, StyleSheet } from 'react-native'
import Forecast from './Forecast';
export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            etch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=e9ca12c57259869037bcebb992f9e5c2`)
        .then((response) => response.json())
        .then((json) => {
        setForecastInfo({
        main: json.weather[0].main,
        description: json.weather[0].description,
        temp: json.main.temp
        });
    })
    .catch((error) => {
        console.warn(error);
    });
    }
    }, [props.zipCode])
const [forecastInfo, setForecastInfo] = useState({
    main: '-',
    description: '-',
    temp: 0
}) 
return (
    <ImageBackground source={require('../unnamed.jpg')} style={styles.backdrop}>
    <Text>Zip Code</Text>
    <Text>{props.zipCode}</Text>
    <Forecast {...forecastInfo} />
    </ImageBackground>
   
    );
   }
   const styles = StyleSheet.create({
    backdrop: {
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        width: '100%',
        height: '100%'
        },
    }); 