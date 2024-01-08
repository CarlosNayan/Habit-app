import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { SummaryDay } from "../screens/SummaryDay";
import { Home } from "../screens/Home";
import { NewHabit } from "../screens/NewHabit";

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="SummaryDay" component={SummaryDay} />
      <Screen name="NewHabit" component={NewHabit} />
    </Navigator>
  );
}
