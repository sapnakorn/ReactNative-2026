import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function MyIcon(props:any) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TouchableOpacity style={{ alignItems : "center" }} onPress={ props.onPress } >
        <FontAwesome6 name={props.name} size={props.size} color={props.color} />
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
