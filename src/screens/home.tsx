import { Text, View } from "react-native";

import { Header } from "../components/header";

export default function Home() {
  return (
    <View className="flex-1 items-center px-6 pt-14 bg-background">
      <Header />

      <Text className="text-gray">Home</Text>
    </View>
  );
}
