import React from 'react';
import { ImageBackground, Text ,StyleSheet} from 'react-native'
import Forecast from './Forecast';
import { useState } from 'react';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
        })
    return (
        <ImageBackground source={require('../unnamed.jpg')} style={styles.backdrop}>
        <Text>zipCode</Text>
        <Text>{props.zipCode}</Text>
        <Forecast {...forecastInfo}/>
    </ImageBackground>
    )
   } 
   const styles = StyleSheet.create({
    backdrop: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
    }
   });
