import React from 'react'
import {Text, TouchableOpacity, Image} from 'react-native';

const ButtonMenus = ({buttonStyle, textStyle ,texto, onPress, icon, imageStyle, tStyle, text}) => {
  return(
    <>
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Image source={icon} style={imageStyle}/>
        <Text style={tStyle}>{text}</Text>
        <Text style={textStyle}>{texto}</Text>
      </TouchableOpacity>
    </>
  )
}

export default ButtonMenus;