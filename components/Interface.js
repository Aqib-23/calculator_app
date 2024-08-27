import React, { useState } from "react";
import { View, Text } from "react-native";
import stylesheet from "./stylesheet";

export default Interface = (props) => {

  let newvalue = props.statevalue;

  return (
    <View style={{marginTop:40}}>
      <Text
        style={{
          fontSize: 30,
          // backgroundColor: "#D8D8D8",
          width: 350,
          height: 370,
          borderRadius: 30,
          borderColor: "gray",
          borderWidth: 1,
          padding: 10,
          margin: 5,
          color:'black'
        }}
      >
        {newvalue}
      </Text>
    </View>
  );
};
