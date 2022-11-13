
import { StyleSheet, Text, View } from "react-native";
import ScreenBase from "./ScreenBase";
import MPedido from "../../components/MPedido";

type Props = {};

type ProdutoInfo = {
  nome: string;
  quantidade: number;
};

type Pedido = {
  id: number;
  data: string;
  status: string;
  produtos: ProdutoInfo[];
};

const Pedidos = (props: Props) => {

  const components = [
    <MPedido
      id={0}
      data={"11/09/2020"}
      status={"entregue"}
      produtos={[
        {
          nome: "Camisa colorida vermelha",
          quantidade: 2
        },
        {
          nome: "Bota de couro Preta",
          quantidade: 1
        }
      ]}/>,
    <MPedido
      id={1}
      data={"15/09/2020"}
      status={"entregue"}
      produtos={[
        {
          nome: "Camisa colorida rosa",
          quantidade: 1
        },
        {
          nome: "Bota de couro Branca",
          quantidade: 10
        },
        {
          nome: "Jaqueta de couro Vermelha",
          quantidade: 1
        }
      ]}/>
  ];

  return (<ScreenBase
    title="Pedidos: "
    components={components}
  />);
};

export default Pedidos;

const styles = StyleSheet.create({});
