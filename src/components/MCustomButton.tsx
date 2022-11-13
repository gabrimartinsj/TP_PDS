
import { Pressable, Text } from "react-native";


type MCustomButtonProps = {
  disabled?: boolean,
  style?: Object,
  disabledStyle?: Object,
  textStyle?: Object,
  textDisabledStyle?: Object,
  onPress?: Function,
  text?: string
};

export default function MCustomButton(props: MCustomButtonProps) {
  function callOnPressIfEnabled() {
    if(!props.disabled && props.onPress != undefined)
      props.onPress();
  }

  return (
    <Pressable style={(props.disabled ?? false) ? (props.disabledStyle ?? props.style) : props.style} onPress={callOnPressIfEnabled}>
      <Text selectable={false} style={(props.disabled ?? false) ? (props.textDisabledStyle ?? props.textStyle) : props.textStyle}>{props.text}</Text>
    </Pressable>
  );
}
