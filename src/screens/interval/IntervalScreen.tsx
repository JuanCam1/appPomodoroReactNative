import { Time } from "@/components/Time";
import { useInterval } from "@/hooks/useInterval";

const initialPom = '5:00';
export const IntervalScreen = () => {
  const { isActive, setIsActive, tiempPo, onStartTime, onPauseTime, onResetTime } = useInterval({ initialPom })

  return (
    <Time
      texto="Descanso"
      bgColor="#389D8A"
      isActive={isActive}
      setIsActive={setIsActive}
      tiempPo={tiempPo}
      onStartTime={onStartTime}
      onPauseTime={onPauseTime}
      onResetTime={onResetTime}
    />
  )
}
