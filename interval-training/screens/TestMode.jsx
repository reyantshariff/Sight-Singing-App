import * as React from 'react';
import { Button, View, Text } from 'react-native';
import TrainerButton from '../Components/trainerButton';

const TestMode = ({ navigation }) => {
  const onPress = () => {
    // Define the action when the button is pressed
    console.log('Begin button pressed');
    // Add navigation actions here if needed
  };
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', padding: 100}}>
      <Text style = {{marginBottom: 200}}>Click the button below to begin!</Text>
      <TrainerButton onPress={onPress} title="Begin" />
    </View>
  );
}



export default TestMode

// ... other code from the previous section