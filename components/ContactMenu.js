import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";

const items = [
  {
    
    name:"Starred",
    
},
{
  
  name:"Drey",
 photo: require("../assests")
  
},
{
  
  name:"Annie",
  
},
  
{
  
  name:"David",
  
  
},
]
const ContactMenu = () => {
  return (
    <View style={styles.container}>
    {items.map((item, index) =>

      <View style={styles.row} key={index}>

      <View style={styles.starredIcon}>
<AntDesign name='star' size={30} color="white" />
      </View>
      <Text style={styles.text}>
      {item.name}
      </Text>
      </View>
      )}
    </View>
  )
}

export default ContactMenu

const styles = StyleSheet.create({
  container:{

  },
  row:{
flexDirection:"row",
marginTop:20,
alignItems:"center",
  },
  starredIcon:{
backgroundColor:"#333",
width:55,
height:55,
justifyContent:"center",
alignItems:"center",
borderRadius:20,
  },
  text:{
color:"white",
paddingLeft:15,
fontSize:18,

  },
})