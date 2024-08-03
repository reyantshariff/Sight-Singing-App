import React from 'react';
import { Alert } from 'react-native';
import { Audio } from 'expo-av';

export default function AudioPlayer() 
{
  const [sound, setSound] = useState();

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/piano-mp3/A3.mp3') // Adjust the path as needed
    );
    setSound(sound);
    if (onSoundLoaded) {
      onSoundLoaded(sound);
    }
    await sound.playAsync();
  };

}


 
