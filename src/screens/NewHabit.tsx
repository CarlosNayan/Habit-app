import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "tailwindcss/colors";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";

const avaliableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function NewHabit() {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleToggleWeekDays(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex)
      );
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex]);
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>
        <Text className="mt-6 text-white font-semibold text-base">
          Qual o seu compromentimento?
        </Text>
        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600"
          placeholder="Exercícios, dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
        />
        <Text className="mt-6 text-white font-semibold text-base">
          Qual a recorrência?
        </Text>
        {avaliableWeekDays.map((weekDay, index) => {
          return (
            <Checkbox
              key={`${weekDay}_${index}`}
              title={weekDay}
              onPress={() => handleToggleWeekDays(index)}
              checked={weekDays.includes(index)}
            />
          );
        })}
        <View className="w-full items-center">
          <TouchableOpacity className="w-3/5 h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6">
            <Text className="font-semibold text-base text-white ml-2">
              Confirmar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
