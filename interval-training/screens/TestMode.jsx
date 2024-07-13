import * as React from 'react';
import { Button, View, Text } from 'react-native';
import TrainerButton from '../Components/trainerButton';
export default function TestMode({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Test Mode</Text>
      <TrainerButton/>
    </View>
  );
}

// ... other code from the previous section