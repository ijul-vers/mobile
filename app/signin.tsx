import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "@/constants/Colors";
import InputField from "@/component/InputField";
import SocialMedia from "@/component/SocialMedia";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Hook for navigation

  const handleLogin = async () => {
    try {
      const response = await fetch("http://192.168.18.47:8000/users");
      const users = await response.json();

      const user = users.find(
        (u: { email: string; password: string }) =>
          u.email === email && u.password.toString() === password
      );

      if (user) {
        // Navigate to the tab screen if login is successful
        router.push("/(tabs)");
      } else {
        Alert.alert("Error", "Password Email salah.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "An error occurred while trying to log in.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masukan Akun</Text>
      <InputField
        placeholder="Email"
        placeholderTextColor={Colors.gray}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <InputField
        placeholder="Password"
        placeholderTextColor={Colors.gray}
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Masuk Akun</Text>
      </TouchableOpacity>

      <Text style={styles.lgnText}>
        Belum Punya akun?{" "}
        <TouchableOpacity onPress={() => router.push("/signUp")}>
          <Text style={styles.lgnSpanText}>SignUp</Text>
        </TouchableOpacity>
      </Text>
      <View style={styles.divider} />
      <SocialMedia emailHref="/(tabs)/" />
    </View>
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
    marginBottom: 20,
  },
});
