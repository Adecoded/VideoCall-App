import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const MeetingRoom = () => {
  return (
   
    <View style={styles.container}>
    <SafeAreaView style={{height:'100%',backgroundColor:"black"}}>
    <View>
     <Text style={styles.MeetingContainer}>Start a Meeting</Text>
     <View style={styles.info}></View>
     </View>
     </SafeAreaView>
    </View>
   
  )
}

export default MeetingRoom

const styles = StyleSheet.create({
  container:{
    
  },
  MeetingContainer:{

  }, 
 info:{
   
 }
})