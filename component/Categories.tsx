import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { CategoryType } from "@/types/type";

type Props = {
  categories: CategoryType[];
};

const Categories = ({ categories }: Props) => {
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;
const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: 20,
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
  itemImage: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
  },
  item: {
    marginVertical: 10,
    gap: 5,
    alignItems: "center",
    marginLeft: 20,
  },
});
