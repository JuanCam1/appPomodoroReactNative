import { useIsFocused } from "@react-navigation/native";
import { ColorValue, StatusBar, StatusBarStyle } from "react-native";

interface StatusBarProps {
  barStyle: StatusBarStyle;
  bgColor: ColorValue;
}
const StatusBarComponent = ({barStyle,bgColor}:StatusBarProps) => {
  const isFocused = useIsFocused()

  return isFocused ? <StatusBar barStyle={barStyle}  backgroundColor={bgColor}/> : null;
}

export default StatusBarComponent;