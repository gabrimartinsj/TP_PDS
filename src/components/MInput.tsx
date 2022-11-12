
import { View, StyleSheet, Text, TextInput } from "react-native";
import { CustomTheme } from "../styles/theme";
import { useTheme } from "react-native-paper";
import { useState } from "react";


type Props = {
  inputName: string;
  initializedValue: string;
  inputProps?: Object;
  onChange?: (arg: string) => void;
  proportions?: [number, number];
};

export default function MInput(props: Props) {
  const { colors } = useTheme() as CustomTheme;

  const proportions = props.proportions == undefined ? [2, 5] : props.proportions;
  
  const [value, setValue] = useState(props.initializedValue);


  function onChange(content: string) {
    setValue(content);
    if(props.onChange != undefined)
      props.onChange(content);
  }

  return (
    <View style={styles.singleInputView}>
      <View style={{flex: proportions[0]}}>
        <Text style={[styles.text, {color: colors.primary}]}>{props.inputName}</Text>
      </View>
      <View style={{flex: proportions[1]}}>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={value}
          {...props.inputProps}/>
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  singleInputView: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 10,
  },
  input: {
    borderColor: "lightgrey",
    borderBottomWidth: 2
  },
  text: {
    fontSize: 14,
    fontWeight: "bold"
  }
});
