import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ScreenContainer from "../../components/ScreenContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { Usuario } from "../../@types/entities/Usuario";
import {
  getInformacaoPessoalStart,
  login,
} from "../../features/user/userActions/userActions";
import MenuItemList, { MenuItemListType } from "../../components/MenuItemList";
import MAvatarImage from "../../components/MAvatarImage";
import theme, { CustomTheme } from "../../styles/theme";
import { useTheme } from "react-native-paper";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { UserMenuStackParamList } from "../../navigation/userMenuNavigation/UserMenuNavigation";

type Props = {};

const UserMenu = (props: Props) => {
  const { colors } = useTheme() as CustomTheme;

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user) as Usuario;

  useEffect(() => {
    dispatch(getInformacaoPessoalStart(0));
  }, []);

  const navigation = useNavigation<NavigationProp<UserMenuStackParamList>>();

  useEffect(() => {
    dispatch(
      login({
        id: 0,
        nome: "Renato Diniz de Souza",
        email: "renatodiniz@gmail.com",
        image: "https://picsum.photos/200/300?random=",
      })
    );
  }, []);

  const listaMenu: MenuItemListType[] = [
    {
      icon: "key-outline",
      title: "Dados Pessoais",
      action: () => navigation.navigate("Dados Pessoais"),
      description: "Entre para ver os dados pessoais",
    },
    {
      icon: "text-box-outline",
      title: "Pedidos",
      action: () => navigation.navigate("Pedidos"),
      description: "Entre para ver os pedidos",
    },
    {
      icon: "text-box-outline",
      title: "Últimos produtos vistos",
      action: () => navigation.navigate("UltimosProdutosVistos"),
      description: "Entre para ver os últimos produtos vistos",
    },
    {
      icon: "key-outline",
      title: "Endereços",
      action: () => navigation.navigate("Enderecos"),
      description: "Entre para ver os endereços cadastrados",
    },
  ];

  return (
    <ScreenContainer>
      <View style={styles.userInfo}>
        <MAvatarImage imageSize={48} imageUrl={user.image} />

        <View>
          <Text style={{ color: colors.primary, fontSize: 28, paddingTop: 8 }}>
            {user.nome}
          </Text>
          <Text style={{ color: colors.text, fontSize: 18 }}>{user.email}</Text>
        </View>
      </View>
      <View>
        {listaMenu.map((item, idx) => (
          <MenuItemList key={idx} menuItemList={item} />
        ))}
      </View>
    </ScreenContainer>
  );
};

export default UserMenu;

const styles = StyleSheet.create({
  userInfo: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
