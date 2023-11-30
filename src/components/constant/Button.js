import {Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import COLORS from './Color'

const Button = (props) => {
    const filledbgColor = props.color|| COLORS.white;
    const outlinedColor = COLORS.white;
    const bgColor = props.filled ? filledbgColor : outlinedColor;
    const textColor = props.filled ? COLORS.primary : COLORS.secondary;
  return (
    <TouchableOpacity 
    style={{
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...props.style
    }}
    onPress={props.onPress} 
    >
      <Text style={{ fontSize: 18, ... { color: textColor } }}>{props.title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Button