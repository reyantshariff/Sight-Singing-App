import * as React from 'react';
import { Button, View, Text } from 'react-native';
import TrainerButton from '../Components/trainerButton';

export default function ReviewMode({ navigation }) {
  const onPress = () => {
    // Define the action when the button is pressed
    console.log('Begin button pressed');
    // Add navigation actions here if needed
  };
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text>Review Mode</Text>
    </View>
  );
}

// ... other code from the previous section