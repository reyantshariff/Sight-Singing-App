import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TrainerButton = ({onPress, title}) => 
    {
        return(
            <TouchableOpacity style = {styles.button} onPress = {onPress}>
                <Text style={styles.Text} numberOfLines={1}>{title} </Text>
            </TouchableOpacity>
        )
    }

const styles = StyleSheet.create({
    button: 
    {
      paddingVertical: 12,
      paddingHorizontal: 32,
      justifyContent: 'space-around',
      borderRadius: 45,
      width: 90,
      height: 90,
      alignItems: 'center',
      backgroundColor: 'blue',
      position: 'fixed',
    },
    Text: 
    {
        color: 'white',
        fontSize: 9,
    },
  });
export default TrainerButton;