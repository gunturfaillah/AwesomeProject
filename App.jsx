import { View, Text, Image,  } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
<View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 60,
      alignItems: 'center',
      backgroundColor: 'red',
      marginHorizontal: 16,
      marginTop: 16,
      padding: 16,
      borderRadius: 40
    }}>
      <Image resizeMode='contain' style={{height: 40, width: 150}}
      source={require('./src/assets/images/logomhs.png')} />
      <View style={{height: 40, width: 40, borderRadius: 20,
      backgroundColor:'yellow'}}></View>

    </View>
    <View style={{flexDirection: 'row'}}>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex:1,
            marginTop:16
          }}>
          <View style={{
            height: 200, 
            backgroundColor: 'red'
          }}></View>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Teh Obeng</Text>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, color: 'red'}}>Rp.5000</Text>
          </View>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex:1,
            marginTop:16
          }}>
          <View style={{
            height: 200, 
            backgroundColor: 'red'
          }}></View>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Nasi Kuning</Text>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'red'}}>Rp.10.000</Text>
          </View>
          </View>

    </View>

      

  )
}

export default App