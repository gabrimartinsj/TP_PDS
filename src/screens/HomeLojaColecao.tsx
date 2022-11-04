
import ScrollViewContainer from "../components/ScrollViewContainer";
import Card, { CardType } from "../components/atoms/Card";
import { useTheme } from "react-native-paper";
import { CustomTheme } from "../styles/theme";
import { Text, View, StyleSheet } from "react-native";


type Produto = {
  nome: string,
  preco: number,
  desconto: number,
  image: string
};

type Colecao = {
  nome: string,
  produtos: Produto[]
};

export default function HomeLojaColecao() {
  
  const { colors } = useTheme() as CustomTheme;


  const colecao = {
    nome: "Coleção Masculina",
    produtos: [
      {
        nome: "Allen Solly Regular fit cotton shirt",
        preco: 40.25,
        desconto: 15,
        image: "https://picsum.photos/200/330?random=1"
      },
      {
        nome: "Calvin Clein Regular fit slim fit shirt",
        preco: 62.4,
        desconto: 20,
        image: "https://picsum.photos/200/330?random=2"
      },
      {
        nome: "H&M Regular fit cotton shirt",
        preco: 70.8,
        desconto: 20,
        image: "https://picsum.photos/200/330?random=3"
      },
      {
        nome: "Calvin Clein Regular fit casual shirt",
        preco: 75,
        desconto: 25,
        image: "https://picsum.photos/200/330?random=4"
      },
      {
        nome: "Tommy Hilfiger slim fit semi formal shirt",
        preco: 71.3,
        desconto: 15,
        image: "https://picsum.photos/200/330?random=5"
      },
      {
        nome: "Arrow slim fit semi formal shirt",
        preco: 53.9,
        desconto: 10,
        image: "https://picsum.photos/200/330?random=6"
      },
    ]
  };

  let rows: Produto[][] = [];

  for(let i = 0; i < colecao.produtos.length; i++) {
    if(i % 2 == 0)
      rows.push([colecao.produtos[i]]);
    else
      rows[rows.length - 1].push(colecao.produtos[i]);
  }

  return (
    <ScrollViewContainer>
      <Text style={{color: colors.primary, fontSize: 18, paddingLeft: 15, paddingBottom: 8, paddingTop: 10}}>{colecao.nome}</Text>
      <View style={styles.mainContainer}>
        {
          rows.map((value, idx) => {
            return (<View style={styles.row}>
              {
                value.map((produto, idx) => {
                  return (<Card card={{
                    img: produto.image,
                    title: produto.nome, 
                    price: "R$" + produto.preco.toFixed(2) + " " + produto.desconto.toString() + "% OFF"
                  }} />);
                })
              }
            </View>);
          })
        }
      </View>
    </ScrollViewContainer>);
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column"
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  }
});
