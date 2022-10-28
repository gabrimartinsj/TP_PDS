
import { View, Text, StyleSheet } from "react-native";


type MDescValueProps = {
  description: string,
  value: string,
  fontSize: number,
  color: string
};

export default function MDescValue(props: MDescValueProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontSize: props.fontSize, color: props.color}]}>{props.description}</Text>
      <Text style={[styles.text, {fontSize: props.fontSize, color: props.color}]}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontWeight: "bold"
  }
});
