import react from  'react'
import { FlatList, View, Text, useNavigation } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]


const ZipItem = ({place, code, navigation}) => (
    <View>
        <Text>{place}</Text>
        <Text>{code}</Text>
    </View>
    )
    export default function ZipCodeScreen(){
        const navigation = useNavigation()
        return (
        <View>
        <FlatList
        data={availableZipItems}
        keyExtractor={item => item.code}
        renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
        <StatusBar style="auto" />
        </View>
        );

    }