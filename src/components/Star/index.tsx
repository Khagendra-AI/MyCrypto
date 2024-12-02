import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Star = ({onStartPress, staricon}) => {
  return (
    <TouchableOpacity style={styles.touchableStar} onPress={onStartPress}>
            <Image source={staricon} style={styles.starimage} />
          </TouchableOpacity>
  )
}

export default Star

const styles = StyleSheet.create({
  starimage: {
    // backgroundColor:'red',
    height: 25,
    width: 25,
  },
})