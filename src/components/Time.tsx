import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import StatusBarComponent from "@/components/StatusBarComponent";
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Dispatch, SetStateAction } from "react";

interface TimeProps {
  texto: string;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  tiempPo: string;
  onStartTime: () => void;
  onPauseTime: () => void;
  onResetTime: () => void;
  bgColor: string
}
export const Time = ({ texto, bgColor, isActive, setIsActive, tiempPo, onPauseTime, onResetTime, onStartTime }: TimeProps) => {
  
  return (
    <View
      style={[
        styles.container, {
          backgroundColor: bgColor
        }]}
    >
      <StatusBarComponent barStyle="light-content" bgColor={bgColor} />
      <Text style={styles.title}>{texto}</Text>
      <View
        style={styles.time}
      >
        <Text style={styles.timeText}>{tiempPo}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity activeOpacity={0.5} disabled={!isActive} style={[styles.option, {
          backgroundColor: !isActive ? "#cecece" : "white"
        }]} onPress={() => {
          onPauseTime()
          setIsActive(false)
        }} >
          <MaterialCommunityIcons name="pause" size={28} color={bgColor} />
        </TouchableOpacity>

        <TouchableOpacity disabled={isActive} activeOpacity={0.5} style={[styles.option, {
          backgroundColor: isActive ? "#cecece" : "white"
        }]} onPress={() => {
          setIsActive(true)
          onStartTime()
        }
        } >
          <AntDesign name="caretright" size={28} color={bgColor} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} disabled={!isActive} style={[styles.option, {
          backgroundColor: !isActive ? "#cecece" : "white"
        }]} onPress={onResetTime}>
          <MaterialIcons name="stop" size={28} color={bgColor} />
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    paddingTop: "45%"
  },
  title: {
    paddingBottom: 50,
    fontFamily: "Arvo-Bold",
    fontSize: 30,
    color: "white",
  },
  time: {
    width: 200,
    height: 200,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
  },
  timeText: {
    color: "white",
    fontSize: 60,
  },
  options: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    gap: 20,
    height: 50,
  },
  option: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 100
  }
})