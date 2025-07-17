import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tabs.Screen
        options={{ tabBarIcon: () => <Ionicons name="home-sharp" size={20} /> }}
        name="index"
      />
      <Tabs.Screen
        options={{ tabBarIcon: () => <Ionicons name="bookmark" size={20} /> }}
        name="bookmarks"
      />
      <Tabs.Screen
        options={{
          tabBarIcon: () => <Ionicons name="add-circle-sharp" size={20} />,
        }}
        name="create"
      />
      <Tabs.Screen
        options={{
          tabBarIcon: () => <Ionicons name="heart" size={20} />,
        }}
        name="notification"
      />
      <Tabs.Screen
        options={{
          tabBarIcon: () => <Ionicons name="person-circle" size={20} />,
        }}
        name="profile"
      />
    </Tabs>
  );
}
