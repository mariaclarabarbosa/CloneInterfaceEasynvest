import React from 'react'
import {Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ButtonMenus = ({buttonStyle, textStyle ,texto, onPress, icon, iconColor, tStyle, text}) => {
  return(
    <>
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Ionicons name={icon} color={iconColor} size={20} />
        <Text style={tStyle}>{text}</Text>
        <Text style={textStyle}>{texto}</Text>
      </TouchableOpacity>
    </>
  )
}

export default ButtonMenus;