import { TextStyle, StyleProp,ViewStyle } from "react-native"


const primary = '#00FF7F'
const secondary = "black"
const white = "white"

export const AppColors = {
    primary,
    secondary,
    white,

textPrimary : {color:primary} as StyleProp <TextStyle>, 
textRed : {color:"red"} as StyleProp <TextStyle>,

bgPrimary : {backgroundColor:primary} as StyleProp <ViewStyle>
 

}