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
  console.log(props.DATA)

  const data = {
    labels: props.Labels ? props.Labels : [0],
    datasets: [
      {
        data: props.DATA ?props.DATA :[0],
        color: () => props.Color, 
        strokeWidth: 3, 
      },
    ],
  }

const chartConfig = {
  backgroundGradientFrom: "transparent",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "transparent",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => props.Color, 
  strokeWidth: 0, 
  barPercentage: 0.2,
  useShadowColorFromDataset: false, 
}
const animatedValue = new Animated.Value(0);
useEffect(() => {
  Animated.timing(animatedValue, {
    toValue: 1, 
    duration: 1000,
    useNativeDriver: true,
  }).start()
}, [])

  return (
      <View>
        <View style={{}}>
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 10,
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
