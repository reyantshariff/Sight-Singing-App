import React, { useEffect, useState } from 'react';  // Add this line to import useState
import { Button, View, Text } from 'react-native';
import TrainerButton from '../Components/trainerButton';
import {Audio} from 'expo-av';


const TestMode = ({ navigation }) => {
  const [prompt, setPrompt] = useState('Click the button below to begin!');
  const [buttonVisible, setButtonVisible] = useState(true); // State to manage button visibility
  const [sound, setSound] = useState();
  const [volume, setVolume] = useState(1.0);

  const onPress = () => {
    // Define the action when the button is pressed
    setPrompt('Match the starting note');
    setButtonVisible(false);
    playSound();
    // Add navigation actions here if needed
  };

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/piano-mp3/A3.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.setVolumeAsync(volume);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', padding: 100}}>
      <Text style={{fontSize: 10, marginBottom: 200 }} numberOfLines={1}>{prompt}</Text>
      {buttonVisible && <TrainerButton onPress={onPress} title="Begin" />}
    </View>
  );
}



export default TestMode

// ... other code from the previous section