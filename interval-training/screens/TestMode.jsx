import React, { useState } from 'react';  // Add this line to import useState
import { Button, View, Text } from 'react-native';
import TrainerButton from '../Components/trainerButton';

const TestMode = ({ navigation }) => {
  const [prompt, setPrompt] = useState('Click the button below to begin!');
  const [buttonVisible, setButtonVisible] = useState(true); // State to manage button visibility

  const onPress = () => {
    // Define the action when the button is pressed
    setPrompt('Match the starting note');
    setButtonVisible(false);
    // Add navigation actions here if needed
  };
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', padding: 100}}>
      <Text style={{fontSize: 10, marginBottom: 200 }} numberOfLines={1}>{prompt}</Text>
      {buttonVisible && <TrainerButton onPress={onPress} title="Begin" />}
    </View>
  );
}



export default TestMode

// ... other code from the previous section