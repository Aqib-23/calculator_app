import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import style from "./stylesheet";
import Interface from "./Interface";

export default Buttons = () => {
  const [btnvalue, setbtnvalue] = useState("");


  const getvalue = (getbtnvalue) => {
    setbtnvalue((prvvalue) => prvvalue + getbtnvalue);
    console.log(btnvalue);
    if (getbtnvalue == "=") {
      calculation();
    } else if (getbtnvalue == "C") {
      clearbtnvalue();
    }
  };

  const calculation = () => {
    try {
      const finalanswer = eval(btnvalue);
      setbtnvalue((userinput) => userinput + finalanswer);
      console.log(finalanswer);
    } catch (error) {
      console.warn("error is", error);
    }
  };

  const clearbtnvalue = () => {
    setbtnvalue("");
  };

  const button = [
    {
      id: 0,
      value: "7",
    },
    {
      id: 1,
      value: "8",
    },
    {
      id: 2,
      value: "9",
    },
    {
      id: 3,
      value: "/",
    },
    {
      id: 5,
      value: "4",
    },
    {
      id: 6,
      value: "5",
    },
    {
      id: 7,
      value: "6",
    },
    {
      id: 8,
      value: "*",
    },
    {
      id: 9,
      value: "1",
    },
    {
      id: 10,
      value: "2",
    },
    {
      id: 11,
      value: "3",
    },
    {
      id: 12,
      value: "-",
    },
    {
      id: 13,
      value: "0",
    },
    {
      id: 14,
      value: "+",
    },
    {
      id: 15,
      value: "=",
    },
    {
      id: 16,
      value: "C",
    },
  ];


  return (
    <View>
      <Interface statevalue={btnvalue}></Interface>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        {button.map((item, index) => (
          <View key={index}>
            <Pressable onPress={() => getvalue(item.value)}>
              <View
                style={{
                  borderBlockColor: "gray",
                  borderWidth: 1,
                  borderRadius: 90,
                  height: 60,
                  margin: 10,
                  width: 60,
                }}
              >
                <Text style={{ textAlign: "center", fontSize: 30, padding: 7 }}>
                  {item.value}
                </Text>
              </View>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
};
