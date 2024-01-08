import { View } from "react-native";

interface IProgressBar {
  progress?: number;
}

export function ProgressBar({ progress = 0 }: IProgressBar) {
  return (
    <View className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <View
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={progress}
        aria-valuemax={100}
        className="h-3 rounded-xl bg-violet-600"
        style={{ width: `${progress}%` }}
      />
    </View>
  );
}
