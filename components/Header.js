import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo";
const Header = () => {
  return (
    <View style={styles.container}>
      <Entypo style={styles.icon} name='notification' size={30} color="white" />
      <Text style={styles.heading}>Meet & Chat</Text>
      <Entypo style={styles.icon} name='new-message' size={30} color="white" />
      
    </View>
  )
}

export default Header
const styles =StyleSheet.create({
container:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
paddingVertical:20,
paddingHorizontal:10,
},
icon:{
  marginTop:20,
},
heading:{
  color:'white',
  fontSize:20,
  fontWeight:"700",
  marginTop:20,
 

}
})