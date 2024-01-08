import { ScrollView, Text, View } from "react-native";
import { HabitDay, daySize } from "../components/HabitDay";
import { Header } from "../components/Header";
import { generateDates } from "../utils/generateDays";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const days = generateDates();
  const datesFromTheBeginnning = 14 * 6;
  const daysAmountToFill = datesFromTheBeginnning - days.length;

  const { navigate } = useNavigation();

  return (
    <View className="bg-background flex-1 px-8 pt-16">
      <Header />
      <View className="flex-row mt-6 mb-2">
        {weekDays.map((item, index) => {
          return (
            <Text
              key={`${item}_${index}`}
              style={{ width: daySize, height: daySize }}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
            >
              {item}
            </Text>
          );
        })}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {days.map((day, index) => (
            <HabitDay
              key={day.toISOString()}
              onPress={() =>
                navigate("SummaryDay", { date: day.toISOString() })
              }
            />
          ))}
          {daysAmountToFill > 0 &&
            Array.from({ length: daysAmountToFill }).map((_, i) => (
              <View
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-50"
                style={{ width: daySize, height: daySize }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
