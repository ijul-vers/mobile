import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CategoryType, ProductType } from "@/types/type";
import { Stack } from "expo-router";
import Header from "@/component/Header";
import ProductsItem from "@/component/ProductsItem";
import { Colors } from "@/constants/Colors";
import ProdductList from "@/component/ProdductList";
import Categories from "@/component/Categories";

type Props = {};

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);
  const getCategories = async () => {
    const URL = "http://192.168.1.5:8000/categories";
    const response = await axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        // Add error handling logic (e.g., display an error message to the user)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const getProducts = async () => {
    const URL = "http://192.168.1.5:8000/products";
    const response = await axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        // Add error handling logic (e.g., display an error message to the user)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // const getCategories = async () => {
  //   const URL = "http://192.168.18.47:8000/categories";
  //   const response = await axios.get(URL);

  //   console.log(response.data);
  //   setCategories(response.data);
  //   setIsLoading(false);
  // };
  return (
    <>
      <Stack.Screen options={{ headerShown: true, header: () => <Header /> }} />
      <Categories categories={categories}></Categories>
      {/* <View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <Text>{item.name}</Text>
          </View>
        )}
      />
      </View> */}
      <ProdductList products={products} />
    </>
  );
};

export default HomeScreen;

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
