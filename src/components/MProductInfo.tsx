import { View, Text } from "react-native";
import { CustomTheme } from "../styles/theme";
import { useTheme } from "react-native-paper";

type Props = {
  name: string;
  price: number;
  desconto: number;
};

function calculateDiscount(price: number, discount: number): number {
  return (price * (100 - Math.round(discount))) / 100;
}
/*
function toMoneyPattern(num: number): string {
  return num ? "R$" + num.toFixed(2).replace(".", ",") : "";
}
*/
export default function MProdutoInfo(props: Props) {
  const { colors } = useTheme() as CustomTheme;

  return (
    <>
      <Text style={{ color: colors.text, fontSize: 16 }}>{props.name}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          paddingTop: 10,
        }}
      >
        <Text
          style={{
            color: colors.primary,
            fontSize: 16,
            fontWeight: "bold",
            paddingRight: 10,
          }}
        >
          {calculateDiscount(props.price, props.desconto)}
        </Text>
        <Text
          style={{
            color: colors.disabled,
            fontSize: 12,
            textDecorationLine: "line-through",
            paddingRight: 10,
          }}
        >
          {props && props.price}
        </Text>
        <Text style={{ color: "orange", fontSize: 12 }}>
          {Math.round(props.desconto)}% OFF
        </Text>
      </View>
    </>
  );
}
