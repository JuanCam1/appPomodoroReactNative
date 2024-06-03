import { Time } from "@/components/Time";
import { useInterval } from "@/hooks/useInterval";

const initialPom = '15:00';
export const ShortTimeScreen = () => {
  const { isActive, setIsActive, tiempPo, onStartTime, onPauseTime, onResetTime } = useInterval({ initialPom })

  // useFocusEffect(
  //   useCallback(() => {
  //     onResetTime()
  //     return () => {
  //       onResetTime()
  //     }
  //   }, [])
  // )
  return (
    <Time
      texto="Tiempo Corto"
      bgColor="#397697"
      isActive={isActive}
      setIsActive={setIsActive}
      tiempPo={tiempPo}
      onStartTime={onStartTime}
      onPauseTime={onPauseTime}
      onResetTime={onResetTime}
    />
  )
}
