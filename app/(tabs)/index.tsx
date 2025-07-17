import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Hello from react native</Text>
      <Link href={"/notification"}>
        <Text>Press me</Text>
      </Link>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 50,
  },
});
