import { Text, View } from "react-native";

function JobCard(props) {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // width: 300,
        height: 200,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
      }}
    >
      <Text style={{ color: "gray", fontSize: 18, fontWeight: "bold" }}>
        Job {props.number}
      </Text>
    </View>
  );
}

export default JobCard;
