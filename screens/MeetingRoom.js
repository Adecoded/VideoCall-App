import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'

function MeetingRoom() {
const [name, setName] = useState()
const [names, setNames] = useState()
  return (
   
    <View style={styles.container}>
    <SafeAreaView style={{height:'100%',backgroundColor:"black"}}>
    <View>
     <Text style={styles.MeetingContainer}>Start a Meeting</Text>
     <View style={styles.info}>
     <TextInput
     style={styles.textInput}
     value={name}
     onChangeText={text => setName(text)}/>
     </View>

     <View style={styles.info2}>
     <TextInput
     style={styles.textInput}
     value={names}
     onChangeText={text => setNames(text)}/>
     </View>
     </View>
     <CustomButton/>
     
     </SafeAreaView>
    </View>
   
  )
}

export default MeetingRoom

const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    flex:1,
  },
  MeetingContainer:{

  }, 
 info:{
   marginTop:20,
width:'100%',
backgroundColor:'#373538',
height:50,
borderTopWidth:1,
borderBottomWidth:1,
borderColor:'#484648',
padding:12,
borderRadius:5,
 },
 info2:{
   marginTop:10,
  width:'100%',
  backgroundColor:'#373538',
  height:50,
  borderTopWidth:1,
  borderBottomWidth:1,
  borderColor:'#484648',
  padding:12,
   },
   button:{
     color:"white",
     backgroundColor:"yellow",
     textAlign:'center',
     width:'40%',
     justifyContent:"center",
     alignSelf:"center",
     marginTop:20,
     paddingTop:12,
     paddingBottom:12,
   }
})