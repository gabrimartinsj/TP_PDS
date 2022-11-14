
import { StyleSheet, View } from "react-native";
import ScreenBase from "./ScreenBase";
import Card, { CardType } from "../../components/atoms/Card";

type Produto = {
  nome: string;
  preco: number;
  desconto: number;
  image: string;
};


type Props = {};

const UltimosProdutosVistos = (props: Props) => {
  
  const produtos: Produto[] = [
    {
      nome: "Adidas white sneakers for men",
      image: "https://picsum.photos/190/200?random=",
      preco: 68,
      desconto: 50,
    },
    {
      nome: "Nike black running shoes for men",
      image: "https://picsum.photos/220/220?random=",
      preco: 75,
      desconto: 20,
    },
    {
      nome: "Adidas white sneakers for men",
      image: "https://picsum.photos/190/200?random=",
      preco: 68,
      desconto: 50,
    },
    {
      nome: "Nike black running shoes for men",
      image: "https://picsum.photos/220/220?random=",
      preco: 75,
      desconto: 20,
    },
    {
      nome: "Adidas white sneakers for men",
      image: "https://picsum.photos/190/200?random=",
      preco: 68,
      desconto: 50,
    },
    {
      nome: "Nike black running shoes for men",
      image: "https://picsum.photos/220/220?random=",
      preco: 75,
      desconto: 20,
    },
  ];

  const components = produtos.map((value, idx) => {
    return (<Card 
      card={{
        img: value.image,
        title: value.nome,
        price: "R$" + value.preco.toFixed(2) + " " + value.desconto.toString() + "% OFF"
      }}
      key={"PROD_VISTO"+idx}
    />);
  });
  
  return (<ScreenBase
    title="Últimos produtos vistos:"
    components={
      [<View key={"PRODUTOS_VISTOS"} style={styles.container}>
        {components}
      </View>]
    }
  />);
};

export default UltimosProdutosVistos;

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row"
  }
});
