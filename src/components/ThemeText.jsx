import {Text , StyleSheet} from 'react-native'
import React from 'react'

const ThemeText = ({style, children}) => {
  return (
      <Text style={[styles.text, style || {}]}>{children}</Text>

  )
}
const styles = StyleSheet.create({
    text:{
        fontFamily: 'Poppins-Regular',
    }
})   

export default ThemeText