import Toast from "react-native-toast-message";

const showToast = (typeToast: string,text1: string,text2: string) => {
  Toast.show({
    type: typeToast,
    text1: text1,
    text2: text2,
    autoHide: true,
    visibilityTime: 2000,
    position: "top"
  });
};