import Toast from "react-native-toast-message";

type AlertType = "error" | "info" | "success";
type AlertPosition = "top" | "bottom";

export const toastAlert = (typeAlert: AlertType, position: AlertPosition, text: string) => {
  Toast.show({
    type: typeAlert,
    position: position,
    text1: text
  });
};
