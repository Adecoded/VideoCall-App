import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
const ContactMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>

      <View style={styles.starredIcon}>
<AntDesign name='star' size={30} color="white" />
      </View>

      </View>
      <Text style={styles.text}>
      Stared
      </Text>
    </View>
  )
}

export default ContactMenu

const styles = StyleSheet.create({
  container:{

  }
})