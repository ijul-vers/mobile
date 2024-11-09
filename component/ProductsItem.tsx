import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ProductType } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {
  item: ProductType;
  index: number;
};
const width = Dimensions.get("window").width - 40;
const ProductsItem = ({ item }: Props) => {
  return (
    <Animated.View
      style={styles.container}
      entering={FadeInDown.delay(300).duration(500)}
    >
      <Image source={{ uri: item.images[0] }} style={styles.productsItem} />
      <TouchableOpacity style={styles.bookmarkBtn}>
        <Ionicons name="heart-outline" size={22} color={Colors.black} />
      </TouchableOpacity>
      <View style={styles.productInfo}>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.ratingWrapper}>
          <Ionicons name="star" size={20} color={"#D4AF37"} />
          <Text style={styles.rating}>4.7</Text>
        </View>
      </View>
      <Text>{item.title}</Text>
    </Animated.View>
  );
};

export default ProductsItem;
const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
  },
  productsItem: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  bookmarkBtn: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor: "rgba(225,225,225,0.6)",
    padding: 5,
    borderRadius: 30,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    letterSpacing: 1.1,
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  price: { fontSize: 16, fontWeight: "700", color: Colors.primary },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rating: {
    fontSize: 14,
    color: Colors.gray,
  },
});
