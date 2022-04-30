import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
const items = [
  {
    id:1,
    name:"video-camera",
    title:"New Meeting",
    customColor:"orange",
},
{
  id:2,
  name:"plus-square",
  title:"Join",
  
},
{
  id:3,
  name:"calendar",
  title:"Schedule",
},
  
{
  id:4,
  name:"upload",
  title:"Share Screen",
  
},
]
const MenuButtons = ({navigation}) => {

  const openMeeting = () =>{
navigation.navigate("Room")
  }
  return (

    <View style={styles.container}>
    {items.map((item, index) =>

    
   
      <View style={styles.buttonContainer} key={index}>
<TouchableOpacity
onPress={()=>openMeeting()}
style={{...styles.Button,
backgroundColor: item.customColor ? item.customColor : "blue"
}}>
<FontAwesome name={item.name}
 size={23} color={"white"}/>
</TouchableOpacity>
<Text style={styles.MenuText}>{item.title}</Text>
    </View> 
  )}
    </View>
  )
}

export default MenuButtons

const styles = StyleSheet.create({
  container:{
marginTop:25,
paddingBottom:10,
borderBottomColor:"white",
borderBottomWidth:1,
flexDirection:'row',
justifyContent:"space-between",
  },
  buttonContainer:{
alignItems:'center',
flex:1,
  },
  MenuText:{
color:'white',
fontSize:12,
paddingTop:10,
fontWeight:"600",
  },
  Button:{
width:50,
height:50,
backgroundColor:'blue',
borderRadius:15,
justifyContent:'center',
alignItems:'center',
  },
})