import { useEffect, useState } from "react";
import { Audio } from 'expo-av';
import { Sound } from "expo-av/build/Audio";

export const useInterval = ({ initialPom }: { initialPom: string }) => {
  const [isActive, setIsActive] = useState(false);
  const [tiempPo, setTiempPo] = useState(initialPom);
  const [conteoInt, setConteoInt] = useState<Date>();
  const [intervalo, setIntervalo] = useState<NodeJS.Timeout>();

  const [sound, setSound] = useState<Sound>();
  
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require("../../assets/audio/alert.mp3"));
    setSound(sound);

    console.log('Playing Sound');
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


  const timeShort = "5:00";
  const timeLong = "25:00";
  const time1 = 5;
  const time2 = 15;
  const time3 = 25;

  const value = initialPom === timeShort ? time1 : initialPom === timeLong ? time3 : time2

  const onStartTime = () => {

    if (intervalo === undefined && conteoInt === undefined) {
      let conteo = new Date(value * 60000);

      let intervaloRegresivo = setInterval(() => {
        if (conteo.getTime() > 0) {
          conteo.setTime(conteo.getTime() - 1000);
        } else {
          playSound();          
          clearInterval(intervaloRegresivo);
        }
        setConteoInt(conteo);

        if (conteo.getSeconds() >= 10) {
          let cadena = conteo.getMinutes() + ':' + conteo.getSeconds();
          setTiempPo(cadena.toString());
        } else {
          let cadena = conteo.getMinutes() + ': 0' + conteo.getSeconds();
          setTiempPo(cadena.toString());
        }
        setIntervalo(intervaloRegresivo);
      }, 1000);
    } else if (intervalo !== undefined && conteoInt !== undefined) {
      let intervaloRegresivo = setInterval(() => {
        if (conteoInt.getTime() > 0) {
          conteoInt.setTime(conteoInt.getTime() - 1000);
        } else {
          clearInterval(intervaloRegresivo);
        }
        setConteoInt(conteoInt);

        if (conteoInt.getSeconds() >= 10) {
          let cadena = conteoInt.getMinutes() + ':' + conteoInt.getSeconds();
          setTiempPo(cadena.toString());
        } else {
          let cadena = conteoInt.getMinutes() + ': 0' + conteoInt.getSeconds();
          setTiempPo(cadena.toString());
        }
        setIntervalo(intervaloRegresivo);
      }, 1000);
    }

  };

  const onResetTime = () => {
    setIsActive(false);
    clearInterval(intervalo);
    setIntervalo(undefined)
    setConteoInt(undefined);
    setTiempPo(initialPom);
  };

  const onPauseTime = () => {
    clearInterval(intervalo)
  }

  return {
    isActive,
    setIsActive,
    tiempPo,
    setTiempPo,
    onStartTime,
    onPauseTime,
    onResetTime
  }
}