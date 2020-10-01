import React from 'react'
import {Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Style.jsx'

const ButtonMenus = ({texto, onPress, icon, iconColor, text}) => {
  return(
    <>
      <TouchableOpacity style={styles.menus} onPress={onPress}>
        <Ionicons name={icon} color={iconColor} size={25} />
        <Text style={styles.textMenus2}>{text}</Text>
        <Text style={styles.textMenus}>{texto}</Text>
      </TouchableOpacity>
    </>
  )
}

export default ButtonMenus;