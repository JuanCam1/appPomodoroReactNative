import { IntervalScreen, LongTimeScreen, ShortTimeScreen } from "@/screens";
import { RootStackParamList } from "../models/Main.model";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useThemeContext } from "@/hooks";
import IconCustom from "@/components/IconCustom";

const Tab = createBottomTabNavigator<RootStackParamList>();

const MainNavigation = () => {
  const { colors, isDark } = useThemeContext();
  return (
    <Tab.Navigator
      initialRouteName="LongTimeScreen"

      screenOptions={() => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: colors.textInactive,
        tabBarStyle: {
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
          // width: "70%",
          borderTopWidth: 0,
          position: "absolute",
          bottom: 10,
          left: 40,
          right: 40,
          borderRadius: 15,
          backgroundColor: isDark ? colors.inputBackground : colors.background,
          elevation: 1
        }
      })}
    >

      <Tab.Screen name="LongTimeScreen" component={LongTimeScreen} options={{
        // tabBarBadge: 2,
        tabBarIcon: ({ color }) => {
          return (
            <IconCustom
              name="timer-outline"
              color={color}
              type="ionicons"
              size={24}
            />
          );
        }
      }}
      />

      <Tab.Screen name="IntervalScreen" component={IntervalScreen} options={{
        tabBarIcon: ({ color }) => {
          return (
            <IconCustom
              name="rest"
              color={color}
              type="antDesign"
              size={24}
            />
          );
        }
      }} />
      <Tab.Screen name="ShortTimeScreen" component={ShortTimeScreen} options={{
        tabBarIcon: ({ color }) => {
          return (
            <IconCustom
              name="timer-outline"
              color={color}
              type="ionicons"
              size={24}
            />
          );
        }
      }} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
