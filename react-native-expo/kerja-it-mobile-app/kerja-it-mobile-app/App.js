import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import JobCard from "./components/JobCard";
import { useState } from "react";

// export default function App() {
//   const windowWidth = Dimensions.get("window").width;

//   return (
//     <SafeAreaView style={{ display: "flex", flexDirection: "row" }}>
//       <View
//         style={{
//           backgroundColor: "red",
//           height: 150,
//           width: windowWidth / 3,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
//           1
//         </Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: "green",
//           height: 150,
//           width: windowWidth / 3,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
//           1
//         </Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: "blue",
//           height: 150,
//           width: windowWidth / 3,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
//           1
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// }

function App() {
  const [refreshing, setRefreshing] = useState(false);
  /**
   * This is a function that sets a refreshing state to true, logs a message, waits for 2 seconds, sets
   * the refreshing state to false, and logs another message.
   */
  const onRefresh = () => {
    setRefreshing(true);
    console.log("start refresh");
    setTimeout(() => {
      setRefreshing(false);
      console.log("end refresh");
    }, 2000);
  };
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "black",
          height: 70,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
          Kerja IT
        </Text>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <JobCard number={1} />
        <JobCard number={2} />
        <JobCard number={3} />
        <JobCard number={4} />
        <JobCard number={5} />
        <JobCard number={6} />
        <JobCard number={7} />
        <JobCard number={8} />
        <JobCard number={9} />
        <JobCard number={10} />
        <JobCard number={11} />
        <JobCard number={12} />
        <JobCard number={13} />
        <JobCard number={14} />
        <JobCard number={15} />
        <JobCard number={16} />
        <JobCard number={17} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
