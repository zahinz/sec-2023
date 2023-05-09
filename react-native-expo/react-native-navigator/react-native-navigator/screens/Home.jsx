import { Button, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ textTransform: "capitalize" }}>Home Screen</Text>
      <Button
        onPress={() => props.navigation.navigate("Setting")}
        title="Settings"
        color="#841584"
        accessibilityLabel="Configure your app settings"
      />
      <Pressable
        onPress={() => props.navigation.navigate("Profile")}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          marginTop: 4,
          backgroundColor: "blue",
          paddingHorizontal: 10,
          paddingVertical: 8,
          borderRadius: 4,
        }}
      >
        <Ionicons name="md-person-circle" size={24} color="white" />
        <Text
          style={{ color: "white", fontSize: 16, textTransform: "capitalize" }}
        >
          Profile
        </Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;
