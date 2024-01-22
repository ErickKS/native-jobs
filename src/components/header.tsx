import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

export function Header() {
  const [job, setJob] = useState("");

  return (
    <View>
      <View className="flex-row justify-between w-full">
        <View className="flex-row items-center gap-3">
          <View className="h-10 w-10 rounded-full bg-purple" />

          <Text className="text-gray font-medium">Hi, Erick Kuwahara</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="flex justify-center items-center h-10 w-10 bg-background border border-foreground rounded-full"
        >
          <Feather name="bell" color={"#BBBBBB"} size={18} />
        </TouchableOpacity>
      </View>

      <View className="my-12">
        <Text className="text-5xl font-semibold text-gray leading-[56px]">Let's find your dream job!</Text>
      </View>

      <View className="flex-row items-center w-full py-3 px-3 bg-background border border-foreground rounded-md">
        <Feather name="search" color={"#BBBBBB"} size={24} />

        <TextInput
          value={job}
          onChangeText={(job) => setJob(job)}
          placeholder="Search for jobs"
          className="flex-1 pl-3 text-gray"
          placeholderTextColor={"#BBBBBB"}
        />
      </View>
    </View>
  );
}
