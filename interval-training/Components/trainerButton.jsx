import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Button } from 'react-native';

const TrainerButton = ({onPress, title}) => 
    {
        return(
            <TouchableOpacity style = {styles.button} onPress = {onPress}>
                <Text style={styles.Text}>{title}</Text>
            </TouchableOpacity>
        )
    }
const styles = StyleSheet.create({
    button: 
    {
      paddingVertical: 12,
      paddingHorizontal: 32,
      justifyContent: 'centeri',
      borderRadius: 30,
      alignItems: 'center',
    },
    Text: 
    {
        color: 'blue',
        fontsize: 16,
    }
  });
export default TrainerButton;