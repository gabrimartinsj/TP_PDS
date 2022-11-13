
import ScreenContainer from "../../components/ScreenContainer";
import MAvatarImage from "../../components/MAvatarImage";
import { StyleSheet, View, Text } from "react-native";
import { CustomTheme } from "../../styles/theme";
import { useTheme } from "react-native-paper";


type Props = {
  title: string;
  components: JSX.Element[];
};

export default function ScreenBase(props: Props) {

  const { colors } = useTheme() as CustomTheme;

  const headerData = {
    nome: "Renato Diniz de Souza",
    image: "https://picsum.photos/200/300?random="
  };

  return (
    <ScreenContainer>
      <View style={styles.userInfo}>
        <MAvatarImage
          imageSize={48}
          imageUrl={headerData.image}
        />

        <Text style={{ color: colors.primary, fontSize: 28, paddingTop: 8 }}>
          {headerData.nome}
        </Text>

        <View style={styles.inputUserInfo}>
          <Text
            style={{ color: colors.primary, fontSize: 20, marginTop: 20, marginBottom: 10}}>
            {props.title}
          </Text>
        </View>

        {props.components}
      </View>
    </ScreenContainer>
  );
}

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
