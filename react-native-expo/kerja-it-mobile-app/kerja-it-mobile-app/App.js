import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import JobCard from "./components/JobCard";
import { useState } from "react";

function App() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  /**
   * This is a function that sets a refreshing state to true, logs a message, waits for 2 seconds, sets
   * the refreshing state to false, and logs another message.
   */
  const onRefresh = async () => {
    setRefreshing(true);
    console.log("start refresh");
    fetchJobsData();
    setTimeout(() => {
      setRefreshing(false);
      console.log("end refresh");
    }, 2000);
  };

  const fetchJobsData = async () => {
    const res = await fetch("https://sec-jobs-rest.onrender.com/api/jobs");
    const data = await res.json();
    setData(data);
    return data;
  };

  fetchJobsData();

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
        {data.map((job, index) => (
          <JobCard number={index + 1} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
