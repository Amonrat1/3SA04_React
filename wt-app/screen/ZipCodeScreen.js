import React from "react"
import { FlatList, Text, TouchableHighlight, View ,ImageBackground} from "react-native"
import { useNavigation } from "@react-navigation/core"
import {StyleSheet}  from 'react-native'
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Bangkok', code: '10240' },
    { place: 'Krabi', code: '81140' },
   ]
   const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress= {() => {navigation.navigate('Weather', {zipCode: code})}} >
    <View style={styles.zipItem}>
    <Text>{place}</Text>
    <Text>{code}</Text>
    </View>
    </TouchableHighlight>
    )
   const _keyExtractor = item => item.code
   export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
    <ImageBackground source={require('../1.jpg')} style={styles.backdrop}>
    <FlatList
    data={availableZipItems}
    keyExtractor={_keyExtractor}
    renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
    />
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    zipItem: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-around',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop:20,
        marginLeft: 80,
        marginRight:80,
        padding: 10  
    },
    zipPlace: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color:'#fff'
    },
    zipCode: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color:'#fff'
    },
    backdrop: {
     flexDirection : 'column',
     justifyContent : 'center',
     alignItems : 'center',
     width: '100%',
     height: '100%',
    }
   }); 