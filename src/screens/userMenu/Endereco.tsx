
import { StyleSheet, View, Text } from "react-native";
import ScreenBase from "./ScreenBase";
import { CustomTheme } from "../../styles/theme";
import { useTheme } from "react-native-paper";

type EnderecoInfo = {
  rua: string;
  numero: string;
  cidade: string;
  estado: string;
  cep: string;
};

type Props = {};

function EnderecoRender(info: EnderecoInfo, idx: number) {
  const { colors } = useTheme() as CustomTheme;
  
  return (
    <View style={styles.enderecoContainer} key={"END"+idx}>
      <Text style={{color: colors.primary}}>{info.rua}, {info.numero}</Text>
      <Text style={{color: colors.primary}}>{info.cidade}, {info.estado}</Text>
      <Text style={{color: colors.primary}}>CEP: {info.cep}</Text>
    </View>
  );
}

const Endereco = (props: Props) => {
  
  const enderecos = [
    {
      rua: "Rua Afrânio Peixoto",
      numero: "313",
      cidade: "Rio dos Peixes",
      estado: "SP",
      cep: "12423-124"
    },
    {
      rua: "Rua 21 de Dezembro",
      numero: "3131",
      cidade: "Agolândia",
      estado: "MT",
      cep: "72413-444"
    }
  ];

  const components = enderecos.map(EnderecoRender);
  
  return (<ScreenBase
    title="Endereços: "
    components={components}
  />);
};

export default Endereco;

const styles = StyleSheet.create({
  enderecoContainer: {
    borderBottomWidth: 2,
    borderColor: "lightgrey",
    padding: 10,
    width: "100%"
  },
});
