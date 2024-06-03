import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types"
import { RootStackParamList } from "@/models"
import { useInterval } from "@/hooks/useInterval";
import { Time } from "@/components/Time";

type Props = NativeStackScreenProps<RootStackParamList, 'LongTimeScreen'>;
const initialPom = '25:00';
export const LongTimeScreen = ({ navigation }: Props) => {
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
      texto="Tiempo Largo"
      bgColor="#D94A4A"
      isActive={isActive}
      setIsActive={setIsActive}
      tiempPo={tiempPo}
      onStartTime={onStartTime}
      onPauseTime={onPauseTime}
      onResetTime={onResetTime}
    />
  )
}
