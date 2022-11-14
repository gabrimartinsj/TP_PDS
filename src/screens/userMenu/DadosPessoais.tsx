
import { StyleSheet, Text, View, TextInput } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";
import MAvatarImage from "../../components/MAvatarImage";
import MInput from "../../components/MInput";
import ScreenBase from "./ScreenBase";


type Props = {};

type DadosPessoaisData = {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
};

type User = {
  image: string;
  dadosPessoais: DadosPessoaisData;
};

const DadosPessoais = (props: Props) => {

  const user = {
    image: "https://picsum.photos/200/300?random=",
    dadosPessoais: {
      nome: "Renato Diniz de Souza",
      email: "renatodiniz@gmail.com",
      cpf: "56784122569",
      telefone: "32996052132"
    }
  };

  const components = [
    <MInput
      key={"EMAIL_INPUT"}
      inputName={"Email: "}
      initializedValue={user.dadosPessoais.email}
      inputProps={{keyboardType: "email-address"}}/>,
    <MInput
      key={"CPF_INPUT"}
      inputName={"CPF: "}
      initializedValue={user.dadosPessoais.cpf}
      inputProps={{keyboardType: "numeric-pad"}}/>,
    <MInput
    key={"TELEFONE_INPUT"}
      inputName={"Telefone: "}
      initializedValue={user.dadosPessoais.telefone}
      inputProps={{keyboardType: "numeric-pad"}}/>
  ];

  return (<ScreenBase
    title="Dados Pessoais: "
    components={components}
  />);
};

export default DadosPessoais;

const styles = StyleSheet.create({
  userInfo: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  inputUserInfo: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%"
  },
});

