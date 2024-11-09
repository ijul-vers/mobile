import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import ProductsItem from "./ProductsItem";
import { ProductType } from "@/types/type";

type Props = {
  products: ProductType[];
};

const ProdductList = ({ products }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Untuk Kamu</Text>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 20,
        }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ index, item }) => (
          <ProductsItem item={item} index={index} />
        )}
      />
    </View>
  );
};

export default ProdductList;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  productsItem: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  titleBtn: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.6,
    color: Colors.black,
  },
});
