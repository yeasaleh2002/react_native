import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={require("../assets/images/logo.png")}
            // className="w-[80px] h-[80px]"
            resizeMethod="contain"
          />
          <Image
            source={require("../assets/images/cards.png")}
            className="max-w-[380px] w-full h-[300px]"
            resizeMethod="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless {"  "} Possibilities with
              <Text className="text-secondary-200"> Aora</Text>
            </Text>
            <Image
            source={require("../assets/images/path.png")}
            className="w-[136px] w-full h-[15px] absolute -bottom-2 -right-8"
            resizeMethod="contain"
          />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center" >Where creativity meets innovation: embark on a journey of limitless exploration with Aora </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
