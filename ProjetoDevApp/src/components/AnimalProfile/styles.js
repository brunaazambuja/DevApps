import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imageStyle : {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        alignSelf : 'center',
        position : 'absolute'
    },
    imageViewStyle : {
        width : 300,
        height : 300,
        padding : 30,
        alignSelf : 'center',
        
    },
    textTittleStyle : {
        fontSize : 25,
        paddingHorizontal : 20
    },
    textDataStyle : {
        color : "#757575",
        fontSize : 20,
        paddingHorizontal : 20 
    }
});