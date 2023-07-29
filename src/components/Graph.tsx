import React, { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit"
import {
  View,
  TextInput,
  Button,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,Animated
} from "react-native";
import { Dimensions } from "react-native"

const screenWidth = Dimensions.get("window").width

const Graph = ({...props}) => {
  

  const data = {
    labels: props.Labels,
    datasets: [
      {
        data: [3, 1, 4, 8, 10, 22, 5, 66, 77, 88, 20, 0, 22, 78, 120],
        color: () => props.Color, // optional (not needed since we have chartConfig)
        strokeWidth: 3, // optional
      },
    ],
  }

  // ...
const chartConfig = {
  backgroundGradientFrom: "transparent",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "transparent",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => props.Color, // Use a constant color value // grid color 
  strokeWidth: 0, // optional, default 3
  barPercentage: 0.2,
  useShadowColorFromDataset: false, // optional
}
// ...
const animatedValue = new Animated.Value(0);
useEffect(() => {
  Animated.timing(animatedValue, {
    toValue: 1, // The final value you want to animate to
    duration: 1000, // The duration of the animation in milliseconds
    useNativeDriver: true, // Enable native driver for better performance
  }).start();
}, []);

  return (
      <View>
        <View style={{}}>
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 30,
              justifyContent: "center",
            }}
          >
           <Animated.View
              style={{
                borderRadius: 12,
                borderColor: "transparent",
                backgroundColor: "your_desired_color_here",
                // Use the interpolate function to interpolate animatedValue to the desired opacity
                opacity: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1], // Adjust the range as needed
                }),
              }}
            >
              <LineChart
                data={data}
                width={screenWidth * 0.975}
                height={80}
                chartConfig={chartConfig}
                withVerticalLabels={true}
                withDots={false}
                yLabelsOffset={2}
                style={{
                  borderRadius: 7,
                  borderColor: "transparent",
                }}
              />
            </Animated.View>
          </ScrollView>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({

  touchableOpacity: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
  },
  subContainer: {
    justifyContent: "space-around",
    borderRadius: 6.25,
    width: "10%",
    height: "95%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3C6FBC",
  },
})

export default Graph
