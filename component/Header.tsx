import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

type Props = {};
const Header = (props: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.logo}>TokoKu</Text>
      <Link href={"/(tabs)/explore"} asChild>
        <TouchableOpacity style={styles.searchBar}>
          <Text style={styles.searchtxt}>Search</Text>
          <Ionicons name="search-outline" size={20} color={Colors.gray} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingBottom: 10,
    gap: 15,
  },
  logo: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "700",
  },
  searchBar: {
    flex: 1,
    backgroundColor: Colors.background,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchtxt: {
    color: Colors.gray,
  },
});
