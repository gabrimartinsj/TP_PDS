
import { FlatList } from "react-native-gesture-handler";
import ScrollViewContainer from "../components/ScrollViewContainer";
import LongBox, { LongBoxType } from "../components/atoms/LongBox";
import Card, { CardType } from "../components/atoms/Card";
import HorizontalList from "../components/compose/HorizontalList";

type Colecao = {
  nome: string,
  image: string
};

type Produto = {
  nome: string,
  preco: number,
  desconto: number,
  image: string
};

type ProductSection = {
  nome: string,
  produtos: Produto[]
};

type Loja = {
  colecoes: Colecao[],
  sections: ProductSection[]
};


export default function HomeLoja() {

  const colecoes: Colecao[] = [
    {
      nome: "Masculina",
      image: "https://picsum.photos/200/330?random="
    },
    {
      nome: "Feminina",
      image: "https://picsum.photos/220/330?random="
    }
  ];

  const produtos: Produto[] = [
    {
      nome: "Adidas white sneakers for men",
      image: "https://picsum.photos/190/200?random=",
      preco: 68,
      desconto: 50
    },
    {
      nome: "Nike black running shoes for men",
      image: "https://picsum.photos/220/220?random=",
      preco: 75,
      desconto: 20
    },
  ];

  const sections: ProductSection[] = [
    {
      nome: "Novos produtos",
      produtos: produtos
    },
    {
      nome: "Vistos recentemente",
      produtos: produtos
    },
  ];

  return (
    <ScrollViewContainer>
      <FlatList
        scrollEnabled={false}
        centerContent
        numColumns={1}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{
          alignSelf: "flex-start",
        }}
        data={colecoes.map((colecao) => ({title: colecao.nome, price: "Explorar", img: colecao.image} as LongBoxType))}
        renderItem={(item) => (
          <LongBox key={"COL" + item.index.toString()} longbox={item.item} />
        )}
      />
      {
        sections.map((value, idx) => (
          <HorizontalList
            title={value.nome}
            data={ value.produtos.map((produto) => ({
              img: produto.image,
              title: produto.nome,
              price: "R$" + produto.preco.toFixed(2) + " " + produto.desconto.toString() + "% OFF"
            })) as CardType[]}
            renderItem={(item) => <Card key={"Prod" + idx.toString() + "." + item.index.toString()} card={item.item} />}
          />
        ))
      }
    </ScrollViewContainer>
  );
}
