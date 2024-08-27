import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Interface from "./components/Interface";
import Buttons from "./components/Buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const [icon, seticon] = useState(true);

  const [darkmode , setdarkmode] = useState('#393939')

  // const [on , seton] = useState(false)

  const togglebutton = () => {
    seticon(!icon);
    if(darkmode=='#393939')
    setdarkmode('white')
  else{
    setdarkmode('#393939')
  }

  };

  return (
    <View style={{ flex: 1, justifyContent: "flex-end" , backgroundColor:darkmode }}>
      <Interface></Interface>
      <Buttons></Buttons>
      <View style={{ height: 30, width: 50, }}>
        {icon == true ? (
          <MaterialCommunityIcons
            onPress={() => togglebutton()}
            name="toggle-switch"
            size={40}
            color="black"
          />
        ) : (
          <MaterialCommunityIcons
            onPress={() => togglebutton()}
            name="toggle-switch-off"
            size={40}
            color="gray"
          />
        )}
      </View>
    </View>
  );
}
