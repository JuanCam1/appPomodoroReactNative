// CustomStatusBar.js

import { ReactNode } from 'react';
import { SafeAreaView, StatusBar, StatusBarStyle } from 'react-native';
interface Props {
  children: ReactNode;
  statusBgColor?: string,
  barStyle?: StatusBarStyle,
  bgColor?: string,
}
const CustomStatusBar = ({
  children,
  statusBgColor = '#fff',
  barStyle = 'light-content',
  bgColor = '#fff',
}: Props) => {
  return (
    <>
      <StatusBar backgroundColor={statusBgColor} barStyle={barStyle} />
      <SafeAreaView style={{ flex: 0, backgroundColor: statusBgColor }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
        {children}
      </SafeAreaView>
    </>
  );
};

export default CustomStatusBar;