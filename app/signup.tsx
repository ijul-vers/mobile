import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Colors } from "@/constants/Colors";
import InputField from "@/component/InputField";
import SocialMedia from "@/component/SocialMedia";

type Props = {};

const SignUpScreen = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      // Fetch existing users
      const response = await fetch("http://192.168.18.47:8000/users");
      const users = await response.json();

      // Check if email already exists
      const userExists = users.find(
        (u: { email: string }) => u.email === email
      );
      if (userExists) {
        Alert.alert("Error", "Email already exists.");
        return;
      }

      // Generate a new username based on the number of users
      const newUsername = users.length + 1;

      // Prepare new user data
      const newUser = {
        username: newUsername,
        email,
        password,
      };

      // Add new user to the database
      const postResponse = await fetch("http://192.168.18.47:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!postResponse.ok) {
        throw new Error("Failed to add user");
      }

      Alert.alert("Success", "Account created successfully!");
      router.push("/signIn"); // Redirect to Sign In screen
    } catch (error) {
      // Handle unknown error type
      if (error instanceof Error) {
        console.error("Sign-up error:", error.message);
        Alert.alert("Error", error.message);
      } else {
        console.error("Unknown error:", error);
        Alert.alert("Error", "An unexpected error occurred.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buat Akun</Text>
      <InputField
        placeholder="Email"
        placeholderTextColor={Colors.gray}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <InputField
        placeholder="Password"
        placeholderTextColor={Colors.gray}
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <InputField
        placeholder="Konfirmasi Password"
        placeholderTextColor={Colors.gray}
        autoCapitalize="none"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Buat Akun</Text>
      </TouchableOpacity>

      <Text style={styles.lgnText}>
        Sudah punya akun?{" "}
        <Link href={"/signIn"} asChild>
          <TouchableOpacity>
            <Text style={styles.lgnSpanText}>SignIn</Text>
          </TouchableOpacity>
        </Link>
      </Text>
      <View style={styles.divider} />
      <SocialMedia emailHref="/signIn" />
    </View>
  );
};

export default SignUpScreen;

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
