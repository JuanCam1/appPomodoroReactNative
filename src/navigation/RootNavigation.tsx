import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useThemeContext } from "@/hooks";
import MainNavigation from "./MainNavigation";

const RootNavigation = () => {
  const { colors } = useThemeContext();

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
      text: colors.text
    }
  };
  return (
    <NavigationContainer theme={navigationTheme}>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
