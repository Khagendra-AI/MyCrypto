import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Icon } from '../../assets'

const CurrentValueTile = ({navigatePortfolio}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
      <View style={styles.leftView}>
        <View style={styles.dataView}>
          <Text style={styles.currentText}>Current value</Text>
          <Text style={styles.priceText}>$2500.81</Text>
          <Text style={styles.pricechangeText}>-4.63%</Text>
        </View>

      </View>
      <TouchableOpacity style={styles.touchableForward} onPress={navigatePortfolio}>
        <Image
        source={Icon.forward}
        style={styles.forwardImage}
        />
      </TouchableOpacity>
      <View style={styles.rightView}>
       
      </View>
      </View>
      <View style={styles.lowercontainer}>
      <TouchableOpacity style={styles.touchableBuy}>
        <Image
        source={Icon.bitcoin}
        style={styles.bitlogo}
        />
        <Text style={styles.buyText}>Buy BTC</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.touchableAdd}>
        <Text style={styles.addText}>Add Money</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CurrentValueTile

