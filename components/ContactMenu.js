import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from 'react-native';

const items = [
  {
    
    type:"Starred",
    name:"Starred"
    
},
{
  type:"Contact",
  name:"Drey",
 photo: require("../assets/img1.jpg"),
  
},
{
  type:"Contact",
  name:"Annie",
  photo: require("../assets/img2.jpg"),
},
  
{
  type:"Contact",
  name:"David",
  photo: require("../assets/img3.jpg"),
  
},
]
const ContactMenu = () => {
  return (
    <View style={styles.container}>
    {items.map((item, index) =>
<TouchableOpacity>
      <View style={styles.row}>
      {item.type == "Starred" ? (
      <View style={styles.starredIcon}>
      <AntDesign name="star" size={30} color="white" />
      </View> ) :
  (
       <Image source={item.photo} style={styles.Image} key={index}/>
       )
    }
      
      <Text style={styles.text}>
      {item.name}
      </Text>
      </View>
      </TouchableOpacity>
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
  Image:{
    width:55,
    height:55,
    borderRadius:20,
  }
})