import { ScrollView, Text, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { ProgressBar } from "../components/ProgressBar";
import { Checkbox } from "../components/Checkbox";

interface Params {
  date: "string";
}

export function SummaryDay() {
  const route = useRoute();
  const { date } = route.params as Params;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format("dddd");
  const dayAndMonth = parsedDate.format("DD/MM");

  return (
    <ScrollView
      className="flex-1 bg-background px-8 pt-16"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <BackButton />
      <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
        {dayOfWeek}
      </Text>
      <Text className="text-white font-extrabold text-3xl">{dayAndMonth}</Text>
      <ProgressBar progress={30} />
      <View>
        <Checkbox title="Beber 3L de água" checked={true} />
        <Checkbox title="Ir à academia" checked={false} />
      </View>
    </ScrollView>
  );
}
