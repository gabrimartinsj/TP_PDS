
import { Text, View, StyleSheet } from "react-native"; 
import { CustomTheme } from "../styles/theme";
import { useTheme } from "react-native-paper";


type ProdutoInfo = {
  nome: string;
  quantidade: number;
};

type Props = {
  id: number;
  data: string;
  status: string;
  produtos: ProdutoInfo[];
};

export default function MPedido(props: Props) {

  const { colors } = useTheme() as CustomTheme;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: colors.primary}]}>Pedido: {props.id}</Text>
      <Text style={[styles.text, {color: colors.primary}]}>Data: {props.data}</Text>
      <Text style={[styles.text, {color: colors.primary}]}>Status: {props.status}</Text>
      
      <Text style={[styles.text, {color: colors.primary, paddingTop: 10}]}>Itens: </Text>
      <View style={styles.productsContainer}>
        {props.produtos.map((value, idx) => {
          return (
            <Text key={"ITEM_PEDIDO" + idx} style={[styles.text, {color: colors.primary}]}>{value.nome}: {value.quantidade}</Text>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "lightgrey",
    width: "100%"
  },
  productsContainer: {
    paddingLeft: 10
  },
  text: {
    paddingTop: 2,
    paddingBottom: 2
  }
});
