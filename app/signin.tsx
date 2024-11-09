import { StyleSheet, Text, Touchable, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import {
  GestureHandlerRootView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import InputField from "@/component/InputField";
import SocialMedia from "@/component/SocialMedia";

type Props = {};

const SignInScreen = (props: Props) => {
  return (
    <>
      {/* <Stack.Screen options={{headerTitle: 'Sign Up', headerLeft: ()=> (
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name='close' size={24} color={Colors.black}/>
    </TouchableOpacity>
    )}} /> */}
      <View style={styles.container}>
        <Text style={styles.title}>Masukan Akun</Text>
        <InputField
          placeholder="Email"
          placeholderTextColor={Colors.gray}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <InputField
          placeholder="Password"
          placeholderTextColor={Colors.gray}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <Link href={"/(tabs)"}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Masuk Akun</Text>
          </TouchableOpacity>
        </Link>

        <Text style={styles.lgnText}>
          Belum Punya akun?{" "}
          <Link href={"/signUp"} asChild>
            <TouchableOpacity>
              <Text style={styles.lgnSpanText}>SignUp</Text>
            </TouchableOpacity>
          </Link>
        </Text>
        <View style={styles.divider} />
        <SocialMedia emailHref="/(tabs)/" />
      </View>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
    letterSpacing: 1.2,
    marginBottom: 50,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
    alignSelf: "stretch",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.white,
  },
  lgnText: {
    marginBottom: 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
  },
  lgnSpanText: {
    color: Colors.primary,
    fontWeight: "600",
  },
  divider: {
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    // marginTop:'10%',
    marginBottom: 20,
  },
});
