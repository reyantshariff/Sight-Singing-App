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

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const sounds = {
    'A3': require('../assets/piano-mp3/A3.mp3'),
    'Ab3': require('../assets/piano-mp3/Ab3.mp3'),
    'B3': require('../assets/piano-mp3/B3.mp3'),
    'Bb3': require('../assets/piano-mp3/Bb3.mp3'),
    'C3': require('../assets/piano-mp3/C3.mp3'),
    'D3': require('../assets/piano-mp3/D3.mp3'),
    'Db3': require('../assets/piano-mp3/Db3.mp3'),
    'E3': require('../assets/piano-mp3/E3.mp3'),
    'Eb3': require('../assets/piano-mp3/Eb3.mp3'),
    'F3': require('../assets/piano-mp3/F3.mp3'),
    'G3':require('../assets/piano-mp3/G3.mp3'),
    'Gb3': require('../assets/piano-mp3/Gb3.mp3')
  };
  

  async function playSound() { //Gives you the starting note using the expo audio api
    console.log('Loading Sound');
    const keys = Object.keys(sounds);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    const randomPath = sounds[randomKey];
   const { sound } = await Audio.Sound.createAsync(randomPath);
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