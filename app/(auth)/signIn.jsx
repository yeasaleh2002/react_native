import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/logo.png";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="">
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={logo}
            className="w-[115px] h-[30px]"
            // style={{height:"30px", width:"115px"}}
            resizeMethod="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
