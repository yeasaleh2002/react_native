import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/logo.png";
import FormField from "../../components/FormField";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="">
        <View className="w-full justify-center h-full px-4 my-6">
          {/* <Image
            source={logo}
            className="w-[115px] h-[30px]"
            // style={{height:"30px", width:"115px"}}
            resizeMethod="contain"
          /> */}
          <Text
            style={{ color: "#FF9C01" }}
            className="text-white text-4xl text-semibold font-psemibold"
          >
            Aora
          </Text>
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Login in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={() =>
              setForm({
                ...form,
                email: e,
              })
            }
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Email"
            value={form.password}
            handleChangeText={() =>
              setForm({
                ...form,
                password: e,
              })
            }
            otherStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
