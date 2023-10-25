import { View, Text, Image,  } from 'react-native'
import React from 'react'

const Home = () => {
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
      <Image resizeMode='contain' style={{height: 210, width: 188}}
      source={require('../assets/images/logomhs.png')} />
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
          }}>
                  <Image resizeMode='contain' style={{height: 210, width: 188, borderRadius: 12}}
      source={require('../assets/images/JUSALPUKAT.jpeg')} />
          </View>
 
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Jus Alpukat</Text>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, color: 'red'}}>Rp.13.000</Text>
          </View>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex:1,
            marginTop:16
          }}>

          <View style={{
          }}>
 <Image resizeMode='contain' style={{height: 200, width: 200, borderRadius: 12}}
      source={require('../assets/images/nasigoreng.jpg')} />
          </View>

          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Nasi Goreng</Text>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16,  color: 'red'}}>Rp.18.000</Text>
          </View>
          </View>
          <View style={{flexDirection: 'row'}}>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex:1,
            marginTop:16
          }}>
            
          <View style={{
          }}>
                  <Image resizeMode='contain' style={{height: 210, width: 188, borderRadius: 12}}
      source={require('../assets/images/JUSALPUKAT.jpeg')} />
          </View>
 
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Jus Alpukat</Text>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, color: 'red'}}>Rp.13.000</Text>
          </View>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex:1,
            marginTop:16
          }}>

          <View style={{
          }}>
 <Image resizeMode='contain' style={{height: 200, width: 200, borderRadius: 12}}
      source={require('../assets/images/nasigoreng.jpg')} />
          </View>

          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16, fontWeight: 'bold', color: 'black'}}>Nasi Goreng</Text>
          <Text style={{marginTop: 12, fontSize: 16, marginHorizontal: 16,  color: 'red'}}>Rp.18.000</Text>
          </View>
          </View>

    </View>

      
  )
}

export default Home